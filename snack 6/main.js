//Stampa le potenze di 2 fino a 1000
var potenzadi2 = []

//creo un ciclo partenda da 2 fino a 1000
//parto da 2 che verra moltiplicato per 2 (anziche aumentato di 1) quindi il risultato ripetera il ciclo venendo moltiplicato per due fina a che nn superera 1000
for (var i = 1; i <= 1000; i = i * 2) {
     console.log(i);
     potenzadi2.push(i);
 }
console.log(potenzadi2);
