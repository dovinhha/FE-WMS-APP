import TypeActions from '../TypeActions';

export const accountLogin = (body, callback) => {
  return {
    type: TypeActions.ACCOUNT_LOGIN_REQUEST,
    body,
    callback,
  };
};

export const accountLogOut = (body, callback) => {
  return {
    type: TypeActions.ACCOUNT_LOGOUT_REQUEST,
    body,
    callback,
  };
};

export const forgotPassword = (body, callback) => {
  return {
    type: TypeActions.ACCOUNT_FORGOT_PASSWORD_REQUEST,
    body,
    callback,
  };
};

export const resetPassword = (body, callback) => {
  return {
    type: TypeActions.ACCOUNT_RESET_PASSWORD_REQUEST,
    body,
    callback,
  };
};

export const getCurrentAccount = callback => {
  return {
    type: TypeActions.GET_CURRENT_ACCOUNT_REQUEST,
    callback,
  };
};

export default {
  accountLogin,
  accountLogOut,
  forgotPassword,
  resetPassword,
  getCurrentAccount,
};
