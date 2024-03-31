import React from "react";
import '../styles/experience.css';
import sectionEstudiante from '../data-json/section 1/estudiante.json';
import sectionExperiencia from '../data-json/section 1/experiencia.json';
import sectionProyectos from '../data-json/section 1/proyectos.json';

function Experience() {
  return (
    <section className="experiencia seccion-clara">
      <div className="container text-center">
        <div className="row">
          {/* Sección de Estudiante */}
          <div className="columna col-12 col-md-4">
            <i className="bi bi-laptop"></i>
            <p className="experiencia-titulo">{sectionEstudiante.experiencia.titulo}</p>
            <p>{sectionEstudiante.experiencia.descripcion}</p>
            <div className="badges-contenedor">
              {sectionEstudiante.badges.map((badge, index) => (
                <span key={index} className="badge text-bg-primary">{badge.nombre}</span>
              ))}
            </div>
          </div>

          {/* Sección de Desarrollo Web */}
          <div className="columna col-12 col-md-4">
            <i className="bi bi-laptop"></i>
            <p className="experiencia-titulo">{sectionExperiencia.experiencia.titulo}</p>
            <p>{sectionExperiencia.experiencia.descripcion}</p>
            <div className="badges-contenedor">
              {sectionExperiencia.badges.map((badge, index) => (
                <span key={index} className="badge text-bg-primary">{badge.nombre}</span>
              ))}
            </div>
          </div>

          {/* Sección de Proyectos Personales */}
          <div className="columna col-12 col-md-4">
            <i className="bi bi-laptop"></i>
            <p className="experiencia-titulo">{sectionProyectos.experiencia.titulo}</p>
            <p>{sectionProyectos.experiencia.descripcion}</p>
            <div className="badges-contenedor">
              {sectionProyectos.badges.map((badge, index) => (
                <span key={index} className="badge text-bg-primary">{badge.nombre}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
