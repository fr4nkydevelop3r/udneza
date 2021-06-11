import React, { Component } from "react";
import { Link } from "gatsby";
import cta1 from "../assets/images/cta-1.jpg";
class CallToActionThree extends Component {
  render() {
    return (
      <section className="cta-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clearfix">
              <img src={cta1} className="cta-three__image" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="cta-three__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    Beneficios de estudiar con nosotros
                  </h2>
                </div>
                <p className="cta-three__text">
                  Nuestro modelo educativo busca proveer a nuestros alumnos con las herramientas
                  necesarias para satisfacer las demandas del mercado laboral actual. Nuestra oferta educativa va 
                  dirigida principalmente a comunidades y grupos vulnerables. 
                </p>
                <div className="cta-three__single-wrap">
                  <div className="cta-three__single">
                    <i className="kipso-icon-strategy"></i>
                    <p className="cta-three__single-text">
                      Contenido educativo actualizado
                    </p>
                  </div>
                  <div className="cta-three__single">
                    <i className="kipso-icon-training"></i>
                    <p className="cta-three__single-text">Clases en vivo</p>
                  </div>

                  <div className="cta-three__single">
                    <i className="kipso-icon-human-resources"></i>
                    <p className="cta-three__single-text">Profesores expertos</p>
                  </div>
                </div>
            
                <Link  to="/register"  className="thm-btn">
                 Regisrarse
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CallToActionThree;
