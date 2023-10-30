import axios from "axios";

const dataApi = axios.create({
  baseURL: "http://localhost:5175",
  // withCredentials:true
});

dataApi.interceptors.request.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    if (error && error.response && error.response.status === 401) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default dataApi;
