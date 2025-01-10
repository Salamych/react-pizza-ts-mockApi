import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryStateType } from "./types";


const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const initialState: CategoryStateType = {
  value: 0,
  categories
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<{index: number}>) => {
      state.value = action.payload.index;
    },
    setCategory: (state, action: PayloadAction<{categoryId: number}>) => {
      state.value = action.payload.categoryId;
    } 
  },
});



export const { changeCategory, setCategory } = filterSlice.actions

export default filterSlice.reducer