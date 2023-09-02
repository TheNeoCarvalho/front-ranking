import confetti from "canvas-confetti";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2,
    },
  });
  const [, setData] = useState([]);

  useEffect(() => {
    fetch("https://api-render-fsef.onrender.com/api/v1/rank")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <h1 className="title">Ranking da Semana</h1>
    </>
  );
}

export default App;
