import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortInitialState, SortItem } from "./types";





const sortType: SortItem[] = [
  {name:'популярности (DESC)', sortProperty: 'rating'}, 
  {name:'популярности (ASC)', sortProperty: '-rating'}, 
  {name:'цене (DESC)', sortProperty: 'price'}, 
  {name:'цене (ASC)', sortProperty: '-price'}, 
  {name:'алфавиту (DESC)', sortProperty: 'title'},
  {name:'алфавиту (ASC)', sortProperty: '-title'}
];

const initialState: SortInitialState = {
  value: {name:'популярности (DESC)', sortProperty: 'rating'}, 
  sortType
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    changeSort: (state, action: PayloadAction<{type: SortItem}>) => {
      state.value = action.payload.type;
    },

    findSortType: (state, action: PayloadAction<{sortProperty: string}>) => {
      state.value = state.sortType.find(type => (
        type.sortProperty === action.payload.sortProperty
      )) as SortItem;
    } 
  },
})



export const { changeSort, findSortType } = sortSlice.actions

export default sortSlice.reducer