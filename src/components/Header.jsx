import { Bell, Menu, Mic, Plus, Search } from "lucide-react";

import youtubeLogo from "../assets/images/youtube-logo.png";

const Header = () => {
  return (
    <header className={`flex items-center py-[30px] px-8`}>
      <Menu className={"cursor-pointer"} />
      <img className={"ms-7 me-14"} src={youtubeLogo} alt="site logo" />

      <form className={"flex items-center gap-2"}>
        <div
          className={
            "w-[650px] py-2 px-4 rounded-full border-2 border-neutral-400 flex items-center justify-between gap-2 focus-within:border-blue-500 focus-within:shadow-md transition"
          }
        >
          <input
            className={"w-full outline-none"}
            type="search"
            placeholder={"search"}
          />
          <Search />
        </div>
        <div
          className={
            "w-11 h-11 bg-black/5 rounded-full flex items-center justify-center"
          }
        >
          <Mic />
        </div>
      </form>

      <div className="flex items-center gap-3 ms-auto ">
        <div className="flex items-center gap-1 cursor-pointer bg-gray-200 px-3 py-[6px] font-semibold rounded-full">
          <Plus />
          <span>Create</span>
        </div>
        <Bell className={"cursor-pointer"} />
        <div className="flex items-center justify-center w-9 h-9 bg-fuchsia-700 text-white text-lg font-semibold cursor-pointer  rounded-full">
          A
        </div>
      </div>
    </header>
  );
};

export default Header;
