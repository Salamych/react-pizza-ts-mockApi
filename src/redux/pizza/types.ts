
export type ParamsType = { 
  order: string; 
  sortBy: string; 
  category: string; 
  search: string; 
  currentPage: number; 
};

export type PizzaItemType = {
  id: string; 
  title: string; 
  price: number; 
  imageUrl: string; 
  sizes: number[]; 
  types: number[];
  count: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export type PizzaInitialStateType ={
  items: PizzaItemType[];
  status: Status;
};