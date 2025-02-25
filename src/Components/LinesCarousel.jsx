import React from "react";

const LinesCarousel = ({ lines }) => {
  return (
    <div className="bottom-container">
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
