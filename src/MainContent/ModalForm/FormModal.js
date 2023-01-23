import { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./FormModal.module.css";
import { TextField, Button } from "@mui/material";
import { makeStyles } from "mui-styles";

const useStyles = makeStyles(() => ({
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    zIndex: 10,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  modal: {
    position: "fixed",
    top: "40%",
    left: "50%",
    width: "30%",
    transform: "translate(-50%, -50%)",
    zIndex: "100",
    overflow: "hidden",
    paddingTop: "50px",
    transition: "0.3 ease",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "12px",
    backgroundColor: "#cfd8dc",
  },
  field: {
    "& .MuiInputBase-root": {
      marginTop: "8px",
      width: "300px",
      fontSize: "16px",
      paddingLeft: "10px",
    },
  },
  addBtn: {
    "&.MuiButtonBase-root": {
      textTransform: "none",
    },
  },
  "& div": {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    width: "300px",
  },
}));

const Backdrop = ({ onClose }) => {
  const classes = useStyles();

  const closeModalHandler = (close) => {
    onClose(close);
  };

  return (
    <div
      className={classes.backdrop}
      onClick={() => closeModalHandler(false)}
    ></div>
  );
};

const Overlay = ({ newDataList, deleteFormModal }) => {
  const classes = useStyles();

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
      newDataList({ ...userInfo, id: Math.random().toString() });
      deleteFormModal(false);
    }
  };

  return (
    <form className={classes.modal}>
      <div>
        <div>
          <TextField
            className={classes.field}
            label="Name"
            variant="outlined"
            type="text"
            id="name"
            value={userInfo.name}
            onChange={(event) => onChangeFunction("name", event.target.value)}
          />
        </div>

        <div>
          <TextField
            className={classes.field}
            label="Email"
            variant="outlined"
            type="email"
            id="email"
            value={userInfo.email}
            onChange={(event) => onChangeFunction("email", event.target.value)}
          />
        </div>

        <div>
          <TextField
            className={classes.field}
            variant="outlined"
            type="date"
            id="date"
            value={userInfo.date}
            onChange={(event) => onChangeFunction("date", event.target.value)}
          />
        </div>

        <div>
          <TextField
            className={classes.field}
            label="Number"
            variant="outlined"
            type="number"
            id="number"
            value={userInfo.number}
            onChange={(event) => onChangeFunction("number", event.target.value)}
          />
        </div>

        <Button
          className={classes.addBtn}
          onClick={addUserHandler}
          variant="contained"
          color="success"
        >
          Add New User
        </Button>
      </div>
    </form>
  );
};

const FormModal = ({ newDataList, deleteFormModal, onClose }) => {
  const newDataListHandler = (newData) => {
    newDataList(newData);
  };

  const deleteModalHandler = (close) => {
    deleteFormModal(close);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          newDataList={newDataListHandler}
          deleteFormModal={deleteModalHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default FormModal;
