import { RootState } from "../store";


export const filterSelector = (state: RootState) => state.filter; 
export const categoryIdSelector = (state: RootState) => state.filter.value; 