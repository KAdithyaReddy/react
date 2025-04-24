import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const [page, setPage] = useState('home');
  const [bgColor, setBgColor] = useState('dark'); // Color background handler

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBgColor('dark');
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('light');
      setBgColor('light');
      showAlert("Light mode enabled", "success");
    }
  };

  const changeColor = (color) => {
    setBgColor(color);
    showAlert(`${color.charAt(0).toUpperCase() + color.slice(1)} theme enabled`, "success");
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        setPage={setPage}
        changeColor={changeColor}
      />
      <Alert alert={alert} />
      <div className={`container-fluid bg-${bgColor} min-vh-100 py-3`}>
        {page === 'home' && <TextForm heading="Enter your text" mode={mode} showAlert={showAlert} />}
        {page === 'about' && <About mode={mode} />}
      </div>
    </>
  );
}

export default App;
