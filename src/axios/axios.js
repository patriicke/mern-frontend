import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4041"
}); 

export default instance;
