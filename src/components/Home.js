import React, { useContext } from "react";
import { AuthContext } from "../context/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user?.email && (
        <p className="normal-case text-xl mx-3 px-3 py-1">
          Hello,{user?.email}
        </p>
      )}
    </div>
  );
};

export default Home;
