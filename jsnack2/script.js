// 2. In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const guestList = ['Alessandra', 'Luca', 'Martina', 'Matteo', 'Giorgia', 'Andrea', 'Federica', 'Giovanni', 'Sara', 'Stefano']
console.log (guestList)

const yourName = prompt(String("Inserisci il tuo nome: ⬇"))

let isNameInList = false

for (i = 0; i < guestList.length; i++) {
    if (guestList[i] === yourName) {
        isNameInList = true
    } 
}

if (isNameInList) {
    alert("✔ Sei stato invitato! Puoi partecipare alla festa! 🎉")
} else {
    alert("❌ Non sei stato invitato! Non puoi partecipare alla festa, mi dispiace! 🙅🏻‍♂️")
}

