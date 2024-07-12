const input = document.getElementById("input").value;
// const input="1,2,3,10,9,4,5,6"

const arr=[...input]
const  arr2=[];
console.log(arr)
function calculate(){
for(let i=0;i<=arr.length;i++){

    if(arr[i]%3==0){
        arr2.push(arr[i]);
    }

  
    else if(arr[i]%2==0){
        continue;
    }
}
document.getElementById("result").innerHTML=arr2;
// document.write(arr2)
console.log(arr2)
}
