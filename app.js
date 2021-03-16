

// Scelta del nome
let nomeGiocatore = window.prompt('Ciao, inserisci il tuo nome: ');
document.getElementById('titolo').innerHTML = 'Benvenuto ' + nomeGiocatore;


// variabili
let string = ['carta', 'forbici', 'sasso'];

var randomString = Math.floor(Math.random() * string.length);

let sceltaComputer = string[randomString];

var sceltaUtente;


// funzioni
function cliccatoCarta() {
   sceltaUtente = 'carta';
}

function cliccatoForbici() {
   sceltaUtente = 'forbici';
}

function cliccatoSasso() {
   sceltaUtente = 'sasso';
}

function verdetto() {
   document.getElementById('carta').style.display = 'none';
   document.getElementById('forbici').style.display = 'none';
   document.getElementById('sasso').style.display = 'none';
   document.getElementById('pulsante').style.display = 'none';

   if (sceltaUtente == 'carta' && sceltaComputer ==  'forbici') {
        document.getElementById('vero').innerHTML = 'HAI PERSO';
   }
   else if (sceltaUtente == 'carta' && sceltaComputer ==  'sasso') {
        document.getElementById('vero').innerHTML = 'HAI VINTO';
   }
   else if (sceltaUtente == 'carta' && sceltaComputer ==  'carta') {
        document.getElementById('vero').innerHTML = 'PAREGGIO';
   }
   else if (sceltaUtente == 'forbici' && sceltaComputer ==  'carta') {
        document.getElementById('vero').innerHTML = 'HAI VINTO';
   }
   else if (sceltaUtente == 'forbici' && sceltaComputer ==  'forbici') {
        document.getElementById('vero').innerHTML = 'PAREGGIO';
   }
   else if (sceltaUtente == 'forbici' && sceltaComputer ==  'sasso') {
        document.getElementById('vero').innerHTML = 'HAI PERSO';
   }
   else if (sceltaUtente == 'sasso' && sceltaComputer ==  'carta') {
        document.getElementById('vero').innerHTML = 'HAI PERSO';
   }
   else if (sceltaUtente == 'sasso' && sceltaComputer ==  'forbici') {
        document.getElementById('vero').innerHTML = 'HAI VINTO';
   }
   else if (sceltaUtente == 'sasso' && sceltaComputer ==  'sasso') {
        document.getElementById('vero').innerHTML = 'PAREGGIO';
   }

    document.getElementById('informazioni').innerHTML = 'Il computer ha scelto ' + sceltaComputer + '. Tu hai scelto ' + sceltaUtente;
 }
