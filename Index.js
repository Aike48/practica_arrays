let arr = new Array ("Aguacate", "Gato", "Conejo", "pelusa", "josé", 4, 8, 3);

let numeros = Array.from({length:10},(_, index) => index + 1)


let texto = "A la vibora vibora de la mar";
let arrayTexto = texto.split(' ');
console.log(arrayTexto);

let arrayDuplicados = [1, 2, 2, 3, 3, 4, 5, 5];
let setUnico = new Set(arrayDuplicados);
let arrayUnico = [...setUnico];
console.log(arrayUnico); 