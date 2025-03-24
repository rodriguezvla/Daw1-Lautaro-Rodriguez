const boton = document.querySelector(".contenedor-articulos .boton-explorar");

boton.addEventListener("click",function(e){
e.preventDefault(); window.location.href = "news.html";})

const imagenesArticulos = document.querySelectorAll(".tarjeta-articulo img");

imagenesArticulos.forEach(function(imagen, indice) {
    imagen.addEventListener("click", function() {
        window.location.href = `detallNoticia.html?id=${indice}`;
    });
});

const bd = 
[
    {
    titulo: "Sed nec lorem scelerisque, viverra ex ut, interdum massa.",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat, maximus lorem eu, ultricies lorem. Sed blandit magna, nullam feugiat quam quis venenatis blandit.",
    imagen: "./imagenes/article 1.png",
    },

    {
    titulo: "Morbi ligula massa, posuere in finibus ut, varius ac ligula.",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat, maximus lorem eu, ultricies lorem. Sed blandit magna, nullam feugiat quam quis venenatis blandit.",
    imagen: "./imagenes/article 2.png",
    },

    {
        titulo: "Sed nec lorem scelerisque, viverra ex ut, interdum massa.",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat, maximus lorem eu, ultricies lorem. Sed blandit magna, nullam feugiat quam quis venenatis blandit.",
        imagen: "./imagenes/article 3.png",
    },

    {
        titulo: "Morbi ligula massa, posuere in finibus ut, varius ac ligula.",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat, maximus lorem eu, ultricies lorem. Sed blandit magna, nullam feugiat quam quis venenatis blandit.",
        imagen: "./imagenes/article 1.png",
    },

    {
        titulo: "Sed nec lorem scelerisque, viverra ex ut, interdum massa.",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat, maximus lorem eu, ultricies lorem. Sed blandit magna, nullam feugiat quam quis venenatis blandit.",
        imagen: "./imagenes/article 2.png",
    },
]

function mostrarNoticias() {
    let noticias = "";
    for (let i = 0; i <= 3; i++) {
        noticias += 
        `<div class="tarjeta-articulo">
        <div class="noticia-imagen">
            <img src="${bd[i+1].imagen}" alt="noticia class="imagen-articulo">
        </div>
        <div class="noticia-contenido">
            <h2>${bd[i+1].titulo}</h2>
            <p>${bd[i+1].descripcion}</p>
            </div>
        </div>`;
    }
    document.querySelector("#latest-articles . grid-articulos").innerHTML = noticias;
}

