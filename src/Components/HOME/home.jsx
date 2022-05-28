import React from "react";
import Logo from "./../../../public/logo_only.jpg";
import axios from "../../axios/axios";

export default function Home() {
  return (
    <div className="bg-white h-[100vh] lg:w-[80%]  flex flex-col gap-2 items-center m-auto sm:w-[100%]">
      <div className="bg-white-100 h-[10%] w-[100%] flex justify-between shadow-lg gap-2 ">
        <div className="h-[100%] w-[20%]  flex items-center ">
          <img src={Logo} className="w-[35%] h-[100%] bg-white" />
        </div>
        <div className="h-[100%] w-[45%] flex justify-evenly items-center">
          <div className="">Home</div>
          <div className="">About</div>
          <div className="">Support</div>
          <div className="">Customer Care</div>
        </div>
        <div className="h-[100%] w-[35%] flex items-center">
          <div className="border rounded-sm flex">
            <form >
              <input type="text" placeholder="Search..." />
              <button type="submit"></button>
            </form>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="bg-white h-[70%] w-[100%]  shadow-lg">
        <h1 className="">Body</h1>
      </div>
      <div className="h-[17%] w-[100%] shadow-lg">Footer</div>
    </div>
  );
}
