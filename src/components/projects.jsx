import React from "react";
import '../styles/projects.css';
import projectsData from '../data-json/proyectos realizados/proyectosRealizados.json';

function Projects() {
    return (
        <section id="proyectos" className="proyectos-recientes seccion-clara d-flex flex-column">
            <h2 className="seccion-titulo texto-negro">{projectsData.texto.titulo}</h2>
            <h3 className="seccion-descripcion">{projectsData.texto.descripcion}</h3>
            {/* Galeria de Proyectos */}
            <div className="container text-center proyectos-contenedor">
                <div className="row">
                  
                    {projectsData.proyectos.map((proyecto, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="proyecto">
                                <img src={require(`../images/${proyecto.image}.png`)} alt={proyecto.nombre} />
                                <div className="overlay">
                                    <p>{proyecto.nombre}</p>
                                    <div className="iconos-contenedor">
                                        <a href={proyecto.enlaces.github} target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-github"></i>
                                        </a>
                                        {proyecto.enlaces.laptop &&
                                            <a href={proyecto.enlaces.laptop} target="_blank" rel="noopener noreferrer">
                                                <i className="bi bi-laptop"></i>
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <a href="https://github.com/Djacamo01" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-info">
                    Ver más proyectos
                    <i className="bi bi-arrow-right-circle-fill"></i>
                </button>
            </a>
        </section>
    );
}

export default Projects;
