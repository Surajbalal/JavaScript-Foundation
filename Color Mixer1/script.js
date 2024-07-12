function color_mixer(){
let color1 = document.getElementById('color1').value;
let color2 = document.getElementById('color2').value;
if (color1=='red' & color2=='blue' || color2=='red' & color1=='blue'){
    document.body.style.background='purple';
}
else if (color1=='red' & color2=='yellow' || color2=='red' & color1=='yellow'){
    document.body.style.background='orange';
}
else if (color1=='yellow' & color2=='blue' || color2=='yellow' & color1=='blue'){
    document.body.style.background='green';
}
else{
    alert("invalid color combination")
}
}