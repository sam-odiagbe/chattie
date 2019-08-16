// creating user account
import Axios from "../helpers/axios";
import { authEndPoints } from "../helpers/endpoints";
import authError from "./errorActions";
import actions from "./actionhelper";
const { createaccount, login, verifycookie, logout } = authEndPoints;
const { setactiveuser } = actions;

export const createUserAccount = inputs => {
  return dispatch => {
    let response = Axios(inputs, "post", createaccount);
    response
      .then(response => {
        const { data } = response;
        console.log(data);
        if (data.error) {
          dispatch(authError(data));
        } else {
          console.log(data);
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const logUserIn = inputs => {
  return dispatch => {
    let response = Axios(inputs, "post", login);
    response
      .then(response => {
        const { data } = response;
        if (data.error) {
          dispatch(authError(data));
        } else {
          // dispatch setting active user
          dispatch(setActiveUser(data.user));
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export const verifyUser = () => {
  return dispatch => {
    let response = Axios(null, "get", verifycookie);
    response
      .then(response => {
        const { user } = response.data;
        dispatch(setActiveUser(user));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

// set active user
export const setActiveUser = user => {
  return {
    type: setactiveuser,
    payload: user
  };
};

export const logUserOut = () => {
  return dispatch => {
    let res = Axios({}, "post", logout)
      .then(() => {
        dispatch(setActiveUser(null));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};
