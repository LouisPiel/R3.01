//Exercice1

const personne = {
    prenom : "Louis",
    nom : "Piel",
    age : 19,
    ville : "La Vespière-Friardel",

};

const {prenom, nom, age, ville} = personne;

console.log(prenom);
console.log(nom);
console.log(age);
console.log(ville);

document.getElementById("Personne").textContent = personne;


