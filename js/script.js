// Autenticazione email
// var arr = [ 'demo@mail.com', 'my@mail.com', 'your@mail.com'];
//
// var enter = prompt('enter your email');
//
// for (var i = 0; i < arr.length; i++){
//
//   if (enter == arr[i]){
//     var result = 'Autenticazione riuscita';
//     break;
//   } else{
//     var result = 'Autenticazione non riuscita';
//   }
// }
//
// document.getElementById('result').innerHTML =  result;

// Gioco dei dadi
var min = 1;
var max = 6 - min;

var rndUser = Math.floor(Math.random() * max) + min;
console.log('rndUser', rndUser);

var rndCom = Math.floor(Math.random() * max) + min;
console.log('rndCom', rndCom);

if (rndUser > rndCom){
    result="Hai vinto!"
} else if (rndUser < rndCom){
    result="Hai perso..."
} else{
    result="Hai pareggiato."
}

document.getElementById('result').innerHTML =  result;
document.getElementById('yourResult').innerHTML =  'Il tuo punteggio: ' + rndUser;
document.getElementById('comResult').innerHTML =  'Il punteggio del tuo avversario: ' + rndCom;