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

// - Da lì parte un timer di 30 secondi

//isolo div con id timer
const timer = document.getElementById('timer')

//variabile da cui inserirò in html il numero del conto alla rovescia
let counter = 5

//decremento di interval per fare un countdown
timer.innerText = counter--;

//funzione per eseguire e bloccare il countdown
const clock = setInterval(() => {

    //quando il countdown arriva a 0
    if (counter == 0) {

        //blocco la funzione
        clearInterval(clock);

        //scompare il couter
        timer.innerText = ''

        //scompare il messaggio di memorizzazione dei numeri
        document.querySelector('div').style.display = 'none'

        //scompaioni i numeri e compaiono gli input
        document.getElementById('random-numbers').style.display = 'none'
        document.getElementById('user-numbers').style.display = 'block'
    } else {
        timer.innerText = counter
    }

    counter--

}, 1000)










//creo un array per i numeri random che andrò a pushare una volta generati
const arrayRngNumbers = []

//Visualizzare in pagina 5 numeri casuali
//- creo 5 "p" in html   ->   FATTO
//- assegno a tutti la stessa classe   ->   FATTO
//- isolo gli elementi in una variabile
//- assegno ad ognuno un numero casuale con un ciclo for
//- stampo il numero generato dentro al tag html

const rngNumbers = document.getElementsByClassName('rng')

for (let i = 0; i < rngNumbers.length; i++) {
    rngNumbers[i].innerHTML = Math.floor(Math.random() * 20);
    arrayRngNumbers.push(rngNumbers[i].innerHTML)

}

console.log(arrayRngNumbers);




//- creo un array per i numeri inseriti dall'utente che pusherò al momento del click del bottone
const arrayUserNumbers = []

// isolo tutti gli input selezionando per tag in una variabile
const userNumbers = document.getElementsByTagName('input')






// - creo un bottone in html per fare un submit dei valori inseriti   ->   FATTO



//isolo il form selezionandolo tramite ID per andare ad aggiungere poi gli eventi al submit
const form = document.getElementById('user-numbers')



// FORM - eventi al click del bottone -> "submit"
form.addEventListener('submit', (event) => {

    //reset comportamento di button
    event.preventDefault();

    //ciclo per pushare nel corrispettivo array dei numeri inseriti dall'utente
    for (let i = 0; i < userNumbers.length; i++) {
        arrayUserNumbers.push(userNumbers[i].value)
    }
    console.log(arrayUserNumbers);



    //  - ciclo per vedere se l'array dei numeri casuali include i numeri inseriti dall'utente
    for (let i = 0; i < arrayUserNumbers.length; i++) {

        //se array num. casuali include...
        if (arrayRngNumbers.includes(arrayUserNumbers[i])) {
            //allora loggo in console un mex di conferma
            //allora pusho il numero nell'array risultato
            console.log('si');
            arrayResult.push(arrayUserNumbers[i])
        }

    }

    console.log(arrayResult);

    //faccio ricomparire i numeri generati randomicamente
    document.getElementById('random-numbers').style.display = 'block'

    //il software dice quanti e quali dei numeri da indovinare sono stati individuati
    result.innerText = `Hai indovinato ${arrayResult.length} numeri: ${arrayResult}`


})



// isolo div con id result in una variabile
const result = document.getElementById('result')

// array vuoto dove verranno pushati SOLO i numeri in comune tra i random e gli inseriti
const arrayResult = []


