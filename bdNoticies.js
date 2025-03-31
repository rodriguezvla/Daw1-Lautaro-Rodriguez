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
    for (let i = 0; i < bd.length; i++) {
        noticias += 
        `<div class="noticia">
        <div class="noticia-imagen">
            <img src="${bd[i].imagen}" alt="noticia">
        </div>
        <div class="noticia-contenido">
            <h2>${bd[i].titulo}</h2>
            <p>${bd[i].descripcion}</p>
            </div>
        </div>`;
    }
    document.querySelector("#news").innerHTML = noticias;
}

mostrarNoticias();

const imagenesArticulos = document.querySelectorAll(".noticia-imagen img");

for(let i = 0; i < bd.length; i++) {

    imagenesArticulos[i].addEventListener("click", function() {
    window.location.href = `detallNoticia.html?id=${i}`;

});
};
