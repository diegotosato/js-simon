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

//     - assegno a tutti un id    ->   FATTO

//     - isolo gli elementi in una costante

const firstRngNumber = document.getElementById('first-rng-number')
const secondRngNumber = document.getElementById('second-rng-number')
const thirdRngNumber = document.getElementById('third-rng-number')
const fourthRngNumber = document.getElementById('fourth-rng-number')
const fifthRngNumber = document.getElementById('fifth-rng-number')

// con funzione di generare un numero casuale
//     - stampo il numero generato dentro al tag html

firstRngNumber.innerText = Math.floor(Math.random() * 20);
secondRngNumber.innerText = Math.floor(Math.random() * 20);
thirdRngNumber.innerText = Math.floor(Math.random() * 20);
fourthRngNumber.innerText = Math.floor(Math.random() * 20);
fifthRngNumber.innerText = Math.floor(Math.random() * 20);






// console.log(firstRngNumber, secondRngNumber, thirdRngNumber, fourthRngNumber, fifthRngNumber);
