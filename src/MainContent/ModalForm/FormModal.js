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
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [numberValue, setNumberValue] = useState("");

  const nameHandler = (event) => {
    setNameValue(event.target.value);
  };

  const emailHandler = (event) => {
    setEmailValue(event.target.value);
  };

  const dateHandler = (event) => {
    setDateValue(event.target.value);
  };

  const numberHandler = (event) => {
    setNumberValue(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      nameValue === "" ||
      emailValue === "" ||
      dateValue === "" ||
      numberValue === ""
    ) {
      return;
    } else {
      const newDate = {
        id: Math.random().toString(),
        name: nameValue,
        email: emailValue,
        date: dateValue,
        number: numberValue,
      };

      props.newDataList(newDate);

      props.deleteFormModal(false);

      setNameValue("");
      setEmailValue("");
      setDateValue("");
      setNumberValue("");
    }
  };

  return (
    <form className={classes.modal}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={nameValue} onChange={nameHandler} />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={emailHandler}
        />
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" value={dateValue} onChange={dateHandler} />
      </div>

      <div>
        <label htmlFor="number">Number</label>
        <input
          type="number"
          id="number"
          value={numberValue}
          onChange={numberHandler}
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
