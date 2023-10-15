import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import About from './components/About'
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toogleMode = () => {
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#06051c';
      document.body.style.color = 'white';
      document.body.style.border = '1px solid white';
      showAlert("Dark mode has been enabled", "success");
    }
  }

  return (
  <>
  {/* <Router> */}
    <Navbar title="TEXTtutils" abouttext="About Us" mode = {mode} toggleMode = {toogleMode}/>
    <br />
    <Alert alert={alert}/>
    <br />
    <div className="container my-3">
      {/* <Switch> */}
        {/* <Route exact path="/about"> */}
          {/* <About mode = {mode}/> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} mode = {mode} heading="Enter the text to analyze"/>
        {/* </Route> */}
      {/* </Switch> */}
      
      {/* <TextForm showAlert={showAlert} mode = {mode} heading="Enter the text to analyze"/>
      <br /> */}
      {/* <About /> */}
    </div>
  {/* </Router> */}
  </>
  )
}

export default App
