/* 
    Jsnack 3
    Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/
const stringa = 'ciao';


// Versione con funzione trandizionale


/*
revertText(stringa);
function revertText(str){
    return string.split('').reverse().join('');
}

console.log(revertText(stringa))
*/


// Versione con arrow function
const reverseText = (str) => str.split('').reverse().join('');

console.log(reverseText(stringa));