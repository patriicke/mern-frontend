import axios from "axios";

const instance = axios.create({
  baseURL: "http://patrick-first.herokuapp.com"
});

export default instance;
