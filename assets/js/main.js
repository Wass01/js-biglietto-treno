// creazione variabili necessarie
var eta = parseInt (prompt("Inserisci la tua età:"));
var chilometri =parseFloat (prompt("Inserisci i chilometri che vuoi fare:"));
var prezzoBiglietto;

// creazione variabili per la data
var date = new Date();
var giorno = date.getDate();
var mese = date.getMonth() + 1;
var anno = date.getFullYear();


console.log(eta);
console.log(chilometri);
console.log(giorno);

// condizione per il calcolo
if(eta < 18){
  prezzoBiglietto = (chilometri * 0.21) - (chilometri * 0.21) * 0.2;
} else if(eta > 65){
  prezzoBiglietto = (chilometri * 0.21) - (chilometri * 0.21) * 0.4;
} else {
  prezzoBiglietto = (chilometri * 0.21);
}

console.log("Il prezzo del biglietto è: " + prezzoBiglietto + "€");
console.log("Hai effettuato la prenotazione il: " + giorno + "/" + mese + "/" + anno);
