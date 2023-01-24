import { configureStore } from "@reduxjs/toolkit";

import addUserReducer from "./AddUser";
import editUserReducer from "./EditUser";

const store = configureStore({
  reducer: { addUserModal: addUserReducer, editUserModal: editUserReducer },
});

export default store;
