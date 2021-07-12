import React from "react";
import "./CartIcon.styles.scss";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../Redux/Cart/Cart.actions";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
