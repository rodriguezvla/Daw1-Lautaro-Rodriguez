import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

import { firebaseConfig } from "./config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Consulta base de datos
function cargarNoticias() {
  const urlParams = new URLSearchParams(window.location.search);
  //Obtenemos la id de la URL
  const id = urlParams.get("id");

  getDocs(collection(db, "notices")).then(function (instantaneaConsulta) {
    let noticias = "";
    const documentos = instantaneaConsulta.docs;

    if (id !== null) {
      const documento = documentos[id];
      if (documento) {
        const noticia = documento.data();
        noticias = `
        <div class="noticia">
          <div class="noticia-imagen">
            <img src="${noticia.imagen}" alt="noticia">
          </div>
          <div class="noticia-contenido">
            <h2>${noticia.titulo}</h2>
            <p>${noticia.texto}</p>
          </div>
        </div>`;
      }
    } 
    document.querySelector("#news").innerHTML = noticias;
  });
}

// Crear noticia
function crearNoticia(titulo, texto, imagen) {
  addDoc(collection(db, "notices"), {
    titulo: titulo,
    texto: texto,
    imagen: imagen,
  }).then(function () {
    cargarNoticias();
  });
}

// Mostrar noticia
document.addEventListener("DOMContentLoaded", function () {
  cargarNoticias();
});