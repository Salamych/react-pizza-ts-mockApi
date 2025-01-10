import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filter/slice';
import sortReducer from './sort/slice';
import paginationReducer from './pagination/slice';
import cartReducer from './cart/slice';
import pizzaReducer from './pizza/slice';
import searchReducer from './search/slice'
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    sorting: sortReducer,
    pagination: paginationReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
    search: searchReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 