import Home from "../Home/Home";
import UserDetail from "../UserDetail/UserDetail";
import { Routes, Route } from "react-router-dom";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default RoutesComponent;