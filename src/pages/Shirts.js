import Data from "../Aparell.json";
import "../styles/Merch.css";
function Shirts() {
  return (
    <div className="merch-card">
      {Data.map((card) => {
        if (card.type === "Shirt") {
          return (
            <div div className="info">
              <img src={card.img} alt={card.color + card.type} />
              <h3>{card.gender}</h3>
              <h3>{card.price}</h3>
              <h3>{card.description}</h3>
            </div>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}

export default Shirts;