// import react router dom
import { Link } from "react-router-dom";
// import icons
import { Bell, Keyboard, Menu, Mic, Plus, Search } from "lucide-react";

// import site logo
import siteLogo from "../assets/images/site-logo.svg";

const Header = () => {
  return (
    <header className={"w-full bg-white  py-4 px-8 flex items-center justify-between fixed z-50 top-0 "}>
      <div className={`flex items-center justify-between`}>
        {/* Menu icons */}
        <Menu
          className={
            "cursor-pointer transition-all duration-200 hover:scale-110"
          }
        />
        {/* Site logo */}
        <Link className={"block ms-7 me-[60px]"} to={"/"}>
          <img src={siteLogo} alt="Site logo" />
        </Link>
      </div>
      {/* Search form*/}
      <form className={"flex items-center gap-3"}>
        <div className="flex items-center justify-between border  border-black/25 rounded-full">
          <div className="w-[600px] py-2 ps-4 pe-2 flex items-center gap-2 rounded-s-full  focus-within:outline focus-within:outline-blue-400">
            <input
              className={"w-full outline-none"}
              type="text"
              placeholder="Search..."
            />
            <Keyboard />
          </div>
          <div
            className={
              "w-14 h-10 rounded-e-full flex items-center justify-center bg-black/5 border-s border-s-gray-300"
            }
          >
            <Search />
          </div>
        </div>
        <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/10">
          <Mic />
        </div>
      </form>
      {/* Notification icon*/}
      <div className={"flex items-center gap-5"}>
        <div className="flex items-center gap-1 px-4 py-2 bg-black/10 rounded-full text-base font-medium cursor-pointer text-neutral-900">
          <Plus />
          <p>Create</p>
        </div>
        <Bell />
        <div className="w-9 h-9 bg-blue-500 text-white font-semibold text-xl flex items-center justify-center rounded-full">
          A
        </div>
      </div>
    </header>
  );
};

export default Header;
