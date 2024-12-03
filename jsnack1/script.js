// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore

const num1 = Number(prompt("Inserisci il primo numero"))
const num2 = Number(prompt("Inserisci il secondo numero"))

if (num1 > num2) {
    alert (`Il primo numero inserito è maggiore del secondo`)
} else {
    alert ("Il secondo numero è maggiore del primo")
}