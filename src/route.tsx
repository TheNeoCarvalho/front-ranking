import { Route, Routes } from "react-router-dom";
import Ds from "./pages/ds";
import Home from "./pages/home";
import Info from "./pages/info";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ds" element={<Ds />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  );
};

export default AppRoute;
