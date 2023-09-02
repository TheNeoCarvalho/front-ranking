import { Link } from "react-router-dom";
import "../../App.css";
import rank from "../../assets/rank.png";

function Home() {
  return (
    <div>
      <img style={{ width: 200, height: 200 }} src={rank} />
      <h1>Visualizar rank da semana</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link style={{ color: "white", fontSize: 22 }} to="/ds">
          Desenvolmento de Sistemas
        </Link>
        <Link style={{ color: "white", fontSize: 22 }} to="/info">
          Informática
        </Link>
      </div>
    </div>
  );
}

export default Home;
