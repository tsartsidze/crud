import { useEffect, useState } from "react";
import MainTable from "./MainContent/bodyTable/MainTable";
import EmptyUsers from "./MainContent/emptyList/EmptyUsers";
import TableHeader from "./MainContent/header/TableHead";
import Container from "./UI/Container";

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
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    dataList.length === 0 ? setEmptyList(true) : setEmptyList(false);
  }, [dataList.length]);

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
    <Container>
      <TableHeader newDataList={newDataListHandler} />
      {!emptyList && (
        <MainTable
          list={dataList}
          deleteUser={deleteUserHandler}
          listEditHandler={listEditHandler}
        />
      )}
      {emptyList && <EmptyUsers>There is not any user</EmptyUsers>}
    </Container>
  );
}

export default App;
