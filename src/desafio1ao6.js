const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printElements(array) {
  for(let i=0; i < array.length; i+=1) {
    console.log(array[i]);    
  }
}

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  let num = array[0];
  for(let i=0; i<array.length; i+=1) {
    if(array[i] > num) {
      num = array[i];
    }
  }
  return num;
}

// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'

function ignoreFirstAndLastElement(array) {
  if(array.length > 2) {
    for(let i=1; i<(array.length - 1); i+=1) {
      console.log(array[i]);      
    }
  } else {
    console.log('Tamanho do array inválido!');    
  }
}

// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.

function invertElementsArray(array) {
  let novoArray = [];
  let tamanho = array.length;
  for(let i=(tamanho - 1); i >= 0; i-=1) {
    novoArray[(tamanho - 1) - i] = array[i];
  }
  return novoArray;
}

// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {
  let array1 = string.split('');
  let array2 = array1.reverse();
  let array3 = array2.join('');
  return array3;
}

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {  
  const listaUnic = Array.from(new Set(array));
  return listaUnic;  
}

module.exports = {
  biggerNumber,
  printElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
