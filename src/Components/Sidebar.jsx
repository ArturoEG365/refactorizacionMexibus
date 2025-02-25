import React from "react";
import { FaHome, FaSearch, FaList, FaPlus, FaUser } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">
        <span className="text-mexi">Mexi</span>
        <span className="text-anuncios">Anuncios</span>
      </h2>
      <ul className="lst">
        <li><FaHome /> Inicio</li>
        <li><FaSearch /> Buscar</li>
        <li><FaList /> Líneas</li>
        <li><FaPlus /> Agregar línea</li>
        <li><FaUser /> Perfil</li>
      </ul>
    </div>
  );
};

export default Sidebar;