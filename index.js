/*
const boton = document.querySelector(".contenedor-articulos .boton-explorar");

boton.addEventListener("click",function(e){
e.preventDefault(); window.location.href = "news.html";})

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

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

function mostrarNoticias() {
    let noticias = "";
    
    for (let i = 0; i < 3; i++) {
        noticias += 
        `<div class="tarjeta-articulo" id="${i}}">
           <img src="${bd[i].imagen}" alt="noticia class="imagen-articulo">
          <h2>${bd[i].titulo}</h2>
            <p>${bd[i].descripcion}</p>
          <a href="detallNoticia.html?id=${i}" class="enlace-articulo">Read</a>
        </div>`;
    }
    document.querySelector(".grid-articulos").innerHTML = noticias;
}

mostrarNoticias();

const imagenesArticulos = document.querySelectorAll(".tarjeta-articulo img");

for(let i = 0; i < bd.length; i++) {

    imagenesArticulos[i].addEventListener("click", function() {
    window.location.href = `detallNoticia.html?id=${i}`;

});
};

*/