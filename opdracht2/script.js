function enter(){
var leeftijd = (document.getElementById("leeftijd").value);

if(leeftijd < 18 ){
    alert("Je bent te jong helaas!");
} else {
    alert("Je bent oud genoeg gefeliciteerd!");
}
// console.log(leeftijd);
}