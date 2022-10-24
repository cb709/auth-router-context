import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="logo">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            React-Auth
          </Link>
        </div>
        <div className="nav-link">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">Home</Link>
          <Link to={"/login"} className="btn btn-ghost normal-case text-xl">Login</Link>
          <Link to={"/register"} className="btn btn-ghost normal-case text-xl">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
