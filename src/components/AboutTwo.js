import React, { Component } from "react";
import { Link } from "gatsby";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import about1 from "../assets/images/about-1-1.jpg";
import onlineGraduation from "../assets/images/online-graduation.jpeg"
export default class AboutTwo extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false
    };
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-two__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    Bienvenido a tu <br />
                    Universidad Digital
                  </h2>
                </div>
                <p className="about-two__text">
                  Contamos con planes de estudio dise&ntilde;ados para formar profesionales de calidad, docentes con amplia experiencia en distintas industrias y
                  herramientas tecnol&oacute;gicas que te permitiran adquirir las habilidades necesarias para destacar en el campo laboral. 
                </p>
                <div className="about-two__single-wrap">
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-professor"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Aprende con profesores expertos
                      </p>
                    </div>
                  </div>
                  <div className="about-two__single">
                    <div className="about-two__single-icon">
                      <i className="kipso-icon-knowledge"></i>
                    </div>
                    <div className="about-two__single-content">
                      <p className="about-two__single-text">
                        Adquiere habilidades requeridas en el campo laboral
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/register"  className="thm-btn banner-one__btn">Registrarme</Link>

              </div>
            </div>
            <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
              <div className="about-two__image">
                <span className="about-two__image-dots"></span>
                <img src={onlineGraduation} alt="online-graduation" className="image_graduation_online"/>
               {/*} <div className="about-two__count">
                  <div className="about-two__count-text">
                    Nuestros alumnos
                    <span className="counter">
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                      >
                        <CountUp end={this.state.startCounter ? 345 : 0} />
                      </VisibilitySensor>
                    </span>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
