import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import Randoms from './components/Randoms';
import Footer from './components/Footer';


import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {

  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => setAlert(null), 1500);

  }

  // const removeBodyClasses = ()=>{
  //  document.body.classList.remove("bg-dark","bg-pimary","bg-success","bg-warning","bg-danger","bg-light");
  //  document.body.removeAttribute("class");

  // }

  function toggleMode() {
    // removeBodyClasses();
   // console.log(cls);

    //document.body.classList.add("bg-"+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(5 22 36 / 81%)";
      showAlert("Dark mode is enabled successfully!!", "success");
      document.title = "TextUtils - Darkmode";

    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light mode is enabled successfully!!", "success");
      document.title = "TextUtils - lightmode";


    }
  }


  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />


        <Routes>
          <Route path="/" element={<TextForm mode={mode} randoms={Randoms} showAlert={showAlert} toggleMode={toggleMode} title="Text utils are a collection of tools that can be used to manipulate text data. " />
          } />
          <Route path="/About" element={<About mode={mode}  />} />
        </Routes>
        <Footer mode={mode}></Footer> 
      </BrowserRouter>


    </>

  );
}

export default App;
