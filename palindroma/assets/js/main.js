//chiedo all'utente di inserire una parola
var parola = prompt('Scrivi una parola');

//stampo il risultato nel DOM nell'elemento con id risultato
document.getElementById('risultato').innerHTML = palindrome(parola);

//creo funzione
//FUNCTIONS
function palindrome (word){
  if(word.split("").reverse().join("") === word) {
     return ('La parola è palindroma');
  } else {
    return ('La parola non è palindroma');
  }

}
