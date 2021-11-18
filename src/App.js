import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import RegisterForm from "./RegisterForm";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
      </Routes>
    </div>
  );
};
export default App;
