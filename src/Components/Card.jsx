import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const Card = ({ onCreateAccountClick, onForgotPasswordClick }) => {
  const navigate = useNavigate(); // Hook para navegación

  return (
    <div className="login-card">
      <div className="card-content">

        <h2 className="card-title">Iniciar Sesión</h2>

        <input type="email" placeholder="Correo electrónico" className="input-field" />
        <input type="password" placeholder="Contraseña" className="input-field" />

        {/* Modifica el botón para que redirija a /user */}
        <button onClick={() => navigate("/user")} className="login-button">
          Iniciar sesión
        </button>

        <a href="#" onClick={onForgotPasswordClick} className="forgot-password">
          ¿Olvidaste tu contraseña?
        </a>

        <div className="separator"></div> {/* Línea de separación */}

        <button onClick={onCreateAccountClick} className="create-account-button">
          Crear cuenta
        </button>
      </div>
    </div>
  );
};

export default Card;
