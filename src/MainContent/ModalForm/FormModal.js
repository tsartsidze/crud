import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../../UI/Button";
import classes from "./FormModal.module.css";

const Backdrop = (props) => {
  const closeModalHandler = (close) => {
    props.onClose(close);
  };

  return (
    <div
      className={classes.backdrop}
      onClick={() => closeModalHandler(false)}
    ></div>
  );
};

const Overlay = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    date: null,
    number: "",
  });

  const onChangeFunction = (key, value) => {
    setUserInfo({ ...userInfo, [key]: value });
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      userInfo.name === "" ||
      userInfo.email === "" ||
      userInfo.date === "" ||
      userInfo.number === ""
    ) {
      return;
    } else {
      props.newDataList({ ...userInfo, id: Math.random().toString() });
      props.deleteFormModal(false);
    }
  };

  return (
    <form className={classes.modal}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={userInfo.name}
          onChange={(event) => onChangeFunction("name", event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={userInfo.email}
          onChange={(event) => onChangeFunction("email", event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={userInfo.date}
          onChange={(event) => onChangeFunction("date", event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="number">Number</label>
        <input
          type="number"
          id="number"
          value={userInfo.number}
          onChange={(event) => onChangeFunction("number", event.target.value)}
        />
      </div>

      <Button className={classes.btnBackColor} onClick={addUserHandler}>
        Add New User
      </Button>
    </form>
  );
};

const FormModal = (props) => {
  const newDataListHandler = (newData) => {
    props.newDataList(newData);
  };

  const deleteModalHandler = (close) => {
    props.deleteFormModal(close);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          newDataList={newDataListHandler}
          deleteFormModal={deleteModalHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default FormModal;
