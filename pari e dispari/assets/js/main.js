//chiedo all'utente di scegliere pari o dispari
var pariOdispari = prompt('p=pari, d= dispari');
console.log(pariOdispari);

//chiedo all'utente di inserire un numero da 1 a 5
var numeroUtente = parseInt(prompt('Dimmi un numero  da 1 a 5'));
console.log(numeroUtente);

//genero numero random da 1 a 5 per computer
var numeroComputer = randomNumber(1, 5);
console.log(numeroComputer);


//stabilisco se la somma è pari o dispari con funzione
var pd = evenOdd(numeroUtente, numeroComputer);
console.log(pd);

//dichiaro chi ha vinto
if (pariOdispari==pd) {
  console.log('hai vinto');
} else {
  console.log('hai perso');
}
//FUNCTIONS

//numero random
function randomNumber(min, max) {
  var numero = Math.floor(Math.random() * (max - min + 1) + min);
  return numero;
}

//pari o dispari
function evenOdd(num1, num2) {
  if ((num1 + num2) % 2 == 0 ) {
    return 'p';
  } else {
    return 'd';
  }
}
