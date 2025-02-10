import React from "react";

const DimensionsGrid = () => {
  const dimensions = [
    { id: 1, size: "Ojo de Agua", image: "img/verdes.webp" },
    { id: 2, size: "Pantitlan", image: "img/indios.jpeg" },
    { id: 3, size: "La Quebrada", image: "img/agua.webp" },
    { id: 4, size: "UMB", image: "img/UMB.webp" },
  ];

  return (
    <div className="dimensions-grid">
      {dimensions.map((item) => (
        <div key={item.id} className="dimension-card">
          <img src={item.image} alt={`Dimension ${item.size}`} />
          <h3>{item.size}</h3>
          <p>Descripción breve del anuncio.</p>
        </div>
      ))}
    </div>
  );
};

export default DimensionsGrid;
