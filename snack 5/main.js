//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente;

//chiedo un numero all'utente;
var numero_utente = parseInt(prompt('inserisci un numero'));
console.log('numero scelto dall\'utente: ' + numero_utente);

var risultati_in_line = [];
//calcolo i cubi dei numeri fino a quello chiesto dall\'utente;
for (var i = 1; i <= numero_utente; i++) {
// calcolo della potenza al cubo
    var cubo = i * i * i
    console.log('cubo di: ' + i);
    console.log(cubo);
    risultati_in_line.push(cubo);
}
    console.log(risultati_in_line);
