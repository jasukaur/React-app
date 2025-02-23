import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [bmode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(bmode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={bmode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading ="Enter Text to Analyze" mode={bmode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
