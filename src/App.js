
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [btnText, setBtnText] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText('Disable Dark Mode')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success ");

      // Changes the title of the app dynamically
      //document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      setBtnText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success ");
      //document.title = "TextUtils - Home";
    }
  }
  const toggleMode1 = () => {
    setMode('dark');
    document.body.style.backgroundColor = '#827b63';
    showAlert("Light mode has been enabled", "success ");
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="AboutUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} toggleMode1={toggleMode1} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About  mode={mode} showAlert={showAlert}/>
            </Route>
            <Route exact  path="/">
              <TextForm heading=" Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

