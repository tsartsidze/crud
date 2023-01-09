import { useEffect, useState } from "react";
import MainTable from "./MainContent/BodyTable/MainTable";
import EmptyUsers from "./MainContent/EmptyList/EmptyUsers";
import TableHeader from "./MainContent/Header/TableHead";
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
    const editdata = dataList.filter((item) => item.id !== editList.id);
    setDataList([...editdata, editList]);
  };

  return (
    <Container>
      <TableHeader newDataList={newDataListHandler} />
      {!emptyList && (
        <MainTable
          list={dataList}
          deleteUser={deleteUserHandler}
          listEdit={listEditHandler}
        />
      )}
      {emptyList && <EmptyUsers>There is not any user</EmptyUsers>}
    </Container>
  );
}

export default App;
