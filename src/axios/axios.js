import axios from "axios";

const instance = axios.create({
  baseURL: "https://patrick-first.herokuapp.com"
});

export default instance;
