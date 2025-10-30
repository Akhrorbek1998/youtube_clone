import { libraryItems, mainMenuItems, subscriptions } from "../constants.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const Sidebar = () => {
  const [activePage, setActivePage] = useState("/subscriptions");

  return (
    <aside
      className={`w-60 fixed top-[73px] bottom-0 p-3 overflow-auto custom-scrollbar`}
    >
      <ul className={`pb-4 flex flex-col gap-y-2 border-b border-b-black/10`}>
        {mainMenuItems.map((item, i) => (
          <li key={i}>
            <Link
              className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-200/75 ${activePage === item.path ? "bg-gray-200/75" : ""}`}
              onClick={() => setActivePage(item.path)}
              to={item.path}
            >
              <span>{item.icon}</span>
              <span className={"font-semibold text-black/85"}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h2
        className={` text-lg my-2 font-semibold p-2 rounded-lg hover:bg-black/5 `}
      >
        <span>You</span>
      </h2>
      <ul className={`pb-4 flex flex-col gap-y-2 border-b border-b-black/10`}>
        {libraryItems.map((item) => (
          <li key={item.id}>
            <Link
              className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-200/75 ${activePage === item.path ? "bg-gray-200/75" : ""}`}
              onClick={() => setActivePage(item.path)}
              to={item.path}
            >
              <span>{item.icon}</span>
              <span className={"font-semibold text-black/85"}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h2
        className={`text-lg my-2 font-semibold p-2 rounded-base rounded-lg hover:bg-black/5 `}
      >
        Subscriptions
      </h2>
      <ul className={`pb-4 flex flex-col gap-y-2 border-b border-b-black/10`}>
        {subscriptions.map((item) => (
          <li key={item.id}>
            <Link
              className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-200/75 ${activePage === item.path ? "bg-gray-200/75" : ""}`}
              onClick={() => setActivePage(item.path)}
              to={item.path}
            >
              <img src={item.avatar} alt="" />
              <span className={"font-semibold text-black/85"}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
