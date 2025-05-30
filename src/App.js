import React from "react";
import './App.css';
import Apostles from "./components/Apostle.js";
import Prophets from "./components/Prophets.js";
import Evangelists from "./components/Evangelists.js";
import Pastors from "./components/Pastors.js";
import Teachers from "./components/Teachers.js";

function App() {
  return (
    <div className="App">
      <h1>Fivefold Ministry</h1>
      <Apostles />
      <Prophets />
      <Evangelists />
      <Pastors />
      <Teachers />
    </div>
  );
}

export default App;