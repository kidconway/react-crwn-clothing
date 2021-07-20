import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart-selectors";
import { withRouter } from "react-router-dom";

import Button from "../button/button-component";
import CartItem from "../cart-item/cart-item-component";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <Button onClick={() => history.push("/checkout")}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
