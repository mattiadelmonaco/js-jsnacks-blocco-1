// 1. L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore

const num1 = Number(prompt("Inserisci il primo numero ⬇"))
const num2 = Number(prompt("Inserisci il secondo numero ⬇"))

if (num1 > num2) {
    alert (`🔝 ${num1}: Il primo numero inserito è maggiore del secondo 🚀`)
} else if (num2 > num1) {
    alert (`🔝 ${num2}: Il secondo numero è maggiore del primo 🚀`)
} else {
    alert (`♊ ${num1} - ${num2}: I numeri sono uguali ♊`)
}

