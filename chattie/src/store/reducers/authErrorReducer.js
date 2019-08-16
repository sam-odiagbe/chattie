import actions from "../actions/actionhelper";

const { error } = actions;
const initState = {
  error: null,
  username: null,
  name: null,
  password: null,
  confirm_password: null
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case error:
      state = { ...state, ...action.payload.data };
      break;
    default:
      break;
  }
  return state;
};

export default errorReducer;
