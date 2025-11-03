import { Sidebar, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <div className={`pt-[73.6px]`}>
      <Header />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
