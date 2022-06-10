import Image from "./../../../public/dX-o17Pc_400x400.jpg";
export default function Chat() {
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
              
      </div>
    </div>
  );
}
