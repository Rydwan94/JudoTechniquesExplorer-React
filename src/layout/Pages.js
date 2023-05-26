import {Routes, Route } from "react-router";

import Home from "../pages/Home";
import Techniques from "../pages/Techniques";
import History from "../pages/History";
import Competitions from "../pages/Competitions";
import Philosophy from "../pages/Philosophy";


const Pages = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/techniques" element={<Techniques />}/>
            <Route path="/history" element={<History />}/>
            <Route path="/competitions" element={<Competitions/>}/>
            <Route path="/philosophy" element={<Philosophy />}/>
        </Routes>
     );
}
 
export default Pages;