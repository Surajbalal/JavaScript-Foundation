const c=document.getElementById("c_value").value;
// const f=0;
// const c=4;
// const submit = document.getElementById("btn");
// submit.addEventListener("click",unit_cv)
function unit_cv(c){
  f=(c*1.8)+32;
  console.log(c);
  
  //  document.write(f);
  document.getElementById("result").innerHTML=f;
  
// return f;
}
// const result =unit_cv(4)
// console.log(result)
// document.write(f)