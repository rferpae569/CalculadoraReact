import getNum from "./getNum";

// Función para calcular el resultado basado en los datos de cálculo (calcData)
export default function calculateResult(calcData) {
  // Obtiene el primer número usando la función getNum y verificando result o previousNum
  const firstNum = getNum(calcData.result) || getNum(calcData.previousNum);

  // Obtiene el segundo número usando la función getNum y verificando currentNum, previousNum o result
  const secondNum =
    getNum(calcData.currentNum) ||
    getNum(calcData.previousNum) ||
    getNum(calcData.result);

  // Obtiene la operación actual de calcData
  const op = calcData.operation;

  // Si el número actual es "0" y su longitud es 1, establece secondNum como 0
  if (calcData.currentNum[0] === "0" && calcData.currentNum.length === 1) {
    secondNum = 0;
  }

  // Utiliza un switch para realizar la operación correspondiente
  switch (op) {
    case "+":
      return (firstNum + secondNum).toString();
      break;
    case "−":
      return (firstNum - secondNum).toString();
      break;
    case "x":
      return (firstNum * secondNum).toString();
      break;
    case "÷":
      return (firstNum / secondNum).toString();
      break;
  }
}
