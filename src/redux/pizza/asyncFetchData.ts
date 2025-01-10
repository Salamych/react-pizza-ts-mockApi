import axios from "axios";
import { ParamsType, PizzaItemType } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk<PizzaItemType[], ParamsType>(
  'pizza/fetchPizzasStatus',
  async (params: ParamsType) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get<PizzaItemType[]>(
      `https://67724fe2ee76b92dd491dd02.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`);

    return data;
  },
);