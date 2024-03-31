import React from "react";
import '../styles/hero.css'
import SVG1 from '../images/hero-inferior.svg'

function Hero(props) {
  return (
    <section className="hero align-items-stretch">
      <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
        <img className="hero-imagen-desarrollador rounded-circle"  src={require(`../images/imagenes-desarrolladores/desarrolador-ejemplo.png`)} alt="Foto de Donald Jacamo" />
        <h1>Hola, soy Donald Jacamo</h1>
        <h2>Domino el arte de la magia en el back-end <br /> en mis tiempos libres... reinicio el router para mantenerme en forma <br /> y asegurarme de que la magia siga fluyendo sin interrupciones</h2>
      </div>
      <div className="hero-inferior">
        <img className="hero-inferior-imagen img-fluid" src={SVG1}alt="Monitor, laptop y logos de HTML, CSS, Java, Mysql y Spring Boot." />
      </div>
    </section>
  );
}
export default Hero;