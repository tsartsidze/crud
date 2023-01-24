import { createSlice } from "@reduxjs/toolkit";

const editUserState = {
  visibleEditModal: false,
};

const editUserSlice = createSlice({
  name: "editUser",
  initialState: editUserState,
  reducers: {
    showEditModal(state) {
      state.visibleEditModal = true;
    },
    hideEditModal(state) {
      state.visibleEditModal = false;
    },
  },
});

export const editUserAction = editUserSlice.actions;

export default editUserSlice.reducer;
