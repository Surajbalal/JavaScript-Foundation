function text_highliter(){
    let count =0;
    let k=0;
    let input = document.getElementById("input").value;
    // let arr = "my name is surajbalal";
    let new_arr= input.split(" ");
    for (const i of new_arr) {
        count++
        if (i.length > 8 ){
            console.log("new" +i);
             console.log(count-1);
             k = count-1;
             
            // document.getElementById("updated_string").innerHTML=i.style.color="green";
            //     console.log(new_arr.indexof(i));d
            
            // }
            // console.log(new_arr.findIndex(highli_word)); 
            console.log( new_arr);
            
        }
    let display = document.getElementById("updated_string");
    // let result = ;

}
}
    // let result =input.forEach(el => {
    //     return el;
        
    // });
    //  for (const it of new_arr) {
        
  
    //     console.log(it);
        
    // }
//     // console.log(result);
//     return result;
// }
// let a = highliter();
// console.log(a);
