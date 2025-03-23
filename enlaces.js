
const boton = document.querySelector(".contenedor-articulos .boton-explorar");

boton.addEventListener("click",function(e){
e.preventDefault(); window.location.href = "news.html";})

const imagenesArticulos = document.querySelectorAll(".tarjeta-articulo img");

imagenesArticulos.forEach(function(imagen, indice) {
    imagen.addEventListener("click", function() {
        window.location.href = `detallNoticia.html?id=${indice}`;
    });
});


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


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

if (id == 0 || id == 1 || id == 2) {
    const contenedorNoticias = document.querySelector(".contenedor-noticias");
    contenedorNoticias.innerHTML = `
        <div class="noticia">
            <div class="noticia-imagen">
                <img src="${bd[id].imagen}" alt="noticia">
            </div>
            <div class="noticia-contenido">
                <h2>${bd[id].titulo}</h2>
                <p>${bd[id].descripcion}</p>
            </div>
        </div>
    `;
}