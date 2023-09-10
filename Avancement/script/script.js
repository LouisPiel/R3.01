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

//Exercice2

const personnes = [
    ["John", "Doe", 25, "Rouen"],
    ["Jane", "Doe", 30, "Paris"],
    ["Jim", "Doe", 35, "Caen"],
];
console.log(personnes);
console.table(personnes);

document.getElementById("Personnes").textContent = personnes;
