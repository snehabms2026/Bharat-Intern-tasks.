let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
function celToFar(){
    let output=(parseFloat(celsius.value)*9/5)+32;
    fahrenheit.value=parseFloat(output.toFixed(2));
}
function farToCel(){
    let output=(parseFloat(fahrenheit.value)-32)*5/9;
    celsius.value=parseFloat(output.toFixed(2));
}
var inputvalue=document.querySelector('#cityinput');
var btn=document.querySelector('#add');
var city=document.querySelector('#cityinput');
var description=document.querySelector('#description');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
apik="729f485f9a6a5823047554a3599f6f95"
function conversion(val)
{
    return(val-273).toFixed(1)
}
