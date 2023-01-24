import { createSlice } from "@reduxjs/toolkit";

const addUserState = {
  visibleAddModal: false,
};

const addUserSlice = createSlice({
  name: "addModal",
  initialState: addUserState,
  reducers: {
    showModal(state) {
      state.visibleAddModal = true;
    },
    hideModal(state) {
      state.visibleAddModal = false;
    },
  },
});

export const addUserActions = addUserSlice.actions;

export default addUserSlice.reducer;
