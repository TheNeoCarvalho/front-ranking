import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import "./App.css";
import coroa from './assets/007.png';
import rank from "./assets/rank.png";
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
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3333/api/v1/rank")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <img style={{ width: 200, height: 200 }} src={rank} />
      <h1>Rank da semana</h1>
      {data.map((d: { id: number; name: string; score: string }, index) => (
        <div
          key={d.name}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: 450,
            background: "#ccc",
            paddingLeft: 12,
            paddingRight: 12,
            margin: 16,
            borderRadius: 50
          }}
        >
          {index == 0 ? (
            <img
              style={{ width: 25, height: 25 }}
              src={coroa}
              className="logo react"
              alt="React logo"
            />
          ) : (
            <p style={{ width: 25, height: 25 }}></p>
          )}
          <p style={{ width: 250, textAlign: "left" }}>
            <span style={{ color: "white", fontSize: 28 }}>{d.name}</span>
          </p>
          <p>
            <span
              style={{
                color: "red",
                fontSize: 20,
                padding: 4,
                fontWeight: 700,
              }}
            >
              {d.score}
            </span>
            pontos
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;