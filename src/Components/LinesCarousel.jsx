import React from "react";

const LinesCarousel = () => {
  const lines = [
    { id: 1, title: "Línea 1", description: "Descripción de línea 1", image: "img/image.png" },
    { id: 2, title: "Línea 2", description: "Descripción de línea 2", image: "img/UMB.webp" },
    { id: 3, title: "Línea 3", description: "Descripción de línea 3", image: "img/agua.webp" },
    { id: 4, title: "Línea 4", description: "Descripción de línea 4", image: "img/indios.jpeg" },
  ];

  return (
    <div className="bottom-container">
      {/* Tarjetas */}
      {lines.map((line) => (
        <div key={line.id} className="bottom-card">
          <img src={line.image} alt={line.title} />
          <h3>{line.title}</h3>
          <p>{line.description}</p>
        </div>
      ))}

      
    </div>
  );
};

export default LinesCarousel;
