import axios from "axios";

const client = axios.create({
  baseURL: `http://192.168.1.112:8080/`,
  headers: {
    "Content-Type": "application/json",
  },
  //CORS
  withCredentials: true,
});

export default client;
