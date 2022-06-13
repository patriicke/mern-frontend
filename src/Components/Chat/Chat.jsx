import Image from "/dX-o17Pc_400x400.jpg";
import axios from "./../../axios/axios";
export default function Chat() {
  function handleMessage() {}
  function UserInChat() {
    return (
      <div className="w-[15%] h-[85%] ">
        <img src={Image} className="w-[100%]  h-[100%] rounded-full" />
      </div>
    );
  }
  function ActiveUser({ name }) {
    return (
      <div className="flex items-center flex-col">
        <div className=" w-[4em] h-[4em] bg-green-500 rounded-full">
          <img src={Image} className="w-[100%] h-[100%] rounded-full" />
        </div>
        <div>{name}</div>
      </div>
    );
  }
  return (
    <div className=" h-[100%] w-[100%] ">
      <div className="h-[17%]">
        <div className="flex gap-5 px-2 items-center  h-full mostly-customized-scrollbar overflow-auto">
          <ActiveUser name="Patrick" />
          <ActiveUser name="Patrick" />
          <ActiveUser name="Patrick" />
          <ActiveUser name="Patrick" />
          <ActiveUser name="Patrick" />
          <ActiveUser name="Patrick" />
          <ActiveUser name="Patrick" />
          <ActiveUser name="Patrick" />
          <ActiveUser name="Patrick" />
          <ActiveUser name="Patrick" />
          <ActiveUser name="Patrick" />
        </div>
      </div>
      <div className="h-[5%] text-[1.2em] shadow-md">Your conversations</div>
      <div className="h-[78%] flex">
        <div className="h-[15%]  w-[100%] flex items-center gap-2">
          <UserInChat />
          <div className="">
            <div>Patrick NDAYAMBAJE</div>
            <div>
              Active <span className="w-[1em] h-[1em] bg-[green]"></span>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
