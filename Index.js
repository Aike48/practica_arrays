let arr = new Array ("Aguacate", "Gato", "Conejo", "pelusa", "josé", 4, 8, 3);

let numeros = Array.from({length:10},(_, index) => index + 1)


let texto = "A la vibora vibora de la mar";
let arrayTexto = texto.split(' ');
console.log(arrayTexto);

let arrayDuplicados = [1, 2, 2, 3, 3, 4, 5, 5];
let setUnico = new Set(arrayDuplicados);
let arrayUnico = [...setUnico];
console.log(arrayUnico); 

function generarValores(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
      array.push(i * 2); 
    }
    return array;
  }
  
  const arrayDinamico = generarValores(5);
  console.log(arrayDinamico); 
  
console.log (arr.length);

arr.push('gato');
console.log(arr);

console.log(arr.pop());

console.log(arr.unshift(4, "cactus"));
console.log(arr);

console.log(arr.shift()); 
console.log(arr);

console.log(arr.slice(1, 4));