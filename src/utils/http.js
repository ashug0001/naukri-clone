import axios from "axios";

const http = axios.create({
  baseURL: "https://jobs-api.squareboat.info/api/v1/",
});

http.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("user"))?.token || "";
  if (!token) return config;

  config.headers.Authorization = `${token}`;
  return config;
});

export default http;
