import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [bmode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const toggleMode = ()=>{
    if(bmode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={bmode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading ="Enter Text to Analyze" mode={bmode} />
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
