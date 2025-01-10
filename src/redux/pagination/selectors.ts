import { RootState } from "../store";

export const currentPageSelector = (state: RootState) => state.pagination.currentPage;