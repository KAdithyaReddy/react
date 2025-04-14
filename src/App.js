import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [page, setPage] = useState('home'); // 'home' or 'about'

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode enabled for navbar", "success");
    } else {
      setMode('light');
      showAlert("Light mode enabled for navbar", "success");
    }
  };

  return (
    <>
      <Navbar title="MyApp" mode={mode} toggleMode={toggleMode} setPage={setPage} />
      <Alert alert={alert} />
      <div className="container my-3">
        {page === 'home' && <TextForm heading="Enter your text" mode={mode} showAlert={showAlert} />}
        {page === 'about' && <About mode={mode} />}
      </div>
    </>
  );
}

export default App;
