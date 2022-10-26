let topDisplay = document.querySelector('#top');
let bottomDisplay = document.querySelector('#bottom');

function a(){
    bottomDisplay.innerHTML=eval(topDisplay.innerHTML);
}

let a0=document.getElementById("zero")
a0.onclick=function(){
    topDisplay.innerHTML+="0"
    a();
}
let a1=document.getElementById("one")
a1.onclick=function(){
    topDisplay.innerHTML+="1"
    a();
}
let a2=document.getElementById("two")
a2.onclick=function(){
    topDisplay.innerHTML+="2"
    a();
}
let a3=document.getElementById("three")
a3.onclick=function(){
    topDisplay.innerHTML+="3"
    a();
}
let a4=document.getElementById("four")
a4.onclick=function(){
    topDisplay.innerHTML+="4"
    a();
}
let a5=document.getElementById("five")
a5.onclick=function(){
    topDisplay.innerHTML+="5"
    a();
}
let a6=document.getElementById("six")
a6.onclick=function(){
    topDisplay.innerHTML+="6"
    a();
}
let a7=document.getElementById("seven")
a7.onclick=function(){
    topDisplay.innerHTML+="7"
    a();
}
let a8=document.getElementById("eight")
a8.onclick=function(){
    topDisplay.innerHTML+="8"
    a();
}
let a9=document.getElementById("nine")
a9.onclick=function(){
    topDisplay.innerHTML+="9"
    a();
}
let c=document.getElementById("clear")
c.onclick=function(){
    topDisplay.innerHTML="";
    // console.log("0")
    bottomDisplay.innerHTML="";
    // a();
}
let d=document.getElementById("divide")
d.onclick=function(){
    topDisplay.innerHTML+="/"
    a();
    // console.log("0")
}
let m=document.getElementById("multiply")
m.onclick=function(){
    topDisplay.innerHTML+="*"
    a();
}
let s=document.getElementById("subtract")
s.onclick=function(){
    topDisplay.innerHTML+="-"
    a();
}
let ad=document.getElementById("add")
ad.onclick=function(){
    topDisplay.innerHTML+="+"
    a();
}
let de=document.getElementById("decimal")
de.onclick=function(){
    topDisplay.innerHTML+="."
    a();
}


let a123=document.getElementById("equal")
a123.onclick=function(){
    try{
        bottomDisplay.innerHTML=eval(topDisplay.innerHTML);
    }
    catch(err){
        alert("Enter correctly")
    }
}
// let t=topDisplay.innerHTML;
// t.onchange=function(){
//     console.log("changing")
//     try{

// if(topDisplay.innerHTML.length>0){
// }
// else{
//     bottomDisplay.innerHTML=0;
// }

    // }
//     catch(err){
//         alert("Enter correctly")
//     }
// }