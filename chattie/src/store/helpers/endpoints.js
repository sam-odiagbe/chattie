export const defaultUrl = "http://localhost:8000";
export const apiEndPoint = "http://localhost:8000/api/v1";
export const apiAuthEndPoint = "http://localhost:8000/api/v1/auth";
export const authEndPoints = {
  createaccount: `${apiAuthEndPoint}/create_account`,
  login: `${apiAuthEndPoint}/login`,
  verifycookie: `${apiAuthEndPoint}/verify`,
  logout: `${apiAuthEndPoint}/logout`
};
