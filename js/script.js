// Autenticazione email
var arr = [ 'demo@mail.com', 'my@mail.com', 'your@mail.com'];

var enter = prompt('enter your email');

var result = 'Autenticazione fallita';

for (var i = 0; i < arr.length; i++){

  if (enter == arr[i]){
    result = 'Autenticazione riuscita';
  }
}

document.getElementById('result').innerHTML =  result;


// Gioco dei dadi
// var min = 1;
// var max = 6;
//
// var rndUser = Math.floor(Math.random() * max) + min;
// var rndCom = Math.floor(Math.random() * max) + min;
//
// var result;
//
// if (rndUser > rndCom){
//    result="Hai vinto!";
// } else if (rndUser < rndCom){
//    result="Hai perso...";
// } else{
//    result="Hai pareggiato.";
// }
//
// document.getElementById('result').innerHTML =  result;
// document.getElementById('yourResult').innerHTML =  'Il tuo punteggio: ' + rndUser;
// document.getElementById('comResult').innerHTML =  'Il punteggio del tuo avversario: ' + rndCom;
