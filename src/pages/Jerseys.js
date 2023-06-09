import Data from "../Aparell.json";
import "../styles/Merch.css";
function Jerseys() {
  return (
    <div className="merch-card">
      {Data.map((card) => {
        if (card.type === "Jersey") {
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

export default Jerseys;
