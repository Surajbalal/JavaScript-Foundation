
let h1 = document.getElementById("h1").value;
function change(e){
    let new_1text= "pw skills"
    let new_2text="The most affordable learning platform"

    if(e != new_1text){
        document.getElementById("h1").innerHTML= new_1text;
        h1=new_1text
    }
    else{
        document.getElementById("h1").innerHTML= new_2text;
        h1 = new_2text

    }
}
function change_text(){
    change(h1)
}