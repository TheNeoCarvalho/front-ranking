import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Link to="/"> Voltar</Link>
    </div>
  );
};

export default GoBack;
