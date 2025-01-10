import { RootState } from "../store";

export const sortingSelector = (state: RootState) => state.sorting;
export const sortTypeSelector = (state: RootState) => state.sorting.value;