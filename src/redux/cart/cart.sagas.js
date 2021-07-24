import { all, takeLatest, put, call } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";

import { clearCart } from "./cart.actions";

export function* clearCartOnLogout() {
  yield put(clearCart());
}

export function* onLogoutSuccess() {
  yield takeLatest(UserActionTypes.LOGOUT_SUCCESS, clearCartOnLogout);
}

export function* cartSagas() {
  // TODO Clear cart
  yield all([call(onLogoutSuccess)]);
}
