import React from "react";
import "../styles/Merch.css";
import Data from "../Aparell.json";

function Merch() {
  return (
      <div className="merch-card">
        {Data.map((card) => {
          return (
            <div className="info" key={card.id}>
                <img src={card.img} alt={card.color + card.type} />
              <h3>{card.price}</h3>
              <h5>{card.description}</h5>
            </div>
          );
        })}
      </div>
  );
}

export default Merch;
