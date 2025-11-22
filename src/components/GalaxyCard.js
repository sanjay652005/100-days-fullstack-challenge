import React from "react";
import "./GalaxyCard.css";

function GalaxyCard({ title, description, icon }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default GalaxyCard;
