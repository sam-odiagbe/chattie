import axios from "axios";

const Axios = (data = null, method, endPoint) => {
  if (method === "get") {
    return axios.get(endPoint, { withCredentials: true });
  }

  return axios.post(endPoint, data, { withCredentials: true });
};

export default Axios;
