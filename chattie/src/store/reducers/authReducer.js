import actions from "../actions/actionhelper";

const { setactiveuser } = actions;

const initState = {
  user: null,
  verifying: true
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case setactiveuser:
      const user = action.payload;
      state = { ...state, user, verifying: false };
      break;
    default:
      break;
  }
  return state;
};

export default authReducer;
