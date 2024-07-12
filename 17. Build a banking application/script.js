let bal = 2000;
obj = {
  name: function (amount, op) {
    if (op == true) {
      return (bal += +amount);
    }
    else if (bal > 0) 
      {
        return (bal -= +amount);
      }
  }
}
// funtion for credit or ADD money
function credit() {
  let amount = document.getElementById("input").value;
  let result = obj.name(amount, true);
  document.getElementById("balance").innerHTML = result;
  console.log(result);
}
// function for debit or minus
function debit() {
  let amount = document.getElementById("input").value;
  let result = obj.name(amount, false);
  document.getElementById("balance").innerHTML = result;
  console.log(result);
}
