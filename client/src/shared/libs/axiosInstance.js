import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API,
  withCredentials: true,
});

let accessToken = "";

function setAccessToken(newToken) {
  accessToken = newToken;
}

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;
    try {
      if (error.response.status === 403 && !prevRequest.sent) {
        const response = await axiosInstance("/tokens/refresh");
        accessToken = response.data.accessToken;
        prevRequest.sent = true;
        prevRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axiosInstance(prevRequest);
      }
      return Promise.reject(error);
    } catch (error) {
      console.log(error)
    }
    
  }
);

export { setAccessToken };

export default axiosInstance;
