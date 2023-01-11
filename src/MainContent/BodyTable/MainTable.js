import { Fragment, useState } from "react";
import classes from "./MainTable.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import Edit from "../Edit/Edit";

const MainTable = ({ deleteUser, listEdit, list }) => {
  const [editModal, setEditModal] = useState(false);

  const [info, setInfo] = useState({
    id: 0,
    name: "",
    email: "",
    number: "",
    date: new Date(),
  });

  const deleteUserHandler = (userId) => {
    deleteUser(userId);
  };

  const editUserHandler = (userInfo) => {
    setEditModal(true);
    setInfo(userInfo);
  };

  const closeEditModal = (close) => {
    setEditModal(close);
  };

  const onCloseModal = (close) => {
    setEditModal(close);
  };

  const editListHandler = (editedRow) => {
    setInfo(editedRow);
    listEdit(editedRow);
  };

  return (
    <Fragment>
      {editModal && (
        <Edit
          onClose={closeEditModal}
          onCloseModal={onCloseModal}
          info={info}
          setInfo={setInfo}
          edit={editListHandler}
        />
      )}
      <table className={classes}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
          {list.map((listRow) => (
            <tr key={listRow.id} className={classes.tr}>
              <td>{listRow.name}</td>
              <td>{listRow.email}</td>
              <td>{listRow.date}</td>
              <td>{listRow.number}</td>
              <td className={classes.icons}>
                <FaEdit
                  size="1.3rem"
                  color="#F57C00"
                  cursor="pointer"
                  onClick={() => editUserHandler(listRow)}
                />
                <FaTrash
                  size="1.3rem"
                  color="#F44336"
                  cursor="pointer"
                  onClick={() => deleteUserHandler(listRow.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default MainTable;
