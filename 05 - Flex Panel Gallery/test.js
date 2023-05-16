// Création d'une date sans donner d'argument au constructeur
var currentDate = new Date();
console.log(currentDate);

// Création d'une date avec passage d'arguments au constructeur
var startDate = new Date(2020, 09, 1, 8, 00, 00);
console.log(startDate);

// Création d'une date avec passage d'un timestamp au constructeur
var startDate = new Date(1601539200000);
console.log(startDate);

// Création d'une date avec passage d'une chaine au constructeur
var startDate = new Date("October 01 2020 08:00");
console.log(startDate);