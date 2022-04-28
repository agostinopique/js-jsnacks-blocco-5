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



// 2. Crea una funzione che somma tutti i pesi di ogni oggetto;
scale();

function scale(){
    let totalWeight = 0;
    
    for(let zucchina of zucchine) {
        totalWeight += zucchina.grammi;
        console.log(zucchina.grammi);
        console.log(zucchina.grammi)
        // console.log(totalWeight);
    }
    console.log(totalWeight);
}
