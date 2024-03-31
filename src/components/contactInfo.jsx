import React from "react";
import '../styles/contact.css'
function ContacInfo(){
    return(

    <section id="contacto" className="contacto seccion-oscura">
      <div className="container">
        <div className="container text-center rectangulo d-flex justify-content-evenly">
          <div className="row">
            <div className="col-12 col-md-4 seccion-titulo">
              ¡Hablemos!
            </div>
            <div className="col-12 col-md-4 descripcion">
              Conéctate conmigo para dar vida a tu proyecto web. Juntos, transformaremos tus ideas en realidad y crearemos algo asombroso. 🌟
            </div>
            <div className="col-12 col-md-4">
              <a href="mailto:jacamodonaldmiguel@gmail.com">
                <button type="button">  
                  Contacto
                  <i className="bi bi-envelope-check-fill"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default ContacInfo;