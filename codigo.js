
//Bienvenida al cliente

let nombre = prompt("Ingresa tu nombre")
alert("Bienvenido/a " + nombre)

//Peso del cliente para recomendacion de raqueta

let pesoPersona = parseInt(prompt("Ingresa tu peso en kilogramos para recibir una recomendación"))

if (pesoPersona < 65) {
    alert(nombre + " ,te recomendamos una raqueta de peso liviano")
}

else if (pesoPersona > 65 && pesoPersona <= 85) {
    alert(nombre + " ,te recomendamos una raqueta de peso mediano")
}


else {
    alert(nombre + " ,te recomendamos una raqueta pesada")
};

//Le avisamos al cliente que hay stock disponible

function bucle(){
    
    for (let index = 0; index < 5; index++) {
        if(index= 0){
            return "No hay raquetas en stock"
        }
        else{
           return "Hay stock de raquetas"
        }
        
    }
}

alert(bucle())

//Precios de raquetas con IVA, pagando en efectivo o tarjeta

const sumaRaquetas = (raqLiv = 0, raqMed = 0, raqPes = 0) => raqLiv + raqMed + raqPes


let raqLiv = Number(prompt("Ingresa precio de la raqueta liviana"))
let raqMed = Number(prompt("Ingresa precio de la raqueta mediana"))
let raqPes = Number(prompt("Ingresa el precio de la raqueta pesada"))

let raquetasSinIva = sumaRaquetas(raqLiv, raqMed, raqPes)

alert("El precio bruto de las raquetas es de " + raquetasSinIva + " pesos");

let raquetasConIva = raquetasSinIva * 1.21

alert("El valor de las raquetas + IVA es igual a " + raquetasConIva + " pesos abonando con tarjeta");

//Funcion descuento

let descuento = raquetasSinIva * 0.1

function descuentoPrecio (raquetasConIva, descuento) {

    return raquetasConIva - descuento 
}

alert("El precio pagando en efectivo es de " + descuentoPrecio(raquetasConIva, descuento) + " pesos")


