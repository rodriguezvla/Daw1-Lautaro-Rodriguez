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

// Consultar base de datos
function cargarNoticias() {
    getDocs(collection(db, "notices")).then(function (instantaneaConsulta) {
      let noticias = "";
      const documentos = instantaneaConsulta.docs;
      
      for(let i =0; i < documentos.length; i++)
      {
        let documento = documentos[i];
        let noticia = documento.data();
        noticias += 
        `<div class="noticia">
        <div class="noticia-imagen">
            <img src="${noticia.imagen}" alt="noticia">
        </div>
        <div class="noticia-contenido">
            <h2>${noticia.titulo}</h2>
            <p>${noticia.texto}</p>
            </div>
        </div>`;
      };
      document.querySelector("#news").innerHTML = noticias;

      const imagenesArticulos = document.querySelectorAll(".noticia-imagen img");
      for(let i = 0; i < documentos.length; i++) {
      imagenesArticulos[i].addEventListener("click", function() {
      window.location.href = `detallNoticia.html?id=${i}`;
    });
    };

    });
  }
  
  // Crear noticia
  function crearNoticia(titulo, texto, imagen) {
    addDoc(collection(db, "notices"), {
      titulo: titulo,
      texto: texto,
      imagen: imagen,
    }).then(function() {
      cargarNoticias();
    });
  };
  
  // Mostrar noticia
  document.addEventListener("DOMContentLoaded", function() {
    cargarNoticias();
  });