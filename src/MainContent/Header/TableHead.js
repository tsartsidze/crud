import { useState } from "react";
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

const TableHeader = ({ newDataList }) => {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);

  const visibleModalHandler = () => {
    setIsVisible(true);
  };

  const closeModalHandler = (close) => {
    setIsVisible(close);
  };

  const newDataListHandler = (newData) => {
    newDataList(newData);
  };

  const closeModalHander = (close) => {
    setIsVisible(close);
  };

  return (
    <header className={classes.header}>
      {isVisible && (
        <FormModal
          onClose={closeModalHandler}
          newDataList={newDataListHandler}
          deleteFormModal={closeModalHander}
        />
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
