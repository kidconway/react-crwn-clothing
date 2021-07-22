import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  removeItem,
  addItem
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  NameContainer,
  PriceContainer,
  ImgElementContainer,
  ArrayContainer,
  ValueContainer,
  RemoveButtonContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ImgElementContainer src={imageUrl} alt="item" />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrayContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </ArrayContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrayContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </ArrayContainer>
      </QuantityContainer>
      <PriceContainer>{price}</PriceContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// });

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
