import React from "react";

import {
  CartItemComponent,
  ImageContainer,
  ItemDetailContainer,
  NameContainer
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemComponent>
      <ImageContainer src={imageUrl} alt="item" />
      <ItemDetailContainer>
        <NameContainer>{name}</NameContainer>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailContainer>
    </CartItemComponent>
  );
};

export default CartItem;
