import React from "react";
import { nanoid } from "nanoid";

export default function Buttons({ handleClick, buttonData }) {
  // Función para obtener el nombre de clase CSS para cada botón basado en su valor
  function getName(item) {
    const options = [
      [0, "zero"],
      [1, "one"],
      [2, "two"],
      [3, "three"],
      [4, "four"],
      [5, "five"],
      [6, "six"],
      [7, "seven"],
      [8, "eight"],
      [9, "nine"],
      ["+", "plus"],
      ["−", "minus"],
      ["x", "times"],
      ["÷", "divide"],
      ["=", "equals"],
      ["clear", "clear"],
      [".", "decimal"],
      ["+/-", "negative"],
      ["%", "percent"],
    ];
    return options.find((pair) => pair[0] === item)[1];
  }

  // Generación de botones numéricos (del 0 al 9)

  const numberButtons = Array(10)
    .fill("")
    .map((item, index) => {
      return (
        <button
          key={nanoid()}
          data-number={`${index}`}
          className={`number-button ${getName(index)}`}
          onClick={handleClick}
        >
          {index}
        </button>
      );
    });

  // Función para verificar si un botón de operación está destacado (resaltado)
  function checkIfHighlighted(item) {
    return item === buttonData.operation ? "highlight" : "";
  }

  // Generación de botones de operaciones (+, −, x, ÷)
  const operationsButtons = ["+", "−", "x", "÷"].map((item) => (
    <button
      key={nanoid()}
      data-operation={item}
      className={`operation-button ${getName(item)} ${checkIfHighlighted(
        item
      )}`}
      onClick={handleClick}
    >
      {item}
    </button>
  ));

  // Generación de otros botones (clear, =, ., %, +/-)
  const otherButtons = ["clear", "=", ".", "%", "+/-"].map((item) => (
    <button
      key={nanoid()}
      data-other={getName(item)}
      className={`${getName(item)} button`}
      onClick={handleClick}
    >
      {item === "clear" ? buttonData.clearOption : item}
    </button>
  ));

  // Renderizado de todos los botones en un contenedor
  return (
    <div className="buttons-container">
      {numberButtons}
      {operationsButtons}
      {otherButtons}
    </div>
  );
}
