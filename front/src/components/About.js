import React from "react";
import imagenHome from "./imagenHome.png";

const About = () => {
  return (
    <div className="Home">
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="img-container fluid col-5">
            <img src={imagenHome} width="100%"></img>
          </div>

          <div className="col-7">
            <h1 id="TituloAbout">
              <strong>#QuédateEnCasa</strong>
            </h1>
            <h5 id="descripcionAbout">
              Durante estos tiempos de cuarentena obligatoria, tu salud mental
              es muy importante. Es por ello que en este sitio web te
              recomendamos una serie de actividades completamente gratuitas que
              puedes realizar desde la comodidad de tu hogar.
              <br />
              <br />
            </h5>
            <button
              type="button"
              id="botonVerActividades"
              className="btn btn-warning"
              onClick={() => (window.location = "./Activities")}
            >
              <strong>Ver actividades</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
