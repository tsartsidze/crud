import { useDispatch, useSelector } from "react-redux";
import { addUserActions } from "../../redux/AddUser";
import { makeStyles } from "mui-styles";
import FormModal from "../modalForm/FormModal";
import { Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  header: {
    padding: "10px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#34495e",
    borderRadius: "10px",
    marginTop: "40px",
    marginBottom: "50px",
    boxShadow: "3px 5px 20px grey",
    "& h2": {
      color: "white",
      fontSize: "2rem",
      fontWeight: "bold",
    },
  },
  buttonHeader: {
    "&.MuiButton-root": {
      padding: "15px",
      fontSize: "1rem",
      fontWeight: "bold",
      borderRadius: "8px",
      textTransform: "none",
    },
  },
}));

const TableHeader = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const addUserModal = useSelector(
    (state) => state.addUserModal.visibleAddModal
  );

  const visibleModalHandler = () => {
    dispatch(addUserActions.showModal());
  };

  return (
    <header className={classes.header}>
      {addUserModal && (
        <FormModal />
      )}
      <h2>Users list</h2>
      <Button
        variant="contained"
        color="success"
        onClick={visibleModalHandler}
        className={classes.buttonHeader}
      >
        Add New User
      </Button>
    </header>
  );
};

export default TableHeader;
