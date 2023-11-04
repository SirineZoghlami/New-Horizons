import axios from "axios";

const api_url = import.meta.env.VITE_APP_API_BACK;

const customAxios = axios.create({
  baseURL: api_url,
});

customAxios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.authorization = `bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default customAxios;
