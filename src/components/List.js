import { React, useState } from "react";
import Aparell from "../Aparell.json";

function List(props) {
  //create a new array by filtering the original array
  const filteredData = Aparell.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return (
        el.type.toLowerCase().includes(props.input)
      );
    }
  });

  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.color} {item.type} {item.gender}</li>
      ))}
    </ul>
  );
}

export default List;
