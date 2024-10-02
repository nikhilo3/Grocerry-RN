import axios from "axios";

export const BASE_URL = "http://192.168.0.101:8000";

export const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.101:8000'
});