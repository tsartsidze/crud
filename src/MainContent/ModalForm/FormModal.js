import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserActions } from "../../redux/AddUser";
import { TextField, Button, Box, Modal } from "@mui/material";
import { makeStyles } from "mui-styles";

const useStyles = makeStyles(() => ({
  muiBox: {
    "&.MuiBox-root": {
      position: "absolute",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "25%",
      backgroundColor: "#cfd8dc",
      boxShadow: 24,
      padding: "70px 50px 40px 50px",
      borderRadius: "12px",
    },
  },
  field: {
    "& .MuiInputBase-root": {
      marginBottom: "20px",
      width: "100%",
      fontSize: "16px",
      paddingLeft: "10px",
    },
  },
  mainBox: {
    "&.MuiBox-root": {
      width: "100%",
      display: "flex",
      alignItems: "cemter",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  addBtn: {
    "&.MuiButtonBase-root": {
      textTransform: "none",
      padding: "10px 20px",
      fontWeight: "700",
    },
  },
}));

const FormModal = ({ newDataList, deleteFormModal }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    date: "",
    number: "",
  });
  const classes = useStyles();

  const dispatch = useDispatch();
  const addUserModal = useSelector(
    (state) => state.addUserModal.visibleAddModal
  );

  const closeHandler = () => {
    dispatch(addUserActions.hideModal());
  };

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
    <Modal open={addUserModal} onClose={closeHandler}>
      <Box className={classes.muiBox}>
        <Box className={classes.mainBox}>
          <TextField
            className={classes.field}
            label="Enter your name"
            variant="outlined"
            type="text"
            id="name"
            value={userInfo.name}
            onChange={(event) => onChangeFunction("name", event.target.value)}
          />

          <TextField
            className={classes.field}
            label="Enter your email"
            variant="outlined"
            type="email"
            id="email"
            value={userInfo.email}
            onChange={(event) => onChangeFunction("email", event.target.value)}
          />

          <TextField
            className={classes.field}
            variant="outlined"
            type="date"
            id="date"
            value={userInfo.date}
            onChange={(event) => onChangeFunction("date", event.target.value)}
          />

          <TextField
            className={classes.field}
            label="Enter your number"
            variant="outlined"
            type="number"
            id="number"
            value={userInfo.number}
            onChange={(event) => onChangeFunction("number", event.target.value)}
          />

          <Box sx={{ textAlign: "center" }}>
            <Button
              className={classes.addBtn}
              onClick={addUserHandler}
              variant="contained"
              color="success"
            >
              Add New User
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default FormModal;
