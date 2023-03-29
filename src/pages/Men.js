import Data from "../Aparell.json";
import "../styles/Merch.css";
function Men() {
  return (
    <div className="merch-card">
      {Data.map((card) => {
        if (card.gender === "Male") {
          return (
            <div div className="info">
              <img src={card.img} alt={card.color + card.type} />
              <h3>{card.color}</h3>
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

export default Men;