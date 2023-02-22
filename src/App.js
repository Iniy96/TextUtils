import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Formtext from "./Components/Formtext";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils - Dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar
        brand="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
        alert={showAlert}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Formtext
              heading="Type or Paste yourtext to transform"
              mode={mode}
            />
          }
        />
        <Route exact path="/Formtext" element={<About mode={mode}/>} />
      </Routes>
    </>
  );
}

export default App;
