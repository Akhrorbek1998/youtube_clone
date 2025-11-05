import {Keyboard, Mic, Search} from "lucide-react";

const Searchbar = () => {
    return (
      <form className={"flex items-center gap-3 ms-auto md:ms-0"}>
        <div className={` hidden md:flex items-center justify-between border  border-black/25 rounded-full`}>
          <div className="md:w-44 lg:w-[400px] xl:w-[600px] py-2 ps-4 pe-2 flex items-center gap-2 rounded-s-full  focus-within:outline focus-within:outline-blue-400">
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
        <div className=" w-10 h-10 mr-4 md:mr-0 bg-black/5 rounded-full hidden sm:flex items-center justify-center cursor-pointer hover:bg-black/10">
          <Mic />
        </div>
      </form>
    )
}

export default Searchbar
