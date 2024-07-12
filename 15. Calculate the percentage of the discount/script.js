// ------------Calculate the percentage of the discount------------
function calculate(){
let MRP = document.getElementById("mrp").value;
let Discount = document.getElementById("discount").value;
let display = document.getElementById("display_discount");
let cal=0;
cal=(Discount/MRP)*100
 let result =cal.toFixed(2);
console.log(cal);
display.innerHTML= result 
+ "%";

}