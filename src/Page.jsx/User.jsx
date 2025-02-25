import React from "react";
import Sidebar from "../Components/Sidebar";
import LinesCarousel from "../Components/LinesCarousel";
import PromoBanner from "../Components/PromoBanner";
import DataGrid from "../Components/DataGrid";

const User = () => {
  const firstCarouselData = [
    { id: 1, title: " Línea 1", description: "", image: "img/image.png" },
    { id: 2, title: " Línea 2", description: "Color Azul", image: "img/image.png" },
    { id: 3, title: " Línea 3", description: "Color Verde Olivo", image: "img/image.png" },
    { id: 4, title: "Línea 4", description: "Color Azul Marino", image: "img/image.png" },
  ];

  const secondCarouselData = [
    { id: 8, title: "Línea 4", description: "Conexión a CDMX", image: "img/image.png" },
    { id: 2, title: "Línea 4", description: "Ojo de Agua", image: "img/image.png" },
    { id: 7, title: "Línea 4", description: "Conexión a CDMX", image: "img/image.png" },
    { id: 2, title: "Línea 4", description: "Ojo de", image: "img/image.png" },
  ];
 
 
 
  
 

  return (
    <div className="user-container">
      <Sidebar />
      <div className="main-content">
      <h2>ESPACIOS DISPONIBLES</h2>
        <LinesCarousel lines={firstCarouselData} />
        <LinesCarousel lines={secondCarouselData} />

        <PromoBanner />
        <DataGrid />
        
 
      </div>
    </div>
  );
};

export default User;
