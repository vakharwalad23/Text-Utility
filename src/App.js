import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [Mode, setMode] = useState('light');//Shows if dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 2500);
  }
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#272a2e';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils -Darkmode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils -Lightmode";
    }
   
  }

  return (
<>  
    <Navbar title = "TextUtils" mode={Mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={Mode}/>
    </div>
</>
  );
}

export default App;
