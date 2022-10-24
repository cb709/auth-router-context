import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSingOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  
  return (
    <div>
      <div className="navbar justify-between px-3 py-1 bg-neutral text-neutral-content">
        <div className="logo">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            React-Auth
          </Link>
        </div>
        <div className="nav-link">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
          {user ? (
            <button
              onClick={handleSingOut}
              className="btn btn-ghost normal-case text-xl"
            >
              Sign Out
            </button>
          ) : (
            <Link to={"/login"} className="btn btn-ghost normal-case text-xl">
              Login
            </Link>
          )}

          {/* <Link to={"/register"} className="btn btn-ghost normal-case text-xl">
            Register
          </Link> */}

          {user?.email && (
            <p className="normal-case text-md border rounded-md mx-3 px-3 py-1">
              Hello,{user?.email}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
