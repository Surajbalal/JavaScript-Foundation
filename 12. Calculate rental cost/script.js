
// ---------Car rental calculater------------

function rental_cal(){
let days=document.getElementById("days").value;
  let car=document.getElementById("car").value;
  console.log(car)
  const result=days*car;
  console.log(days)
  document.getElementById("rent").innerText=result;
  console.log(result);
}
