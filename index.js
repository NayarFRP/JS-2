console.log("Si");

const txtOp1 = document.getElementById("op1");
const txtOperador = document.getElementById("operador");
const txtOp2 = document.getElementById("op2");
const txtBoton = document.getElementById("boton");
const pResultado = document.getElementById("resultado");
console.log(txtOp1);

txtBoton.addEventListener("click", calcular);

function calcular() {
  const operador = txtOperador.value;
  const op1 = parseFloat(txtOp1.value);
  const op2 = parseFloat(txtOp2.value);

  console.log("calcular");
  console.log(txtOperador.value);

  if (
    (operador == "+" ||
      operador == "-" ||
      operador == "*" ||
      operador == "/") &&
    !isNaN(op1) &&
    !isNaN(op2)
  ) {
    let resultado;
    switch (operador) {
      case "+":
        resultado = op1 + op2;
        break;
      case "-":
        resultado = op1 - op2;
        break;
      case "*":
        resultado = op1 * op2;
        break;
      case "/":
        resultado = op1 / op2;
        break;
    }
    pResultado.style = "color:green";
    pResultado.innerText = resultado;
  } else {
    pResultado.style = "color:red";
    pResultado.innerText = "No";
  }
}
