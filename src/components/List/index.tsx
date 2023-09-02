import coroa from "../../assets/007.png";

interface listProps {
  name: string;
  score: string;
  index: number;
}
const List = ({ name, score, index }: listProps) => {
  return (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "85%",
        background: "#ccc",
        paddingLeft: 25,
        paddingRight: 25,
        margin: 16,
        borderRadius: 50,
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {index == 0 ? (
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: 30,
                height: 30,
                paddingLeft: 12,
                paddingRight: 12,
              }}
              src={coroa}
              className="logo react"
              alt="React logo"
            />
          </div>
        ) : null}
      </div>
      <p style={{ width: "80%" }}>
        <span style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
          {name}
        </span>
      </p>
      <p>
        <span
          style={{
            color: "red",
            fontSize: 38,
            padding: 4,
            fontWeight: 700,
          }}
        >
          {score}
        </span>
        pontos
      </p>
    </div>
  );
};

export default List;
