import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Help from './pages/Help';
import About from './pages/About';
import Clock32 from "./pages/Clock32";
import Task from "./pages/Task";

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                
                <Route path="/about" element={<About />}/>
                
                <Route path="/help" element={<Help />}/>

                <Route path="/clock" element={<Clock32 />}/>

                <Route path="/task" element={<Task/>}/>
                    
            </Routes>
        </Router>        
    )
}

export default App;