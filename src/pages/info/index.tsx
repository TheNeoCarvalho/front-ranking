import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import "../../App.css";
import rank from "../../assets/rank.png";
import List from "../../components/List";
import GoBack from "../../components/back";

function Info() {
  confetti({
    particleCount: 100,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2,
    },
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api-render-fsef.onrender.com/api/v1/rank/course/2")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <GoBack />
      <img
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 200,
          height: 200,
        }}
        src={rank}
      />
      <h2>Rank da semana - Informática</h2>
      {data.map((d: { id: number; name: string; score: string }, index) => (
        <List name={d.name} score={d.score} index={index} />
      ))}
    </div>
  );
}

export default Info;
