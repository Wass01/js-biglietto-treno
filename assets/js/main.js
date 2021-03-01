// creazione variabili necessarie
var eta = prompt("Inserisci la tua età:");
var chilometri = prompt("Inserisci i chilometri che vuoi fare:");
var prezzoBiglietto;

console.log(parseInt(eta));
console.log(parseFloat(chilometri));

// condizione per il calcolo
if(eta < 18){
  prezzoBiglietto = (chilometri * 0.21) - (chilometri * 0.21) * 0.2;
} else if(eta > 65){
  prezzoBiglietto = (chilometri * 0.21) - (chilometri * 0.21) * 0.4;
} else {
  prezzoBiglietto = (chilometri * 0.21);
}

console.log("Il prezzo del biglietto è: " + prezzoBiglietto + "€");
