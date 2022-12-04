import axios from "axios";

const client = axios.create({
  baseURL: `http://localhost:8080/`,
  headers: {
    "Content-Type": "application/json",
  },
  //CORS
    withCredentials: true,
    


});

export default client;