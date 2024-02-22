// OBJECT DESTRUCTURING  - use case more readable code

// a) object as parameter

// b) return object (används "jämt" i  Javascript ES6 moduler )
//      dvs vad 17 menas med import {theDay,importantList} from './christmas/ChristmasList.js'  osv osv
//      samt i NodeJS (require)  visas inte här


// function importantList(iWant, iDontWant, iNeed) {
//     return `${iWant} is what I want!  Dont give me: ${iDontWant} . Sadly I need  ${iNeed}`;
// }

// function importantList(o) {
//     //.....
//     //
//     return `${o.iWant} is what I want!  Dont give me: ${o.iDontWant} . Sadly I need  ${o.iNeed}`;
// }





import {importantList,getBestPlayer}  from './christmas/christmasListThings.js'


console.log('Tjena')


//const a = importantList()
const a = importantList({
    iWant:'PS5',
    iDontWant:'Kläder',
    iNeed:'Sockor',
})
console.log(a)

// OBJECT DESTRUCTURING 
// objekt med properties ->  separata variabler  SAME NAMN
// let o = {
//     iWant:'PS5',
//     iDontWant:'Kläder',
//     iNeed:'Sockor',
// };

// const iWant = o.iWant
// const iDontWant = o.iDontWant

// const {iWant,iDontWant} = o

// console.log(iWant) // ps5
// console.log(iDontWant)

//const a = importantList('PS5', 'Kläder', 'Sockor')



// OBJECT DESTRUCTURING 
// objekt med properties ->  separata variabler  SAME NAMN
// require
// consty {theDay,importantList} = require('./christmas/ChristmasList.js') 
const {id,jersey} = getBestPlayer()

//const player = getBestPlayer()
// const id = player.id
// const jersey = player.jersey
console.log(id,jersey)
