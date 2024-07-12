let up = 0;
let bottom = 0;
let left = 0;
let right = 0;
function navigation(value){
    let  v=value;
    if( v == 1 ){
        up += 10; 
        document.getElementById("img").style.marginBottom= up+ "px";
   
    }
    if( v == 2 ){
        bottom += 10;
        let a = document.getElementById("img").style.marginTop= bottom +"px";
     
    }
    if( v == 3 ){
        left += 10;
        document.getElementById("img").style.marginRight= left + "px";
 
    }
    if( v == 4 ){
        right += 10;
        document.getElementById("img").style.marginLeft= right + "px";
    
    }
}