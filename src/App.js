import logo from "./logo.svg";
import "./App.css";
import Layout from "./Pages/Layout";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto px-4">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
