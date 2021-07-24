import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  registerSuccess,
  registerFailure
} from "./user.actions";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(loginSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* loginWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* onGoogleLoginStart() {
  yield takeLatest(UserActionTypes.GOOGLE_LOGIN_START, loginWithGoogle);
}

export function* loginWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export function* onEmailLoginStart() {
  yield takeLatest(UserActionTypes.EMAIL_LOGIN_START, loginWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* logoutStart() {
  try {
    yield auth.signOut();
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFailure(err));
  }
}

export function* onLogoutStart() {
  yield takeLatest(UserActionTypes.LOGOUT_START, logoutStart);
}

export function* registerStart({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      registerSuccess({
        user: user,
        additionalData: {
          displayName
        }
      })
    );
  } catch (err) {
    yield put(registerFailure(err));
  }
}

export function* onRegisterStart() {
  yield takeLatest(UserActionTypes.REGISTER_START, registerStart);
}

export function* loginAfterRegister({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onRegisterSuccess() {
  yield takeLatest(UserActionTypes.REGISTER_SUCCESS, loginAfterRegister);
}

export function* userSagas() {
  yield all([
    call(onGoogleLoginStart),
    call(onEmailLoginStart),
    call(onCheckUserSession),
    call(onLogoutStart),
    call(onRegisterStart),
    call(onRegisterSuccess)
  ]);
}
