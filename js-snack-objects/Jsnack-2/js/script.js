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
        grammi: 120,
        centimetri: 20
    },
    {
        varieta: 'zucchina romanesca',
        grammi: 60,
        centimetri: 15
    },
    {
        varieta: 'zucchina fiorentino',
        grammi: 90,
        centimetri: 25
    },
    {
        varieta: 'zucchina napoletano',
        grammi: 130,
        centimetri: 20
    },
    {
        varieta: 'zucchina tonde',
        grammi: 180,
        centimetri: 15
    },
    {
        varieta: 'zucchina trombetta',
        grammi: 70,
        centimetri: 17
    },
    {
        varieta: 'zucchina patisson',
        grammi: 100,
        centimetri: 23
    },
    {
        varieta: 'zucchina giallo',
        grammi: 60,
        centimetri: 15
    },
    {
        varieta: 'zucchina friulano',
        grammi: 80,
        centimetri: 20
    },
    {
        varieta: 'zucchina crookneck',
        grammi: 120,
        centimetri: 24
    }
];

const short = [];
const long = [];

sortLength();

function sortLength(){
    for (let zucchina of zucchine) {
        //(x.lunghezza > 15) ? console.log('lungo', x) : console.log('corto', x);
        zucchina.centimetri > 15 ? long.push(zucchina) : short.push(zucchina);
    }

    
}

console.log(short)
console.log(long)

totalWeight(short);
totalWeight(long);


/**
 * somma i pesi delle zucchine presenti nei due array
 * @param {array} array 
 */
function totalWeight(array){
    let weight = 0;
    
    for(let element of array){
        weight += element.grammi;
    }
    return weight;
}


console.log(totalWeight(short)) 
console.log(totalWeight(long)) 