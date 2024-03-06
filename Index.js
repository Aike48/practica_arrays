let arr = new Array ("Aguacate", "Gato", "Conejo", "pelusa", "josé", 4, 8, 3);

let numeros = Array.from({length:10},(_, index) => index + 1)


let texto = "A la vibora vibora de la mar";
let arrayTexto = texto.split(' ');
console.log(arrayTexto);

let ArrayCombinados = [...numeros, ...texto];
console.log(ArrayCombinados);