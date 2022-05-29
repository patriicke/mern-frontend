import React, { useEffect, useState } from "react";
import Logo from "/logo_only.jpg";
import axios from "../../axios/axios";
import { useParams, useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const { id } = useParams();
  let [user, setUser] = useState("");
  async function handleClient() {
    const user = await axios.get(`/home/${id}`);
    let userName = `${user.data.fname} ${user.data.lname}`;
    if (user.data === "signin") {
      navigate("/");
    }
    setUser((name) => userName);
  }
  handleClient();
  const [drop, setDrop] = useState(false);
  const handleDrop = () => {
    setDrop(true);
  };
  const handleHide = () => {
    setDrop(false);
  };
  const handleDropSearch(){
    
  }
  useEffect(() => {}, [drop]);
  return (
    <div className="bg-white h-[100vh] lg:w-[80%]  flex flex-col gap-2 items-center m-auto sm:w-[100%]">
      <div className="bg-white-100 h-[10%] w-[100%] flex justify-between shadow-lg gap-2 ">
        <div className="h-[100%] w-[20%]  flex items-center ">
          <img src={Logo} className="w-[30%] h-[90%] bg-white" />
        </div>
        <div className="h-[100%] w-[45%] flex justify-evenly items-center">
          <div className="text-[1.2em]">Home</div>
          <div className="text-[1.2em]">About</div>
          <div className="text-[1.2em]">Support</div>
          <div className="text-[1.2em]">Customer Care</div>
        </div>
        <div className="h-[100%] w-[35%] flex items-center gap-2">
          <div className="border rounded-sm flex w-[50%] h-[40%] relative">
            <div className="flex items-center justify-between w-full h-full px-2 ">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-[1.1em] w-[90%] "
              />
              <button className="flex items-center ">
                <span className="material-symbols-outlined">search</span>
              </button>
            </div>
            <div className="h-[30em] w-[16.7em] bg-red-300 absolute top-[2.5em] hidden"></div>
          </div>
          <div className="w-[20%] flex justify-evenly " onClick={handleHide}>
            <span className="material-symbols-outlined text-[1.8em]">
              notifications
            </span>
            <span className="material-symbols-outlined text-[1.8em]">chat</span>
          </div>
          <div className="w-[10%] flex flex-col px-2">
            <div className="relative" onClick={handleDrop}>
              <div className="flex ">
                <span className="material-symbols-outlined text-[2.2em] ">
                  account_circle_full
                </span>
                <span
                  className="material-symbols-outlined  text-[2em] hover:cursor-pointer"
                  onClick={handleDrop}
                >
                  arrow_drop_down
                </span>
              </div>
              {drop && (
                <div
                  className={`absolute h-[14em] w-[11.5em] left-[-3em] top-[2.5em] flex flex-col gap-1 bg-[#e7e6f7] shadow-lg rounded-sm divide-y-2 divide-white`}
                >
                  <div className="p-2 flex items-center hover:cursor-pointer hover:bg-slate-200">
                    {user}
                  </div>
                  <div className="p-2 flex items-center hover:cursor-pointer hover:bg-slate-200 gap-2">
                    <span className="material-symbols-outlined">settings</span>
                    Settings
                  </div>
                  <div className="p-2 flex items-center hover:cursor-pointer hover:bg-slate-200 gap-2">
                    <span className="material-symbols-outlined">touch_app</span>
                    Command
                  </div>
                  <div className="p-2 flex items-center hover:cursor-pointer hover:bg-slate-200 gap-2">
                    <span className="material-symbols-outlined">pending</span>
                    Pending
                  </div>
                  <div className="p-2 flex items-center hover:cursor-pointer hover:bg-slate-200 gap-2">
                    <span className="material-symbols-outlined">logout</span>
                    Log Out
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white h-[70%] w-[100%]  shadow-lg"
        onClick={handleHide}
      >
        <h1 className="">Body</h1>
      </div>
      <div className="h-[17%] w-[100%] shadow-lg" onClick={handleHide}>
        Footer
      </div>
    </div>
  );
}
