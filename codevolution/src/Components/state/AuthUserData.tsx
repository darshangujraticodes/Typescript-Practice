import { useState } from "react";

interface AuthUser {
  name: string;
  email: string;
}

const AuthUserData = () => {
  // type assertion
  const [userData, setUserData] = useState<AuthUser | null>(null);

  // typer assertion format
  // const [userData, setUserData] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUserData({
      name: "Darsh",
      email: "darsh17@gmail.com",
    });
  };
  const handleLogout = () => {
    setUserData(null);
  };

  return (
    <section className="mt-4">
      <div className="container">
        <h5>UseState hook</h5>

        <div className="">
          <button onClick={handleLogin} className="">
            Login{" "}
          </button>
          <button onClick={handleLogout} className="ms-3">
            Logout{" "}
          </button>
        </div>
        <p className="mt-2">
          {/* if we put value can be both AuthUser or null then we require optional Chaining ? to print data */}
          User : {userData?.name} | Email : {userData?.email}
          {/* if we put value as type assertion format does not require optional chaining ?  */}
          {/* User : {userData.name} | Email : {userData.email} */}
        </p>
      </div>
    </section>
  );
};

export default AuthUserData;
