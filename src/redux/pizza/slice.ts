import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaInitialStateType, PizzaItemType, Status } from "./types";
import { fetchPizzas } from "./asyncFetchData";


const initialState: PizzaInitialStateType = {
  items: [],
  status: Status.LOADING 
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<PizzaItemType[]>) => {
      state.items = action.payload;
    },  
  },
  
  extraReducers: (builder) => {
    
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
   
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  }
});


export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer