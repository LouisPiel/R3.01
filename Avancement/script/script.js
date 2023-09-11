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

//Exercice3

personnes.push("Marc");
personnes.push("Doe");
personnes.push(32);
personnes.push("Marseille");

console.log(personnes);
console.table(personnes);

document.getElementById("Person").textContent = personnes;

// Exercice4

personne.prenom = "Jean"
personnes[1].splice(0);

console.log(personne);
console.table(personne);
console.log(personnes);
console.table(personnes);

// Exercice5

const nombre = [0, 1,2,3,4,5,6,7,8,9,10]

console.log(nombre[0]);
console.log(nombre[10]);
console.log(nombre.length);

document.getElementById("Nombre").textContent = nombre;