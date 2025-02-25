import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import Logo from "../Components/Logo";
 

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <Logo />

      <Card 
        onLoginClick={() => console.log("Iniciar sesión")}
        onCreateAccountClick={() => navigate("/create-account")}
        onForgotPasswordClick={() => console.log("Olvidé mi contraseña")}
      />
    </div>
  );
}

export default Login;