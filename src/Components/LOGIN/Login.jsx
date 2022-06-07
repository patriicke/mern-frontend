import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "./../../axios/axios";
export default function Login() {
  const [newUser, setUser] = useState({});
  const [serverMsg, setServerMsg] = useState("");
  const navigate = useNavigate();
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const user = await axios.post("/login", newUser);
      if (user.data === "Not Found") {
        setServerMsg((msg) => "User is not found. Please Signup");
      } else if ("Incorrect Data") {
        setServerMsg(
          (msg) => "User password or email is not correct. Please Try again!"
        );
      }
      localStorage.setItem("token", user.data);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  }
  function ServerMessage() {
    return (
      <div className="w-[100%] h-[5%] px-3">
        <p className="text-[red] text-[1.2em]">{serverMsg}</p>
      </div>
    );
  }
  return (
    <div className="bg-white w-[100%] h-[100vh] flex justify-center items-center">
      <form
        className="bg-white w-[30em] h-[40em] shadow-xl rounded-md flex py-5 px-2 flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="w-[100%] h-[12%] text-[2em] font-bold justify-center flex">
          Login
        </div>
        <div className="w-[100%] h-[12%] px-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-[100%] h-[100%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[100%] h-[12%] px-3">
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-[100%] h-[100%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        {serverMsg !== "" ? <ServerMessage /> : null}
        <div className="flex h-[10%] w-[100%] justify-evenly ">
          <Link
            to="/signup"
            className="bg-blue-400 h-[100%] w-[40%] rounded-md shadow-lg text-[1.2em] font-bold flex items-center justify-center"
          >
            SIGNUP
          </Link>
          <button
            type="submit"
            className="bg-green-500 h-[100%] w-[40%] rounded-md shadow-lg text-[1.4em] font-bold"
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}
