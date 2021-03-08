//chiedo all'utente di inserire una parola
var parola = prompt('Scrivi una parola');

document.getElementById('risultato').innerHTML = palindrome(parola);

//creo funzione
function palindrome (word){
  if(word.split("").reverse().join("") === word) {
     return ('La parola è palindroma');
  } else {
    return ('La parola non è palindroma');
  }

}
