import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Help from './pages/Help';
import About from './pages/About';
import Clock32 from "./pages/Clock32";

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                
                <Route path="/about" element={<About />}/>
                
                <Route path="/help" element={<Help />}/>

                <Route path="/clock" element={<Clock32 />}/>
                    
            </Routes>
        </Router>        
    )
}

export default App;
