import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-back-end.herokuapp.com/",
  withCredentials: true
});

export default instance;
