/*

Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:

Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

*/



/*TASK
- Visualizzare in pagina 5 numeri casuali
    - creo 5 "p" in html
    - assegno a tutti la stessa classe
    - isolo gli elementi in una costante con funzione di generare un numero casuale
    - stampo il numero generato dentro al tag html


- Da lì parte un timer di 30 secondi
    - funzione di setTimeout(() => {}, 30000)


- I numeri scompaiono
    - numeri display none


- appaiono invece 5 input
    - creo un form
    - creo 5 input in html di tipo number
    - creo un bottone in html per fare un submit dei valori inseriti
    - add event per resettare comportamento standard del bottone


- il software dice quanti e quali dei numeri da indovinare sono stati individuati
    - creo un array per i numeri random che andrò a pushare una volta generati
    - creo un array per i numeri inseriti dall'utente che pusherò al momento del click del bottone
    - ciclo for per confrontare i numeri degli array
    - condizioni if/else
        - IF random[i] === input[i]
            - stampo numero
            - pusho in un array per i numeri indovinati
*/


//--------------------------------------------------------SVOLGIMENTO-----------------------------------------------------




// - Visualizzare in pagina 5 numeri casuali


//     - creo 5 "p" in html    ->    FATTO


//     - assegno a tutti la stessa classe    ->   FATTO




//     - creo un array per i numeri random che andrò a pushare una volta generati
const arrayRngNumbers = []




//     - isolo gli elementi in una costante
const rngNumbers = document.getElementsByClassName('rng')
// con funzione di generare un numero casuale
//     - stampo il numero generato dentro al tag html
for (let i = 0; i < rngNumbers.length; i++) {
    rngNumbers[i].innerHTML = Math.floor(Math.random() * 20);
    arrayRngNumbers.push(rngNumbers[i].innerHTML)

}

console.log(arrayRngNumbers);



// - creo un array per i numeri inseriti dall'utente che pusherò al momento del click del bottone
const userNumbers = document.getElementsByTagName('input')

const arrayUserNumbers = []


// - pusho in un array per i numeri indovinati
const result = document.getElementById('result')
const arrayResult = []



// - Da lì parte un timer di 30 secondi
//     - funzione di setTimeout(() => {}, 30000)
// setTimeout(() => {
//     // - I numeri scompaiono
//     // - numeri display none
//     document.getElementById('random-numbers').style.display = 'none'

//     // - appaiono invece 5 input
//     // - creo un form   ->   FATTO
//     // - creo 5 input in html di tipo number   ->   FATTO
//     document.getElementById('user-numbers').style.display = 'block'
// }, 3000)




// - creo un bottone in html per fare un submit dei valori inseriti   ->   FATTO
// - add event per resettare comportamento standard del bottone
const form = document.getElementById('user-numbers')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    for (let i = 0; i < userNumbers.length; i++) {
        arrayUserNumbers.push(userNumbers[i].value)
    }
    console.log(arrayUserNumbers);

    //  - ciclo for per confrontare i numeri degli array

    for (let i = 0; i < arrayUserNumbers.length; i++) {

        //- condizioni if/else
        //- IF random include input[i]
        if (arrayRngNumbers.includes(arrayUserNumbers[i])) {
            //- stampo numero
            //- pusho in un array per i numeri indovinati
            console.log('si');
            arrayResult.push(arrayUserNumbers[i])
        }

    }

    console.log(arrayResult);



    // - il software dice quanti e quali dei numeri da indovinare sono stati individuati
    result.innerText = `Hai indovinato ${arrayResult.length} numeri: ${arrayResult}`










})












