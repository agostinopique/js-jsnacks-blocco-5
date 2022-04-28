/* 
    Jsnack 2
    Crea 10 oggetti che rappresentano una zucchina.
    Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine. 

    1. Crea un array con 10 oggetti con relative proprietá;
    2. Crea una funzione che sorta gli oggetti in base alla proprietá del peso e pusharli in due array separati;
    3. Crea una funzione che somma il peso di ogni array;

*/

const zucchine = [
    {
        varieta: 'zucchina nera',
        peso: '120 grammi',
        lunghezza: '20cm'
    },
    {
        varieta: 'zucchina romanesca',
        peso: '60 grammi',
        lunghezza: '15cm'
    },
    {
        varieta: 'zucchina fiorentino',
        peso: '90 grammi',
        lunghezza: '25cm'
    },
    {
        varieta: 'zucchina napoletano',
        peso: '130 grammi',
        lunghezza: '20cm'
    },
    {
        varieta: 'zucchina tonde',
        peso: '180 grammi',
        lunghezza: '15cm'
    },
    {
        varieta: 'zucchina trombetta',
        peso: '70 grammi',
        lunghezza: '17cm'
    },
    {
        varieta: 'zucchina patisson',
        peso: '100 grammi',
        lunghezza: '23cm'
    },
    {
        varieta: 'zucchina giallo',
        peso: '60 grammi',
        lunghezza: '15cm'
    },
    {
        varieta: 'zucchina friulano',
        peso: '80 grammi',
        lunghezza: '20cm'
    },
    {
        varieta: 'zucchina crookneck',
        peso: '120 grammi',
        lunghezza: '24cm'
    }
];

const short = [];
const long = [];

sortLength();

function sortLength(){
    let longShort;
    for (let x of zucchine) {
        // lightHeavy = (parseInt(x.lunghezza) > 15) ? console.log('lungo', x) : console.log('corto', x);
        longShort = (parseInt(x.lunghezza) > 15) ? long.push(x) : short.push(x);
    }

    
}

console.log(short)
console.log(long)

totalWeight(short);
totalWeight(long);


/**
 * 
 * @param {array} array 
 */
function totalWeight(array){
    let weight = 0;
    
    for(let x of array){
        weight += parseInt(x.peso);
    }
    return weight;
}


console.log(totalWeight(short)) 
console.log(totalWeight(long)) 