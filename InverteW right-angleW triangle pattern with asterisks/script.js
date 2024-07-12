let display = document.getElementById("display");
// let stars="";

function pattern(){
    let input= document.getElementById("input").value;
    for(let i=input;i>=0;i--){
         let stars = "";

        for(let j=0;j<=i;j++){
    //     // document.write("*");eklgs
        // stars+="*";
        // } 
        // console.log(stars.repeat(i));
        
        // document.write("*");
        display.innerHTML+="*";
        
        // document.write(stars);
    }
    display.innerHTML+="<br/>";
    // document.write("<br/>");

console.log(stars);
////////////// console.log("*"); 
}
}