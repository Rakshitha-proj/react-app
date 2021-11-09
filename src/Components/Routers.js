import React, { Component } from 'react';
import Home from './Home';
import Features from './Features';
// inport Pricing from './Pricing';
import { Routes,Route} from 'react-router-dom';
import Pricing from './Pricing';
import Blog from './Blog';
import Register from './Register';
import Login from './Login';
function Routers(){
    return(
        // <BrowserRouter>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Features" element={<Features/>}/>
            <Route path="/Pricing" element={<Pricing/>}/>
            <Route path="/Blog" element={<Blog/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Routes>
        // </BrowserRouter>
    );
}
export default Routers;
