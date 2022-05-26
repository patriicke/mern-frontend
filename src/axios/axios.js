import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4040" || "https://patrick-first.herokuapp.com/"
});

export default instance;
