import { TextField, Button, Box, Modal } from "@mui/material";
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
  "& Box": {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    width: "300px",
  },
  field: {
    "& .MuiInputBase-root": {
      marginTop: "8px",
      width: "300px",
      fontSize: "16px",
      paddingLeft: "10px",
    },
  },
  buttonGroup: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
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
    <>
      <div className={classes.backdrop} onClick={closeEditModal}></div>
      <form className={classes.modal} onSubmit={editHandler}>
        <Box>
          <Box>
            <TextField
              className={classes.field}
              label="Name"
              variant="outlined"
              type="text"
              id="name"
              value={info.name}
              onChange={(evet) => changeInfo("name", evet.target.value)}
            />
          </Box>

          <Box>
            <TextField
              className={classes.field}
              label="Email"
              variant="outlined"
              type="email"
              id="email"
              value={info.email}
              onChange={(evet) => changeInfo("email", evet.target.value)}
            />
          </Box>

          <Box>
            <TextField
              className={classes.field}
              label="Date"
              variant="outlined"
              type="date"
              id="date"
              value={info.date}
              onChange={(evet) => changeInfo("date", evet.target.value)}
            />
          </Box>

          <Box>
            <TextField
              className={classes.field}
              label="Number"
              variant="outlined"
              type="number"
              id="number"
              value={info.number}
              onChange={(evet) => changeInfo("number", evet.target.value)}
            />
          </Box>

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
            >
              Edit
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default Edit;
