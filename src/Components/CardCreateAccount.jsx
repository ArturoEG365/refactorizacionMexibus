import React from "react";
import { useNavigate } from "react-router-dom";

const CardCreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="register-card">
      <h4 className="register-title">Crea tu cuenta</h4>
      <div className="register-separator"></div>

      <input type="text" placeholder="Nombre apellidos" className="register-input" />
      <input type="text" placeholder="Nombre de usuario" className="register-input" />
      <input type="email" placeholder="Correo electrónico" className="register-input" />
      <input type="password" placeholder="Contraseña" className="register-input" />

      <button className="register-button">Regístrate</button>

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