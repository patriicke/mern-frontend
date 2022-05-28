import React from "react";
import Logo from "./../../../public/logo_only.jpg";
import axios from "../../axios/axios";


export default function Home() {
  function styleUserInfo() {
    console.log("Clicked")
    return "block";
  }
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
          <div className="border rounded-sm flex w-[50%] h-[40%] ">
            <form className="flex items-center justify-between w-full h-full px-2 ">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-[1.1em] w-[90%] "
              />
              <button type="submit" className="flex items-center ">
                <span className="material-symbols-outlined">search</span>
              </button>
            </form>
          </div>
          <div className="w-[20%] flex justify-evenly ">
            <span className="material-symbols-outlined text-[1.8em]">
              notifications
            </span>
            <span className="material-symbols-outlined text-[1.8em]">chat</span>
          </div>
          <div className="w-[10%] flex flex-col px-2">
            <div className="relative">
              <div className="flex ">
                <span className="material-symbols-outlined text-[2.2em] ">
                  account_circle_full
                </span>
                <span className="material-symbols-outlined  text-[2em] hover:cursor-pointer " onClick={styleUserInfo}>arrow_drop_down</span>
              </div>
              <div className="absolute h-[20em] bg-blue-400 w-[11.5em] left-[-3em] top-[2.5em] hidden" style={{display: styleUserInfo}}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[70%] w-[100%]  shadow-lg">
        <h1 className="">Body</h1>
      </div>
      <div className="h-[17%] w-[100%] shadow-lg">Footer</div>
    </div>
  );
}
