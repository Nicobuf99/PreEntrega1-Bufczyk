
//Bienvenida al cliente

let nombre = prompt("Ingresa tu nombre")
alert("Bienvenido/a " + nombre)
//Regristramos con arrays la variedad de productos

const raqueta = [
    {id: 01, modelo: "Babolat Pure Strike", precio: 80000}, 
    {id: 02, modelo: "Babolat Pure Drive", precio: 75000},
    {id: 03, modelo: "Yonex VCORE", precio: 85000}, 
    {id: 04, modelo: "Wilson Pro Staff", precio: 95000}, 
    {id: 05, modelo: "Head Radical", precio: 82000}, 
]

const rolloDeCuerda = [
    {id: 06, modelo: "Kirschbaum Pro Line 2", precio: 20000},
    {id: 07, modelo: "Kirschbaum Super Smash", precio: 17000},
    {id: 08, modelo: "Babolat Rpm Blast", precio: 25000},
]

const rolloDeCubregrip = [
    {id: 09, modelo: "Wilson Por Overgrip", precio: 30000},
    {id: 10, modelo: "Tourna Pro", precio: 22000},
    {id: 11, modelo: "Babolat Pro Tour Overgrip", precio: 25000},
];

//Con una funcion de orden superior muestro los precios en consola + IVA de todos los productos en un array concatenado

const todosLosProductos = raqueta.concat(rolloDeCuerda,rolloDeCubregrip);

const todosLosProductosMasIva = todosLosProductos.map((element)=>{
    return{
        id: element.id,
        modelo: element.modelo, 
        precio: element.precio * 1.21,
    }
})

console.log(todosLosProductosMasIva);

//Muestro en consola precio de las raquetas segun presupuesto de $80000 con una funcion que recorre el array de raquetas

function precioMenorQue(element) {
    return element.precio <= 80000;
  }
let menorPrecio = raqueta.filter(precioMenorQue);

console.log(menorPrecio);
 

//Le preguntamos al cliente que esta buscando

for (i= 0; i < 5; i++) {

    let pregunta = prompt("Que producto estas buscando? Raqueta/s, Rollo de cuerda o cubregrip?").toLowerCase();

    if (pregunta === "raquetas" || pregunta === "raqueta") {
        raqueta.forEach(element => {
            console.log(element)
            alert("Tenemos " + element.modelo + " en stock y tiene un precio de $ " + element.precio + " sin IVA")
        });
        break;
    } 
    
    else if (pregunta === "rollo de cuerda" || pregunta === "rollo de cuerdas") {
        rolloDeCuerda.forEach(element => {
            console.log(element)
            alert("Tenemos " + element.modelo + " en stock y tiene un precio de $ " + element.precio + " sin IVA")
        });
        break;
    }
    
    else if (pregunta === "cubregrip" || pregunta === "cubregrips") {
        rolloDeCubregrip.forEach(element => {
            console.log(element)
            alert("Tenemos " + element.modelo + " en stock y tiene un precio de $ " + element.precio + " sin IVA")
        });
        break;
    }

    else {
        alert("No ingresaste un producto válido, por favor escriba correctamente el producto que desea");
    }
    ;

}

//Pido al cliente que pase el precio de los productos que desea llevar para luego calcular el valor final con tarjeta o efectivo


const sumaProductos = (raque = 0, cuerdas = 0, cubres = 0) => raque + cuerdas + cubres


let raque = Number(prompt("Ingresa precio de la raqueta que queres"))
let cuerdas = Number(prompt("Ingresa precio del rollo de cuerdas que queres"))
let cubres = Number(prompt("Ingresa el precio los cubregrips que queres"))

let productosSinIva = sumaProductos(raque, cuerdas, cubres)

alert("El precio bruto de los productos que desea llevar es de $ " + productosSinIva + " .");

let productosConIva = productosSinIva * 1.21

alert("El valor de los productos + IVA es igual a $ " + productosConIva + " abonando con tarjeta");

//Funcion descuento

let descuento = productosSinIva * 0.1

function descuentoPrecio (productosConIva, descuento) {

    return productosConIva - descuento 
}

alert("El precio final pagando en efectivo es de $ " + descuentoPrecio(productosConIva,descuento) + " .")
;


