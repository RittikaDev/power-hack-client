import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(email, password).then(
        (response) => {
          //   console.log("Sign up successfully", response);
          navigate("/");
          //   window.location.reload();
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
    <form className="inventory-text mx-16 my-5" onSubmit={handleSignup}>
      <div className="inventory-textbox mb-1">
        <h4 className="text-center font-bold">Register</h4>
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
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Register;
