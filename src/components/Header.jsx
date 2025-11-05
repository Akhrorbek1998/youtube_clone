// import react router dom
import {Link} from "react-router-dom";
// import icons
import {ArrowBigLeft, ArrowLeft, Bell, Keyboard, Menu, Mic, Plus, Search} from "lucide-react";

// import site logo
import siteLogo from "../assets/images/site-logo.svg";
// custom components
import Searchbar from "./Searchbar.jsx";
import {useEffect, useState} from "react";

const Header = () => {
  const [isOpenSearchbar, setIsOpenSearchbar] = useState(false)

  useEffect(() => {
    // Media query yaratamiz
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    // Ekran o‘zgarganda ishlaydigan funksiya
    const handleResize = (e) => {
      if (e.matches) {
        setIsOpenSearchbar(false); // 640px dan katta bo‘lsa, yopamiz
      }
    };

    // Birinchi renderda tekshirib qo‘yamiz
    if (mediaQuery.matches) {
      setIsOpenSearchbar(false);
    }

    // Listener qo‘shamiz
    mediaQuery.addEventListener("change", handleResize);

    // Tozalash
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <header className={"w-full bg-white  py-4 px-5 sm:px-8 flex items-center md:justify-between fixed z-50 top-0 "}>
      <div className={`flex items-center justify-between`}>
        {/* Menu icons */}
        <Menu
          className={"cursor-pointer transition-all duration-200 hover:scale-110"}
        />
        {/* Site logo */}
        <Link className={"block ms-4 me-0 sm:ms-7 sm:me-[60px]"} to={"/"}>
          <img src={siteLogo} alt="Site logo"/>
        </Link>
      </div>
      {/* Search form*/}
      <form className={"flex items-center gap-3 ms-auto md:ms-0"}>
        <div className={` hidden md:flex items-center justify-between border  border-black/25 rounded-full`}>
          <div
            className="md:w-44 lg:w-[400px] xl:w-[600px] py-2 ps-4 pe-2 flex items-center gap-2 rounded-s-full  focus-within:outline focus-within:outline-blue-400">
            <input
              className={"w-full outline-none"}
              type="text"
              placeholder="Search..."
            />
            <Keyboard/>
          </div>
          <div
            className={"w-14 h-10 rounded-e-full flex items-center justify-center bg-black/5 border-s border-s-gray-300"}
          >
            <Search/>
          </div>
        </div>
        <div
          className=" w-10 h-10 mr-4 md:mr-0 bg-black/5 rounded-full hidden sm:flex items-center justify-center cursor-pointer hover:bg-black/10">
          <Mic/>
        </div>
      </form>
      {/* Search icon */}
      <button onClick={() => setIsOpenSearchbar(true)} className={`mr-4 md:hidden`}>
        <Search/>
      </button>
      {/* Notification icon*/}
      <div className={"flex items-center gap-5"}>
        <div
          className="hidden sm:flex items-center gap-1 px-4 py-2 bg-black/10 rounded-full text-base font-medium cursor-pointer text-neutral-900">
          <Plus/>
          <p>Create</p>
        </div>
        <Bell/>
        <div
          className="w-9 h-9 bg-blue-500 leading-normal text-white font-semibold text-xl flex items-center justify-center rounded-full">
          A
        </div>
      </div>
      {/* Search modal */}
      {isOpenSearchbar && (<div
          className={`w-full sm:hidden h-20 bg-white  px-8 flex items-center justify-between  fixed z-[99] top-0 left-0 right-0`}>
          <button onClick={() => setIsOpenSearchbar(false)} className={`mr-4 md:hidden`}>
            <ArrowLeft/>
          </button>
          <form className={"flex items-center justify-center gap-3 ms-auto md:ms-0"}>
            <div className={`flex items-center justify-between border  border-black/25 rounded-full`}>
              <div
                className="xs:w-48 sm:w-72 py-2 ps-4 pe-2 flex items-center gap-2 rounded-s-full  focus-within:outline focus-within:outline-blue-400">
                <input
                  className={"w-full outline-none"}
                  type="text"
                  placeholder="Search..."
                />
                <Keyboard/>
              </div>
              <div
                className={"w-14 h-10 rounded-e-full flex items-center justify-center bg-black/5 border-s border-s-gray-300"}
              >
                <Search/>
              </div>
            </div>
            <div
              className=" w-10 h-10 mr-4 md:mr-0 bg-black/5 rounded-full hidden sm:flex items-center justify-center cursor-pointer hover:bg-black/10">
              <Mic/>
            </div>
          </form>
        </div>)}
    </header>);
};

export default Header;
