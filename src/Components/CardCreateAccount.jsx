import React from "react";
import { useNavigate } from "react-router-dom";

const CardCreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="register-card">
      {/* Título grande y subtítulo pequeño */}
      <h4 className="register-title">Crea tu cuenta</h4>
      <p className="register-subtitle">Es rápido y fácil</p>

      {/* Separador gris */}
      <div className="register-separator"></div>

      {/* Campos de entrada */}
      <input type="text" placeholder="Nombre completo" className="register-input" />
      <input type="text" placeholder="Nombre de usuario" className="register-input" />
      <input type="email" placeholder="Correo electrónico" className="register-input" />
      <input type="password" placeholder="Contraseña" className="register-input" />

      {/* Botón de registro */}
      <button className="register-button">Regístrate</button>

      {/* Texto con enlace para iniciar sesión */}
      <p className="register-login-text">
        ¿Ya tienes cuenta?{" "}
        <span className="register-login-link" onClick={() => navigate("/")}>
          Inicia sesión
        </span>
      </p>
    </div>
  );
};

export default CardCreateAccount;
