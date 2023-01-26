import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../redux/UserSlice";
import { editUserAction } from "../../redux/EditUser";
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

const MainTable = ({ deleteUser, listEditHandler}) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const editUserModal = useSelector(
    (state) => state.editUserModal.visibleEditModal
  );
  const usersList = useSelector((state) => state.users)

  const [info, setInfo] = useState({
    name: "",
    email: "",
    number: "",
    date: new Date(),
  });

  const deleteUserHandler = (deleteUserId) => {
    dispatch(userAction.deleteUser(deleteUserId))
  };

  const editUserHandler = (userInfo) => {
    dispatch(editUserAction.showEditModal());
    setInfo(userInfo);
  };

  const closeEditModal = () => {
    dispatch(editUserAction.hideEditModal());
  };

  const onCloseModal = () => {
    dispatch(editUserAction.hideEditModal());
  };

  const editListHandler = (editedRow) => {
    setInfo(editedRow);
    listEditHandler(editedRow);
  };

  return (
    <>
      {editUserModal && (
        <Edit
          onClose={closeEditModal}
          onCloseModal={onCloseModal}
          info={info}
          setInfo={setInfo}
          edit={editListHandler}
          editUserModal={editUserModal}
        />
      )}
      <TableContainer
        sx={{
          border: "1px solid #CFD8DC",
          borderRadius: "10px",
          boxShadow: "3px 5px 20px grey",
        }}
      >
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
            {usersList.map((listRow) => (
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
