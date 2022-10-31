//console.log("La contraseña es javascript")
// Esta funciona hace una entrada de lo que nos encontraremos en esta

/*function mostrarMensaje () {
    let mensaje = "Hola bienvenido a mi proyecto, este es un mensaje que esta guardado en una funcion, las funciones son geniales ya que son un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida."
    alert(mensaje)

    let mensaje2= "En este proyecto primero deberemos ingresar una contraseña (que se encuentra en la consola) tendremos 3 intentos antes de fallar, seguido de esto, accederemos al programa el cual nos permite saber el precio real de los productos digitales, ya que para obtener estos debemos pagar impuestos, esto ya no es tan genial como las funciones =("
    alert(mensaje2)
    
}
mostrarMensaje()


// ingreso con contraseña con intentos (3)

//declaramos variables

let contraseña = "javascript"
let password 
let intentos = 0
let limiteIntentos = 3
let error= false
//mientras la variable password sea distinta y no haya error mientras queden intentos pedira la contraseña y sumara los intentos hasta 3.
while (password !== contraseña && !error ) {
    if(intentos < limiteIntentos){
        password=window.prompt("Ingrese la contraseña")
        intentos++
    } 
    else {
// si llega al maximo de intentos error pasara a ser true.
    error = true    
    } 
}
// si error pasa a true mostrara la alerta
if (error) {
    alert("Lo ha intentado demasiada veces")
} else {*/
// si la contraseña esta bien puesta mostrar esta alerta.    
    alert("Bienvenido")

// La idea es armar un conversor que muestre el precio final mas los impuestos al hacer una compra de servicios digitales en dolares.

// pedimos el precio sin iva del producto a comprar
let precioAConvertir = Number(prompt("Cual es el precio de su producto digital?"))
let residencia = Number(prompt("ingrese 1 si reside en CABA, ingrese 2 si reside en Provincia"))
// el total de los impuestos es de 76%
 
let impuestoIvaServicioDigital = 21
let impuestoAfip = 45
let impuestoPais = 8
let impuestoProvincialCaba = 2
let impuestosComprasTotal = 76

if (residencia == 1) {
    let precioConImpuesto = (precioAConvertir * impuestosComprasTotal) / 100
    let precioConImpuestoServiciosDigital = (precioAConvertir * impuestoIvaServicioDigital) / 100
    let precioConImpuestoAfip = (precioAConvertir * impuestoAfip) / 100
    let precioConImpuestoPais = (precioAConvertir * impuestoPais) / 100
    let precioConImpuestoProvincial = (precioAConvertir * impuestoProvincialCaba) / 100
    let precioFinal = (precioConImpuesto + precioAConvertir).toFixed(2)
    
    document.write("Precio de su servicio digital sin impuestos: AR$" + precioAConvertir + "</br>", "Su precio final es de AR$" + precioFinal + "</br>", "El total de los impuestos es de AR$" + precioConImpuesto + "</br>", "Precio de cada impuesto:" + "</br>", "Impuesto a Servicios Digitales (21%): AR$" + precioConImpuestoServiciosDigital + "</br>", "Impuesto AFIP (45%): AR$" + precioConImpuestoAfip + "</br>", "Impuesto PAIS (8%): AR$" + precioConImpuestoPais + "</br>", "impuesto provincial (2%): AR$" + precioConImpuestoProvincial)

} else if (residencia == 2) {

    let precioConImpuesto = (precioAConvertir * impuestosComprasTotal) / 100
    let precioConImpuestoServiciosDigital = (precioAConvertir * impuestoIvaServicioDigital) / 100
    let precioConImpuestoAfip = (precioAConvertir * impuestoAfip) / 100
    let precioConImpuestoPais = (precioAConvertir * impuestoPais) / 100
    let precioFinal = (precioConImpuesto + precioAConvertir).toFixed(2)
    
    document.write("Precio de su servicio digital sin impuestos: AR$" + precioAConvertir + "</br>", "Su precio final es de AR$" + precioFinal + "</br>", "El total de los impuestos es de AR$" + precioConImpuesto + "</br>", "Precio de cada impuesto:" + "</br>", "Impuesto a Servicios Digitales (21%): AR$" + precioConImpuestoServiciosDigital + "</br>", "Impuesto AFIP (45%): AR$" + precioConImpuestoAfip + "</br>", "Impuesto PAIS (8%): AR$" + precioConImpuestoPais + "</br>", "Impuesto provincial (0%): AR$" + 0 )
} else if ( residencia !== 1 || residencia !== 2){
    document.write("Error en el ingreso de datos")
}
