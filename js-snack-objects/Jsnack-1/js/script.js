/*
    Jsnack 1
    Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
    Calcola quanto pesano tutte le zucchine.

    1. Crea un array di 10 oggetti con proprietá equivalenti a varietá, peso e lunghezza;
    2. Crea una funzione che somma tutti i pesi di ogni oggetto;
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



// 2. Crea una funzione che somma tutti i pesi di ogni oggetto;
scale();

function scale(){
    let totalWeight = 0;
    
    for(let x of zucchine) {
        totalWeight += parseInt(x.peso);
        // console.log(totalWeight);
    }
    console.log(totalWeight);
}
