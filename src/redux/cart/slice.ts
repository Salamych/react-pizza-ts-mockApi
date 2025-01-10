import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { CartInitialStateType, CartItemType } from "./types";
import { getTotalPrice } from "../../utils/getTotalPrice";
import { getTotalCount } from "../../utils/getTotalCount";

const data = getCartFromLS();

const initialState: CartInitialStateType = {
  totalPrice: data.totalPrice,
  totalCount: data.totalCount,
  items: data.items
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemType>) => {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if(findItem){
        findItem.count++;
      }
      else {
        state.items.push({
          ...action.payload,
          count: 1
        });
      }

      state.totalPrice = getTotalPrice(state.items);
      state.totalCount = getTotalCount(state.items);
     },

     plusItem: (state, action: PayloadAction<{id: string}>) => {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if(findItem){
        findItem.count++;
      }

      state.totalPrice = getTotalPrice(state.items);
      state.totalCount = getTotalCount(state.items);
     },

    minusItem: (state, action: PayloadAction<{id: string}>) => {
      const findItem = state.items.find(obj => obj.id === action.payload.id);

      if(findItem!.count > 1){
        findItem!.count--;
      }

      state.totalPrice = getTotalPrice(state.items);
      state.totalCount = getTotalCount(state.items);
    },
    removeItem: (state, action: PayloadAction<{id: string}>) => {
      state.items = state.items.filter(obj => obj.id !== action.payload.id);

      state.totalPrice = getTotalPrice(state.items);
      state.totalCount = getTotalCount(state.items);
    },

    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    }
  },
})

export const { addItem, plusItem, minusItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer