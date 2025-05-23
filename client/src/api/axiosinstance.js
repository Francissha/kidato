
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",

});

axiosInstance.interceptors.request.use(config =>{
  const accessToken = sessionStorage.getItem('accessToken');

  if(accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
},
(err) => promise.reject(err)
);
 
export default axiosInstance;