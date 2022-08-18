import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from "./components/Alert"
import React,{useState} from 'react'
// import About from "./components/About"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// let a=prompt("Enter name")
function App() { 
  const [mode,setmode] = useState("light")
  const [alert,setalert]=useState(null)
  const toggle=()=>{
    if(mode === "dark"){
      setmode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      modify_setalert("light mode enabled","success")
      document.title="Text Utils - Light"
    } 
    else{
      setmode("dark")
      document.body.style.backgroundColor="#2b3036"
      document.body.style.color="#efefef"
      modify_setalert("Dark mode enabled","success")
      document.title="Text Utils - Dark"
    }
  }

  const modify_setalert =(msg,type)=>{
      setalert({
        message:msg,
        alert_type:type
      })
      setTimeout(() => {
        setalert(null)
      }, 2000);
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtdils" mode={mode} toggle={toggle}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <Textform heading="Enter the text" mode={mode} modify_setalert={modify_setalert}/>
      {/* <Routes>
        <Route path="/" caseSensitive={false} element={<Textform heading="Enter the text" mode={mode} modify_setalert={modify_setalert}/>} />
        <Route path="/about" caseSensitive={false} element={<About></About>} />
      </Routes> */}
        </div>
    {/* </Router> */}
    </>
  );
}

export default App;
