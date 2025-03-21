import React, { useState } from "react";

interface LoggerType {
  userName: string;
}

const LoggedIn = ({ userName }: LoggerType) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log("Login Button Click");
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    console.log("Logout Button Click");
    setIsLoggedIn(false);
  };

  return (
    <section className="container mt-3">
      <div>
        <button onClick={handleLogin} className="">
          Login
        </button>
        <button onClick={handleLogout} className="ms-4">
          Logout
        </button>
      </div>
      <div>
        <h4 className="mt-3">
          {userName} has {isLoggedIn ? "Logged In" : "Logged Out"}
        </h4>
      </div>
    </section>
  );
};

export default LoggedIn;
