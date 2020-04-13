// If, Else, else if

a = true; // Cambiar para ambos casos

if (a) {
    console.log("Hola");
} else {
    console.log("Soy falso");
}


// ---

var edad = 18;

if (edad === 18) {
  console.log('Puede votar');
} else if(edad > 18 ) {
  console.log('Puedes votar nuevamente');
} else {
  console.log('Lo siento, no puedes votar');
}


// Ternaria
condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? 'Si soy un uno' : 'No, no soy uno';