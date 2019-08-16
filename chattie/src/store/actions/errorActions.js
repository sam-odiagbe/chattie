import actions from "./actionhelper";
const { error } = actions;
export const authError = data => {
  return {
    type: error,
    payload: { data }
  };
};

export default authError;
