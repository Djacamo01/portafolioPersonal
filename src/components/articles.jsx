import React from "react";
import '../styles/article.css'
function Articles(){
    return(
        <section className="articulos justify-content-start">
        <h2 className="seccion-titulo texto-negro"> Te dejare unos cuantos Artículos de freecodecamp que quizas te interesen</h2>
        <div className="card">
          <div className="card-header">
            Más recientes
          </div>
          <ul className="list-group list-group-flush">
            <a href="https://www.freecodecamp.org/espanol/news/" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">
                El decorador @property en Python - cómo usarlo, ventajas y sintaxis
              </li>
            </a>
            <a href="https://www.freecodecamp.org/espanol/news/" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">
                Python tutorial ciclos while - while True ejemplos de sintaxis y ciclos infinitos
              </li>
            </a>
            <a href="https://www.freecodecamp.org/espanol/news/" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">
                Python leer archivo JSON - cómo cargar JSON desde un archivo y procesar dumps
              </li>
            </a>
            <a href="https://www.freecodecamp.org/espanol/news/" target="_blank" rel="noopener noreferrer">
              <li class="list-group-item">
                Python cómo escribir en un archivo - abrir, leer, escribir y otras funciones de archivos explicadas
              </li>
            </a>
            <a href="https://www.freecodecamp.org/espanol/news/" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">
                ¿Para qué se usa Python? 10+ usos del lenguaje de programación Python
              </li>
            </a>
          </ul>
        </div>
        <a href="https://www.freecodecamp.org/espanol/news/" target="_blank" rel="noopener noreferrer">
          <button type="button" class="btn btn-info">
            Ver más artículos
            <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </a>
      </section>
    );
}

export default Articles;