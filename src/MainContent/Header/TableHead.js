import { useState } from "react";
import Button from "../../UI/Button";
import FormModal from "../ModalForm/FormModal";
import classes from "./TableHead.module.css";

const TableHeader = ({ newDataList }) => {
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
      <Button className={classes.btnBackColor} onClick={visibleModalHandler}>
        Add New User
      </Button>
    </header>
  );
};

export default TableHeader;
