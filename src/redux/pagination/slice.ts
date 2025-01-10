import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginationStateType } from "./types";


const initialState: PaginationStateType = {
  currentPage: 1
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePageCount: (state, action: PayloadAction<{page: number}>) => {
      state.currentPage = action.payload.page;
    },
    setPageCount: (state, action: PayloadAction<{currentPage: number}>) => {
      state.currentPage = action.payload.currentPage;
    } 
  },
});



export const { changePageCount, setPageCount } = paginationSlice.actions;

export default paginationSlice.reducer;