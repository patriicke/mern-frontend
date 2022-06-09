import React, { useEffect, useState } from "react";
import Logo from "/logo_only.jpg";
import axios from "../../axios/axios";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  let [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  async function handleClient() {
    const user = await axios.post("/home", {
      token: localStorage.getItem("token")
    });
    if (user.data === "signin") {
      navigate("/login");
      return localStorage.removeItem("token");
    }
    let userName = `${user.data.user.fname} ${user.data.user.lname}`;
    localStorage.setItem("token", user.data.token);
    setLoading(false);
    setUser((name) => userName);
  }
  handleClient();
  const [drop, setDrop] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const handleDrop = () => {
    setDrop(true);
  };
  const handleHide = () => {
    setDrop(false);
  };
  function handleDropSearch() {
    setSearchBar(true);
  }
  function handleSearchHide() {
    setSearchBar(false);
  }
  const [searchedData, setSearcheData] = useState([]);
  const [search, setSearch] = useState("");
  async function handleSearchFromBackend(search) {
    const users = await axios.post("/search", { searchData: search });
    setSearcheData(users.data);
  }
  function handleChange(e) {
    setSearch(e.target.value);
  }
  useEffect(() => {
    handleSearchFromBackend(search);
  }, [search]);

  useEffect(() => {}, [drop]);
  useEffect(() => {}, [localStorage.getItem("token")]);

  return loading ? (
    <div className="flex justify-center items-center h-[100vh]">
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
  ) : (
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
            <form
              className="flex items-center justify-between w-full h-full px-2 "
              onClick={() => {
                handleDropSearch();
                handleHide();
              }}
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchFromBackend();
              }}
            >
              <input
                type="text"
                placeholder="Search..."
                className="outline-none text-[1.1em] w-[90%] "
                onChange={handleChange}
              />
              <button className="flex items-center " type="submit">
                <span
                  className="material-symbols-outlined"
                  onClick={handleSearchFromBackend}
                >
                  search
                </span>
              </button>
            </form>
            {searchBar && (
              <div className="h-[25em] w-[16.7em] bg-slate-200 shadow-xl absolute top-[2.5em]">
                <div
                  className={`flex justify-center h-[8%] sticky items-center bg-white `}
                >
                  {search === "" ? (
                    <div className="text-blue-500">Enter user's name</div>
                  ) : searchedData.length == 0 ? (
                    <div className="text-[red]">No matching results found</div>
                  ) : (
                    <div className="text-green-600">Loading results...</div>
                  )}
                </div>
                <div className="flex flex-col w-full h-[90%] gap-2 overflow-auto">
                  {searchedData.map((data, index) => {
                    return (
                      <div
                        className="h-[10%] w-[100%] font-bold  flex items-center px-2 hover:cursor-pointer"
                        key={index}
                      >
                        {`${data.fname} ${data.lname}`}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
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
                  account_circle
                </span>
                <span
                  className="material-symbols-outlined  text-[2em] hover:cursor-pointer"
                  onClick={() => {
                    handleDrop();
                    handleSearchHide();
                  }}
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
                  <div
                    className="p-2 flex items-center hover:cursor-pointer hover:bg-slate-200 gap-2"
                    onClick={() => {
                      localStorage.removeItem("token");
                      navigate("/login");
                    }}
                  >
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
        onClick={() => {
          handleHide();
          handleSearchHide();
        }}
      >
        <h1 className="">Body</h1>
      </div>
      <div
        className="h-[17%] w-[100%] shadow-lg"
        onClick={() => {
          handleHide();
          handleSearchHide();
        }}
      >
        Footer
      </div>
    </div>
  );
}
