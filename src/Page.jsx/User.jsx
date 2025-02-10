import React from "react";
import Sidebar from "../Components/Sidebar"
import DimensionsGrid from "../Components/DimensionsGrid";
import LinesCarousel from "../Components/LinesCarousel";
import PromoBanner from "../Components/PromoBanner";

const User = () => {
  return (
    <div className="user-container">
      <Sidebar />
      <div className="main-content">
        <LinesCarousel />
        <PromoBanner />
        <h2>ESPACIOS DISPONIBLES</h2>
        <DimensionsGrid />
        
      </div>
    </div>
  );
};

export default User;
