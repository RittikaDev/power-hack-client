import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        (response) => {
          navigate("/");
          window.location.reload();
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="inventory-text mx-16 my-5" onSubmit={handleLogin}>
      <div className="inventory-textbox mb-1">
        <h4 className="text-center font-bold">Login</h4>
      </div>
      <p className="inventory-textbox">
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p className="inventory-textbox">
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <div className="modal-action text-center py-2 ">
        <button type="submit" className="btn py-2 mx-auto">
          Log in
        </button>
      </div>
    </form>
  );
};

export default Login;
