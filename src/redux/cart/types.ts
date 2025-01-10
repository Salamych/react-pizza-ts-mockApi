export type CartItemType = {
  id: string;
  title: string;
  type: string;
  price: number;
  count: number;
  size: number;
  imageUrl: string;
};

export type CartInitialStateType = {
  totalPrice: number;
  totalCount: number;
  items: CartItemType[];
};