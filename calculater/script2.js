function calculate() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let func = document.getElementById("func").value;
  let result = document.getElementById("result");
  switch (func) {
    case "+":
      let sum = num1 + num2;
      result.innerHTML = sum;
      break;

    case "-":
      let sub = num1 - num2;
      result.innerHTML = sub;
      break;

    case "*":
      let mul = num1 * num2;
      result.innerHTML = mul;

      break;
    case "/":
      let div = num1 / num2;
      result.innerHTML = div;
      break;
  }

}
