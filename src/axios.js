import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/clone-63c8c/us-central1/api", //The API (Cloud Function) URL
});

export default axiosInstance;
