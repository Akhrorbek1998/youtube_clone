import { Sidebar, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <div>
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
