import { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "mui-styles";
import Edit from "../edit/Edit";

const useStyles = makeStyles(() => ({
  tableRow1: {
    "& .MuiTableCell-root": {
      fontWeight: "bold",
    },
  },
}));

const MainTable = ({ deleteUser, listEditHandler, list }) => {
  const classes = useStyles();

  const [editModal, setEditModal] = useState(false);

  const [info, setInfo] = useState({
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
    listEditHandler(editedRow);
  };

  return (
    <>
      {editModal && (
        <Edit
          onClose={closeEditModal}
          onCloseModal={onCloseModal}
          info={info}
          setInfo={setInfo}
          edit={editListHandler}
        />
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={classes.tableRow1}>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((listRow) => (
              <TableRow key={listRow.id}>
                <TableCell>{listRow.name}</TableCell>
                <TableCell>{listRow.email}</TableCell>
                <TableCell>{listRow.date}</TableCell>
                <TableCell>{listRow.number}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="edit"
                    size="large"
                    onClick={() => editUserHandler(listRow)}
                  >
                    <EditIcon color="warning" />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={() => deleteUserHandler(listRow.id)}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MainTable;
