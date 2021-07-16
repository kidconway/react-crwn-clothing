import { CartActionTypes } from "./Cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const increaseItemCount = item => ({
  type: CartActionTypes.INCREASE_ITEM_COUNT,
  payload: item
});
