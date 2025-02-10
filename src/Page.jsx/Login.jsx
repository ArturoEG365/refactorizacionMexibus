import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import logo from "/img/autobus_colored.png"; // Asegúrate de que la ruta sea correcta

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      {/* Logo y título fuera de la tarjeta */}
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <span className="title">
          <span className="text-mexi">Mexi</span>
          <span className="text-anuncios">Anuncios</span>
        </span>
      </div>

      {/* Tarjeta de inicio de sesión */}
      <Card 
        onLoginClick={() => console.log("Iniciar sesión")}
        onCreateAccountClick={() => navigate("/create-account")}
        onForgotPasswordClick={() => console.log("Olvidé mi contraseña")}
      />
    </div>
  );
}

export default Login;
