import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeSelected: (state, action) => {
      state.selected = action.payload;
      console.log(action.payload)
    },
    closeAll: (state) => {
      state.selected = null;
    },
  },
});

export const { changeSelected, closeAll } = modalSlice.actions;
export default modalSlice.reducer;
