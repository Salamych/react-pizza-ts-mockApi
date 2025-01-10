import { CartItemType } from "../redux/cart/types";
import { getTotalCount } from "./getTotalCount";
import { getTotalPrice } from "./getTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalCount = getTotalCount(items);
  const totalPrice = getTotalPrice(items);

  return {
    items: items as CartItemType[],
    totalCount,
    totalPrice
  } 
}