// import {Route} from 'react-router-dom';

import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";
// import {BrowserRouter as Router,Switch} from 'react-router-dom';
// Switch

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      
    </Routes>
  );
}

export default RoutesComponent;
