// Lista de juegos, array con objetos
let listaJuegos = [
        { id: 1, nombre: "CounterStrike Global Offensive", precio: 2000, stock: 10, plataforma: "pc", imgUrl: "img/counterstrikeglobaloffensive.jpg" },
        { id: 2, nombre: "Alan Walker", precio: 500, stock: 10, plataforma: "pc", imgUrl: "img/alanWake.jpg" },
        { id: 3, nombre: "Outlast", precio: 280, stock: 10, plataforma: "pc", imgUrl: "img/outlast.jpg" },
        { id: 4, nombre: "Doom", precio: 1230, stock: 10, plataforma: "pc", imgUrl: "img/doom.jpeg" },
        { id: 5, nombre: "The Evil Within", precio: 600, stock: 10, plataforma: "pc", imgUrl: "img/TheEvilWithin.jpeg" },
        { id: 6, nombre: "Beyon Two Souls", precio: 4500, stock: 10, plataforma: "ps4", imgUrl: "img/BeyonTwoSoul.jpeg" },
        { id: 7, nombre: "Hack GU Last Recode", precio: 3000, stock: 10, plataforma: "ps4", imgUrl: "img/HackGuLastRecode.jpeg" },
        { id: 8, nombre: "The Last Of Us", precio: 1500, stock: 10, plataforma: "ps4", imgUrl: "img/TheLastOfUs.jpeg" },
        { id: 9, nombre: "The Last Of Us 2", precio: 5500, stock: 10, plataforma: "ps4", imgUrl: "img/TheLastOfUs2.jpg" },
        { id: 10, nombre: "Heavy Rain", precio: 2500, stock: 10, plataforma: "ps4", imgUrl: "img/HeavyRain.jpeg" },

    ]
    // creacion de nuestras tarjetas para mostrar
let contenedor = document.getElementById("contenedorJuegos")

for (const juegos of listaJuegos) {
    let tarjetaJuegos = document.createElement('div')
    tarjetaJuegos.className = 'productos'
    tarjetaJuegos.innerHTML = `
    <h2>${juegos.nombre}</h2>
    <h3>$${juegos.precio}</h3>
    <p> Stock disponible: ${juegos.stock}</p>
    <img src=${juegos.imgUrl}>
    <button>Comprar</button>
    `
    contenedor.append(tarjetaJuegos)
}


// boton de search para buscar juegos por PLATAFORMA (PC o PS4) por consola momentaneamente
let inputbuscar = document.getElementById('searchBarText')
let botonbuscar = document.getElementById('buttonSearch')

botonbuscar.onclick = () => {
    console.log(listaJuegos.filter(juegos => juegos.plataforma.includes(inputbuscar.value)))
}