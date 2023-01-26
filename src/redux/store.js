import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./UserSlice";
import addUserReducer from "./AddUser";
import editUserReducer from "./EditUser";

const store = configureStore({
  reducer: {
    users: userReducer,
    addUserModal: addUserReducer,
    editUserModal: editUserReducer,
  },
});

export default store;
