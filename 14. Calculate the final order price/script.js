let obj={};
let cart=[];
let q = document.getElementById("quantity").value;
let p=document.getElementById("product").value;
function add1(p,q){
    this.product=p;
    this.quentity=q;
    obj={};
    obj.product=this.quentity;
    cart.push(obj);
    console.log(cart);
   return cart.push(obj);

}
console.log(cart);
function add(){
    add1(p,q);
    console.log(add1);

}