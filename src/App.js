import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
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
  function toggleMode() {

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#16578f";
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
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} toggleMode={toggleMode} title="Enter the text to analyze" />
          } />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>


    </>

  );
}

export default App;
