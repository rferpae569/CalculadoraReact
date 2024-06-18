import React from "react";
import getNum from "../Utilities/getNum";

export default function Display({ currentCalc }) {
  // Usa useRef para persistir el valor del cálculo anterior
  const previousCalc = React.useRef();

  // Desestructura los valores necesarios del prop currentCalc
  const { previousNum, currentNum, result } = currentCalc;

  // Determina el número a mostrar basado en result, currentNum y previousNum
  let numToDisplay =
    result.join("") || currentNum.join("") || previousNum.join("") || "0";

  // Verifica si numToDisplay es un array y lo maneja en consecuencia
  if (Array.isArray(numToDisplay)) {
    numToDisplay = numToDisplay[0];
  }

  // Añade comas como separador de miles en el número a mostrar
  numToDisplay = numToDisplay
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  // Determina la longitud del número para ajustar el tamaño de la fuente si es necesario
  const numLength = numToDisplay.length;

  // Calcula el estilo para el tamaño de la fuente si el número es demasiado largo
  const style =
    numLength > 7 ? { fontSize: calculateFontSize(numLength) } : null;

  // Función para calcular el tamaño de la fuente basado en la longitud del número
  function calculateFontSize(numLength) {
    const excess = numLength - 6;
    const calculatedSize = 50 - excess * 3.5;
    const fontSize = calculatedSize > 18 ? calculatedSize : 18;
    return `${fontSize}px`;
  }

  // Renderiza el display con el número a mostrar y el estilo calculado
  return (
    <div style={style} className="display">
      {numToDisplay}
    </div>
  );
}
