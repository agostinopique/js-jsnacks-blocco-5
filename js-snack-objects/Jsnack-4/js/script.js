/* 
    Jsnack 4
    Crea un array di oggetti, in cui ogni oggetto descrive una bici da corsa con le seguenti proprietà: nome e peso.
    Stampa a schermo la bici con peso minore utilizzando destructuring e template literal.

    1. Crea un array di oggetti con varie bici e le relative proprietà di peso e nome;
    2. Selezionare i vari oggetti in base al peso utilizzando la destrutturazione ;
    3. Stampare l'ogetto più leggere in pagina utilizzando il template literal; 
*/

const bicicles = [
    {
        name: 'mountainbike',
        kg: 25
    },
    {
        name: 'trailbike',
        kg: 24
    },
    {
        name: 'streetbike',
        kg: 9
    },
    {
        name: 'racebike',
        kg: 7
    }
]; 


// let pesoMinore;

// for(let bike of bicicles) {
//     const {kg} = bike;


//     console.log(kg);

//     if(pesoMinore === undefined || pesoMinore > kg){
//         pesoMinore = kg;
//     }

//     if(bike.kg <= kg){
//         print(bike);
//     }
    
// }

// console.log('il peso minore è:', pesoMinore);

// function print(array){

//     document.querySelector('.container').innerHTML = `<h1>La bici più leggera è la ${array.name}, con un peso totale di ${array.kg}`

// }


// CORREZZIONE


let weight = bicicles[0].kg;

let lighterBike = {};

for(let bike of bicicles){
    const {kg} = bike;
    console.log(kg);


    if(weight > bike.kg){
        weight = bike.kg;
        lighterBike = bike
    }

}

printBike(lighterBike)

console.log('Peso minore', weight)

function printBike(bike){
    const {name, kg} = bike
    document.querySelector('.container').innerHTML = `<h1>La bici col peso minore é ${name} con un peso di ${kg}!</h1>`

}

