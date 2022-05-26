import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4040"
});

export default instance;
