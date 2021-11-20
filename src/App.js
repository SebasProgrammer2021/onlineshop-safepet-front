import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./static/styles/App.css";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";

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
