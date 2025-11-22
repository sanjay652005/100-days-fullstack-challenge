import React from "react";
import GalaxyCard from "./components/GalaxyCard";
import "./App.css";
import "./Stars.css"; // only for shooting star css

function App() {
  const data = [
    {
      title: "Mars",
      icon: "🔥",
      description: "The red planet. Fourth planet from the Sun.",
    },
    {
      title: "Jupiter",
      icon: "🪐",
      description: "The gas giant with a massive storm.",
    },
    {
      title: "Milky Way",
      icon: "🌌",
      description: "Our home galaxy containing billions of stars.",
    },
    {
      title: "Andromeda",
      icon: "✨",
      description: "The nearest major galaxy to the Milky Way.",
    },
  ];

  return (
    <>
      {/* Minimal shooting stars only */}
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>

      <div className="main">
        <h1>Galaxy Info Cards</h1>

        <div className="grid">
          {data.map((item, index) => (
            <GalaxyCard
              key={index}
              title={item.title}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;



