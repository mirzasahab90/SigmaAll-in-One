
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Testing from './components/Testing';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert = (type, message) => {
    setalert({
      type: type,
      message: message
    })
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - DarkMode';
      showalert('success', 'DarkMode is Enabled')
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - LightMode';
      showalert('success', 'LightMode is Enabled')
    }
  }
  return (
    <>
      <Router>
        <Navbar title={'TextUtils'} aboutText={'About Us'} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
      

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm mode={mode} />} />
            <Route path="/title" element={<Testing />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
