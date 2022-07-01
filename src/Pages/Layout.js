import React from "react";
import SubmissionForm from "./SubmissionForm/SubmissionForm";
import { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";

const Layout = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [paidAmount, setPaidAmount] = useState(0);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  const paidTotal = (a) => {
    setPaidAmount(a);
  };
  return (
    <>
      <div className="navbar bg-base-100 drop-shadow-lg rounded-lg">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Power Hack</a>
        </div>
        <div className="flex-none">
          {currentUser ? (
            <ul className="menu menu-horizontal p-0">
              <li>
                <a href="/login" className="nav-link" onClick={logOut}>
                  Logout
                </a>
              </li>
            </ul>
          ) : (
            <div className="navbar-nav ms-auto">
              <ul className="menu menu-horizontal p-0">
                <li>
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
              <ul className="menu menu-horizontal p-0">
                <li>
                  <Link to={"/register"} className="nav-link">
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Paid Total : {paidAmount}</a>
            </li>
          </ul>
        </div>
      </div>
      <SubmissionForm paidTotal={paidTotal} />
    </>
  );
};

export default Layout;
