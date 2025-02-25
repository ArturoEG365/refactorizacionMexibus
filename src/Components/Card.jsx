import React from "react";
import { useNavigate } from "react-router-dom"; 

const Card = ({ onCreateAccountClick, onForgotPasswordClick }) => {
  const navigate = useNavigate(); 

  return (
    <div className="login-card">
      <div className="card-content">

        <h2 className="card-title">Iniciar Sesión</h2>

        <input type="email" placeholder="Correo electrónico" className="input-field" />
        <input type="password" placeholder="Contraseña" className="input-field" />

        <button onClick={() => navigate("/user")} className="login-button">
          Iniciar sesión
        </button>

        <a href="#" onClick={onForgotPasswordClick} className="forgot-password">
          ¿Olvidaste tu contraseña?
        </a>

        <div className="separator"></div> 

        <button onClick={onCreateAccountClick} className="create-account-button">
          Crear cuenta
        </button>
      </div>
    </div>
  );
};

export default Card;