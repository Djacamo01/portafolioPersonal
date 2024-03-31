import React from "react";
import '../styles/testimonios.css';
import testimonios from '../data-json/carrusel.json';

function Testimonios(props) {
  return (
    <section id="testimonios" className="testimonios seccion-clara">
     <h2 className="seccion-titulo">{testimonios.carrusel.titulo}</h2>
      <h3 className="seccion-descripcion">{testimonios.carrusel.descripcion}</h3>


      <div id="testimonios-carrusel" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonios.carrusel.testimonios.map((testimonio, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="container">
                <img className="testimonio-imagen rounded-circle" src={require(`../images/${testimonio.imagen}.svg`)} alt={`Foto de ${testimonio.cliente}`} />
                <p className="testimonio-texto">{testimonio.texto}</p>
                <div className="testimonio-info">
                  <p className="cliente">{testimonio.cliente}</p>
                  <p className="cargo">{testimonio.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  );
}

export default Testimonios;
