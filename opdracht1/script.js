var getal1 = 23;
var getal2 = 100;

document.getElementById("main").innerHTML += getal1;
document.getElementById("main").innerHTML += getal2;

var getal3 = prompt("Vul een getal in");

if(getal3 <= (getal1+getal2)){
    document.getElementById("main").innerHTML = getal3;
    alert("hij werkt");
}
