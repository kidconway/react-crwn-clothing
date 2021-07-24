import UserActionTypes from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleLoginStart = () => ({
  type: UserActionTypes.GOOGLE_LOGIN_START
});

export const emailLoginStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_LOGIN_START,
  payload: emailAndPassword
});

export const loginSuccess = user => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = error => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: error
});

export const logoutStart = () => ({
  type: UserActionTypes.LOGOUT_START
});

export const logoutSuccess = user => ({
  type: UserActionTypes.LOGOUT_SUCCESS
});

export const logoutFailure = err => ({
  type: UserActionTypes.LOGOUT_FAILURE,
  payload: err
});

export const registerStart = userCredentials => ({
  type: UserActionTypes.REGISTER_START,
  payload: userCredentials
});

export const registerSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.REGISTER_SUCCESS,
  payload: { user, additionalData }
});

export const registerFailure = err => ({
  type: UserActionTypes.REGISTER_FAILURE,
  payload: err
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});
