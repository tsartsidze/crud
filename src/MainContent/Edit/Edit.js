import { useDispatch, useSelector } from "react-redux";
import { editUserAction } from "../../redux/EditUser";
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
  buttonGroup: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "12px",
  },
  editBtn: {
    "&.MuiButtonBase-root": {
      fontWeight: "bold",
      fontSize: "16px",
      border: "1px solid #f99c05",
      width: "100px",
      textTransform: "none",
      borderRadius: "8px",
    },
  },
  cancelBtn: {
    "&.MuiButtonBase-root": {
      fontWeight: "bold",
      fontSize: "16px",
      width: "100px",
      textTransform: "none",
      borderRadius: "8px",
      color: "grey",
      border: "1px solid grey",
    },
  },
}));

const Edit = ({ setInfo, info, onClose, edit }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const editUserModal = useSelector(
    (state) => state.editUserModal.visibleEditModal
  );

  const closeHandler = () => {
    dispatch(editUserAction.hideEditModal());
  };

  const changeInfo = (key, value) => {
    setInfo({ ...info, [key]: value });
  };

  const closeEditModal = () => {
    onClose(false);
  };

  const editHandler = (event) => {
    event.preventDefault();

    edit({
      ...info,
    });

    onClose(false);
  };

  return (
    <Modal open={editUserModal} onClose={closeHandler}>
      <Box className={classes.muiBox}>
        <Box className={classes.mainBox}>
          <TextField
            className={classes.field}
            label="Name"
            variant="outlined"
            type="text"
            id="name"
            value={info.name}
            onChange={(event) => changeInfo("name", event.target.value)}
          />

          <TextField
            className={classes.field}
            label="Email"
            variant="outlined"
            type="email"
            id="email"
            value={info.email}
            onChange={(event) => changeInfo("email", event.target.value)}
          />

          <TextField
            className={classes.field}
            label="Date"
            variant="outlined"
            type="date"
            id="date"
            value={info.date}
            onChange={(event) => changeInfo("date", event.target.value)}
          />

          <TextField
            className={classes.field}
            label="Number"
            variant="outlined"
            type="number"
            id="number"
            value={info.number}
            onChange={(event) => changeInfo("number", event.target.value)}
          />

          <Box className={classes.buttonGroup}>
            <Button
              className={classes.cancelBtn}
              variant="outlined"
              onClick={closeEditModal}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className={classes.editBtn}
              variant="contained"
              color="warning"
              onClick={editHandler}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default Edit;
