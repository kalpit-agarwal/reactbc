
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React,{useState} from 'react'

function App() {
  const [mode,setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    
  }
  const toggleMode= ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode has been enabled","success");
    }
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");

    }
  }

  return (
   <>
 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
 <div className="container my-3">
 <TextForm heading="Enter your text you wish to change " mode={mode}/>
</div>

</>
  );
}

export default App;
