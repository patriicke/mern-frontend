import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "./../../axios/axios";
export default function Signup() {
  const navigate = useNavigate();
  const [serverMsg, setServerMsg] = useState("");
  const [newUser, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  }
  async function handleSubmit(event) {
    if (
      (await newUser.fname) == undefined ||
      (await newUser.lname) == undefined ||
      (await newUser.email) == undefined ||
      (await newUser.username) == undefined ||
      (await newUser.password) == undefined ||
      (await newUser.cpassword) == undefined
    ) {
      setLoading(false);
      return setServerMsg("Please fill the form provided");
    }
    event.preventDefault();
    if (newUser.password === newUser.cpassword) {
      try {
        const userInfo = await axios.post("/create", newUser);
        if (userInfo.data === "email already exists") {
          setLoading(false);
          return setServerMsg(
            "Email Already exists. Please use another email or Login"
          );
        }
        if (userInfo.data === "username already exists") {
          setLoading(false);
          return setServerMsg(
            "Usename already exists. Please user another username"
          );
        }
        localStorage.setItem("token", userInfo.data.token);
        navigate("/login");
      } catch (error) {
        console.log(error.response.data);
      }
    } else {
      setLoading(false);
      return setServerMsg(
        "Passwords don't match. Try using matching passwords"
      );
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
    <div className="bg-white w-[100%] h-[100vh] flex justify-center items-center relative">
      <div
        className={`${
          loading ? "absolute" : "hidden"
        } absolute left-[50%] z-[1]`}
      >
        <svg
          role="status"
          className="w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
      <form
        className={`bg-white w-[30em] h-[45em] shadow-xl rounded-md flex py-3 px-2 flex-col gap-4 ${
          loading ? "blur-sm" : "blur-none"
        }`}
        onSubmit={handleSubmit}
      >
        <div className="w-[100%] h-[10%] text-[2em] font-bold justify-center flex">
          Signup
        </div>
        <div className="w-[100%] h-[10%] px-3">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            className="w-[100%] h-[70%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[100%] h-[10%] px-3">
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            className="w-[100%] h-[70%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[100%] h-[10%] px-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-[100%] h-[70%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[100%] h-[10%] px-3">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-[100%] h-[70%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[100%] h-[10%] px-3">
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-[100%] h-[70%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[100%] h-[10%] px-3">
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            className="w-[100%] h-[70%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        {serverMsg !== "" ? <ServerMessage /> : null}
        <div className="flex h-[10%] w-[100%] justify-evenly ">
          <Link
            to="/login"
            className="bg-blue-400 h-[80%] w-[40%] rounded-md shadow-lg text-[1.2em] font-bold flex items-center justify-center"
          >
            LOGIN
          </Link>
          <button
            type="submit"
            className="bg-green-500 h-[80%] w-[40%] rounded-md shadow-lg text-[1.4em] font-bold"
            onClick={() => {
              setLoading(true);
              handleSubmit();
            }}
          >
            SIGNUP
          </button>
        </div>
      </form>
    </div>
  );
}
