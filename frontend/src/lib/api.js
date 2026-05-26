import axios from "axios";

const BASE = (process.env.REACT_APP_BACKEND_URL || "http://localhost:8001").replace(/\/$/, "");
export const API = `${BASE}/api`;

export const api = axios.create({ baseURL: API });

api.interceptors.request.use((cfg) => {
  const token = localStorage.getItem("pali_admin_token");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && window.location.pathname.startsWith("/admin")) {
      localStorage.removeItem("pali_admin_token");
      localStorage.removeItem("pali_admin_email");
      window.location.assign("/admin/login");
    }
    return Promise.reject(err);
  }
);
