//chiedo all'utente di scegliere pari o dispari e lo salvo in variabile
var pariOdispari = prompt('Scegli p=pari o d=dispari');

// stampo nel Dom la risposta nell'elemento con id pari-dispari
if (pariOdispari=='p') {
  document.getElementById('pari-dispari').innerHTML = 'Hai scelto pari';
} else if (pariOdispari=='d'){
  document.getElementById('pari-dispari').innerHTML = 'Hai scelto dispari';
} else {
  document.getElementById('pari-dispari').innerHTML = 'Non mi hai dato un dato corretto!';

}

//chiedo all'utente di inserire un numero da 1 a 5
var numeroUtente = parseInt(prompt('Dimmi un numero  da 1 a 5'));

// stampo nel Dom la risposta nell'elemento con id numero_utente
document.getElementById('numero_utente').innerHTML = 'Il tuo numero è: ' + numeroUtente;

//genero numero random da 1 a 5 per computer tramite la funzione
var numeroComputer = randomNumber(1, 5);

// stampo nel Dom la risposta nell'elemento con id numero_computer
document.getElementById('numero_computer').innerHTML = 'Il numero del computer è: ' + numeroComputer;

//stabilisco se la somma è pari o dispari con funzione
var pd = evenOdd(numeroUtente, numeroComputer);

//stampo se la somma dei numeri è pari o dispari nell'elemento con id risultato_somma
if (pd == 'p') {
  document.getElementById('risultato_somma').innerHTML = 'La somma dei numeri è pari';
} else {
  document.getElementById('risultato_somma').innerHTML = 'La somma dei numeri è dispari';
}

//dichiaro chi ha vinto stampando il risultato nel Dom nell'elemento con id risultato
if (pariOdispari==pd) {
  document.getElementById('risultato').innerHTML = 'Hai vinto';
} else {
  document.getElementById('risultato').innerHTML = 'Hai perso';
}

//FUNCTIONS

//creo una funzione per generare un numero random
function randomNumber(min, max) {
  var numero = Math.floor(Math.random() * (max - min + 1) + min);
  return numero;
}

//creo una funzione per stabilire se la somma di due numeri è pari o dispari
function evenOdd(num1, num2) {
  if ((num1 + num2) % 2 == 0 ) {
    return 'p';//pari
  } else {
    return 'd';//dispari
  }
}
