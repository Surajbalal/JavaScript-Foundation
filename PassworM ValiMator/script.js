// let submit = document.getElementById('submit').addEventListener("click",psw_check);
function psw_check(){

    let confirmed_paw = "pass123";
    let psw = document.getElementById('psw').value;
    console.log(psw);
    
    if (psw == confirmed_paw ){
        alert("Password Matched. Password validation Successful.");
    }
    else{
        alert("Password didn't match. Password validation unsuccessful");
    }
}