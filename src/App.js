import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/Search";
import House from "./Components/House";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contents">
        <SearchBar />
        <House />
      </div>
    </div>
  );
}

export default App;
