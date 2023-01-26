import { createSlice } from "@reduxjs/toolkit";

let initialState = [
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
  }
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser (state, action) {
      state.push(action.payload);
    },
    deleteUser (state, action) {
      const existingUser = state.find((user) => user.id === action.payload)
      if (existingUser) {
        return state.filter((user) => user.id !== action.payload)
      }
    },
    editUser (state, action) {
      const { id } = action.payload;
      return [...state.map((user) => user.id === id ? action.payload : user)]


    }
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
