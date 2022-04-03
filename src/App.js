import React from "react";
import Screenshot from "./components/Screenshot";
import ewdavid from "./assets/ewdavid.gif";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h3>Select a,, time that work's best !!</h3>
      </header>
      <Screenshot />
      <img className="ewdavid" height="400" src={ewdavid} alt="thx" />
    </div>
  );
}

export default App;
