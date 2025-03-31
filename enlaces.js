

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

function mostrarArticulo() {
    const articulo = bd[id];
    if (articulo) {
        const contenido = 
        `<div class="noticia">
            <div class="noticia-imagen">
                <img src="${articulo.imagen}" alt="noticia">
            </div>
            <div class="noticia-contenido">
                <h2>${articulo.titulo}</h2>
                <p>${articulo.descripcion}</p>
            </div>
        </div>`;
        document.querySelector("#news").innerHTML = contenido;
    }
}
    mostrarArticulo();
