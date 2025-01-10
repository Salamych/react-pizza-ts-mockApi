import { CartItemType } from "../redux/cart/types";

export const getTotalCount = (items: CartItemType[]) => {
  return items.reduce((sum, obj) => {
    return obj.count + sum;
  }, 0);
}