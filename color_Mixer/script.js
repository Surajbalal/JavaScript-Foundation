
function chkcontrol(j){
    let total = 0;
    for(i=0;i<document.checkbox.ckb.length;i++){
        if(document.checkbox.ckb[i].checked){
            total = total+1;
        }

    }
    if(total>2){
        alert("select only two option")
        document.checkbox.ckb[j].checked=false;
    }
    return false;

}
let red=document.checkbox.ckb[0];

let blue = document.checkbox.ckb[1];
let yellow = document.checkbox.ckb[2];
if (red.checked=true == blue.checked = true)
{

}
else if(red.checked=true == blue.checked=true)

}