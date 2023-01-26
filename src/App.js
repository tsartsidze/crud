import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {userAction} from "./redux/UserSlice";
import MainTable from "./MainContent/bodyTable/MainTable";
import EmptyUsers from "./MainContent/emptyList/EmptyUsers";
import TableHeader from "./MainContent/header/TableHead";

function App() {
    const dispatch = useDispatch();
    const usersList = useSelector((store) => store.users);

  const listEditHandler = (editList) => {
     dispatch(userAction.editUser(editList));
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} md={7}>
        <TableHeader />
        {usersList.length > 0 && (
          <MainTable
            listEditHandler={listEditHandler}
          />
        )}
        {usersList.length === 0 && (
          <EmptyUsers>There is not any user</EmptyUsers>
        )}
      </Grid>
    </Grid>
  );
}

export default App;
