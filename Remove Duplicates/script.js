// ---------remove duplicates--------
let btn = document.getElementById("btn");
btn.addEventListener("click",items)
// addEventListener
let arr=[];

function items(){
    let items = document.getElementById("input").value;
    // let arr=[];
    arr.push(items);
    console.log(arr)
}
function cart(){
    // let arr=[];
// let arr=["suraj","suraj","sejal"];

let removedup= arr.filter((value,index) =>{
    return  arr.indexOf(value) == index;
  
})
document.write([...removedup]);
console.log(removedup);
}