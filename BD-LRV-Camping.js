const boton = document.querySelector(".contenedor-articulos .boton-explorar");

boton.addEventListener("click",function(e){
e.preventDefault(); window.location.href = "news.html";})

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

// Consultar 
function cargarNoticias() {
    getDocs(collection(db, "notices")).then(function (instantaneaConsulta) {
      let noticias = "";
      const documentos = instantaneaConsulta.docs;
      
      for(let i =0; i < documentos.length; i++)
      {
        let documento = documentos[i];
        let noticia = documento.data();
        noticias += `
        <div class="tarjeta-articulo" id="${i}">
           <img src="${noticia.imagen}" alt="noticia class="imagen-articulo">
          <h2>${noticia.titulo}</h2>
            <p>${noticia.texto}</p>
          <a href="detallNoticia.html?id=${i}" class="enlace-articulo">Read</a>
        </div>`;
      };
      document.querySelector(".grid-articulos").innerHTML = noticias;

      const imagenesArticulos = document.querySelectorAll(".tarjeta-articulo img");
      for(let i = 0; i < documentos.length; i++) {
        
      imagenesArticulos[i].addEventListener("click", function() {
      window.location.href = `detallNoticia.html?id=${i}`;
    });
    };
    });
  };
  
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