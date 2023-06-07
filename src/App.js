import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {

  let [mode, setMode] = useState("light");
  let [alert,setAlert] =useState(null);

  function showAlert(message,type){
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>setAlert(null),1500);
  
  }
  function toggleMode() {

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor="#16578f";
      showAlert("Dark mode is enabled successfully!!","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor="#fff";
      showAlert("Light mode is enabled successfully!!","success");


    }
  }


  return (
    <>

      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container mt-4">
        <TextForm mode={mode} showAlert={showAlert} toggleMode={toggleMode} title="Enter the text to analyze" />
        {/* <About />    */}
      </div>
   </>

  );
}

export default App;
