import React from "react";
import '../styles/footer.css'
import svg2 from '../images/icono-blanco.svg'
function Footer(){
    return(
        <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center"> 
      <img class="footer-logo"  src={svg2} alt="Logo del portafolio"/>
      <p className="footer-texto text-center">Explorando bits y bytes, un pixel a la vez. 🚀<br/ >¡Vamos a dar vida a nuevas ideas juntos!</p>

      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <a href="https://twitter.com/JacamoDonald" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://github.com/Djacamo01" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/donald-miguel-jacamo-estrada-0218551a1/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/djacamo01" target="_blank" rel="noopener noreferrer">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="mailto:jacamodonaldmiguel@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-envelope"></i>
        </a>
      </div>
      <div className="derechos-de-autor">Creado por Donald Jacamo (2024) &#169;</div>
    </footer>
    );
}

export default Footer;