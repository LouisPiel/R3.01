
//Hello World
/*let variable = document.getElementById("HelloWorld");
variable.textContent = "Hello World";*/

//Exercice1
let celsius = 35;
document.getElementById("Celsuis").textContent += celsius+ "C";
let fahrenheit = celsius * 9/5 + 32;
document.getElementById("Farent").textContent += fahrenheit+ "F";

//Exercice2

let longueur = 20;
let largeur = 50;
document.getElementById("Rectangle").textContent += longueur * largeur;

//Exercice3

let prenom = "Louis";
let nom = "Piel";
document.getElementById("Nom").textContent = prenom+ " "+nom;

//Exercice4

let ht = 15;
document.getElementById("HT").textContent = ht;
let tva = 20;
document.getElementById("TVA").textContent = tva;
let ttc = ht * tva/100;
document.getElementById("TTC").textContent = ttc;

//Exercice5
let vrai = ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true);
document.getElementById("VRAI").textContent += vrai;

//Exercice6
let poids = 57.5;
document.getElementById("poids").textContent += poids+" kg";
let taille = 1.79;
document.getElementById("taille").textContent += taille+" m";
let imc = poids / (taille * taille);
document.getElementById("IMC").textContent = imc.toFixed(2);

//Exercice7
const min = 33;
document.getElementById("minimum").textContent = min;
let total = 29;
document.getElementById("Total").textContent = total;
if(total >= min) {
    document.getElementById("montant").textContent = "Livraison gratuite!";
} else {
    let fonction = min - total;
    document.getElementById("montant").textContent += "Frais de livraison = "+fonction+" €";
}
//Exercice8
const nb = "10001101";
document.getElementById("Binaire").textContent = nb;
let decimal = parseInt(nb, 2);
document.getElementById("Decimal").textContent = decimal;


