// Scope | Alcance de una variable

//Scope global
var nombre = "Miguel";

function nombreCompleto() {
    // Scope local
    var apellido = "Torrealba";
    return nombre + " " + apellido;
}

// En este nivel se puede acceder a la variable "nombre"
// Pero desde el scope global, no podemos acceder a la variables "apellido", pero sí en la inversa