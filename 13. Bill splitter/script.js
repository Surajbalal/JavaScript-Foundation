// ---------------------------------
// --------- Bill Splitter-----------
// ----------------------------------
let arr = [];
let total=0;
let bill=0;
const int_arr=[];
// funtion for push food price in array 
function addop() {
let amount = document.getElementById("input").value;
//  amount.forEach(el => el.value = "");

  console.log(amount);
  arr.push(amount);
  console.log(arr.length);
  document.write;
arr.forEach(ele => int_arr.push(+ele))

}
let clear=document.getElementById("add");
clear.addEventListener("click", ()=>{
  clear.forEach( input => input.value="");
})
// function for sum total bill amount
function sum() {
  console.log(int_arr);
  
  total=int_arr.reduce((pre,cure)=> pre+cure)
  console.log(total);
  document.getElementById("total_bill").innerHTML=total;
} 
// function for split bill
function split_bill(){
  let num_person=document.getElementById("no._person").value;
  bill=total/num_person;
  console.log(bill);
document.getElementById("per_person_bill").innerHTML=bill;
}