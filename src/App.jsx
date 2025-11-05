import { Sidebar, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import {useState} from "react";

const App = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  return (
    <div className={`pt-[73.6px]`}>
      <Header setIsOpenSidebar={setIsOpenSidebar} />
      <div className="flex">
        <Sidebar isOpenSidebar={isOpenSidebar} />
        <Routes>
          <Route path="/" element={<Home isOpenSidebar={isOpenSidebar} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
