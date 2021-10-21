import React, { useState } from "react";
import LoginUI from "../../components/UI/loginUI/LoginUI";
import Home from "../home/Home";

const Login = () => {
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details do not match !");
    }
  };

  return (
    <div>
      {user.email !== "" ? (
        <div>
          <Home />
        </div>
      ) : (
        <LoginUI Login={Login} error={error} />
      )}
    </div>
  );
};

export default Login;
