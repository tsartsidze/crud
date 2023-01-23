import { useState } from "react";
import { Grid } from "@mui/material";
import MainTable from "./MainContent/bodyTable/MainTable";
import EmptyUsers from "./MainContent/emptyList/EmptyUsers";
import TableHeader from "./MainContent/header/TableHead";

const usersList = [
  {
    id: Math.random().toString(),
    name: "Giorgi Tsartsidze",
    email: "Tsar@gmail.com",
    date: "2000-07-31",
    number: 551334455,
  },
  {
    id: Math.random().toString(),
    name: "Otar Lantbelidze",
    email: "Lant@gmail.com",
    date: "1992-09-21",
    number: 591121756,
  },
  {
    id: Math.random().toString(),
    name: "Rati Barbakadze",
    email: "Barba@gmail.com",
    date: "1999-12-11",
    number: 598329758,
  },
];

function App() {
  const [dataList, setDataList] = useState(usersList);

  const newDataListHandler = (newUser) => {
    setDataList((prevData) => {
      return [...prevData, newUser];
    });
  };

  const deleteUserHandler = (userId) => {
    const filteredList = dataList.filter((user) => user.id !== userId);
    setDataList(filteredList);
  };

  const listEditHandler = (editList) => {
    setDataList([
      ...dataList.map((row) => (row.id === editList.id ? editList : row)),
    ]);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={7}>
        <TableHeader newDataList={newDataListHandler} />
        {dataList.length > 0 && (
          <MainTable
            list={dataList}
            deleteUser={deleteUserHandler}
            listEditHandler={listEditHandler}
          />
        )}
        {dataList.length === 0 && (
          <EmptyUsers>There is not any user</EmptyUsers>
        )}
      </Grid>
    </Grid>
  );
}

export default App;
