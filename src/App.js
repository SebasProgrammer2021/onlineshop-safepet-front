import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import RegisterForm from "./RegisterForm";

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />

        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
};
export default App;
