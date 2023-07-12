let js = "amazing";
console.log(40 + 19 + 19 + 5 + 234 / 23);

let country = "Peru";
let continent = "South America";
let population = 30000000;

console.log(country, continent, population);
console.table([country, continent, population]);

console.time("Tiempo de ejecución");
console.group("Grupo 1");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.groupEnd();

console.groupCollapsed("Grupo 2");
console.log("Mensaje 3");
console.log("Mensaje 4");
console.groupEnd();
console.timeEnd("Tiempo de ejecución");

let height = NaN;

!!height ? console.log("I'm true") : console.log("I'm false");
