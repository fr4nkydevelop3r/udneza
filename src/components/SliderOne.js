import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { Link } from "gatsby";
const SliderOne = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        <Swiper getSwiper={setSwiper}>
          <div className="banner-one__slide banner-one__slide-one">
            <div className="container">
              <div className="banner-one__bubble-1"></div>
              <div className="banner-one__bubble-2"></div>
              <div className="banner-one__bubble-3"></div>
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <h3 className="banner-one__title banner-one__light-color">
                    PREPARARTE<br />
                      NUESTRA  <br />
                      PASI&Oacute;N
                  </h3>
                  <p className="banner-one__tag-line">
                  ¿Listo para el reto?
                  </p>
                 
                  <Link to="/register"  className="thm-btn banner-one__btn">Registrarme</Link>

                </div>
              </div>
            </div>
          </div>
          <div className="banner-one__slide banner-one__slide-two">
            <div className="container">
              <div className="banner-one__bubble-1"></div>
              <div className="banner-one__bubble-2"></div>
              <div className="banner-one__bubble-3"></div>
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <h3 className="banner-one__title banner-one__light-color">
                    APRENDE<br />
                    CON LOS MEJORES
                  </h3>
                  <p className="banner-one__tag-line">
                  ¿Listo para el reto?
                  </p>
                  <Link to="/register"  className="thm-btn banner-one__btn">Registrarme</Link>

                </div>
              </div>
            </div>
          </div>
        </Swiper>
      </section>
      <div className="banner-carousel-btn">
        <div
          onClick={goPrev}
          onKeyUp={goPrev}
          tabIndex={0}
          role="button"
          className="banner-carousel-btn__left-btn banner-arrow"
        >
          <i className="kipso-icon-left-arrow"></i>
        </div>
        <div
          onClick={goNext}
          onKeyDown={goNext}
          role="button"
          tabIndex={0}
          className="banner-carousel-btn__right-btn banner-arrow"
        >
          <i className="kipso-icon-right-arrow"></i>
        </div>
      </div>
      <div className="banner-one__cta">
        <div className="banner-one__cta-icon">
          <i className="kipso-icon-black-graduation-cap-tool-of-university-student-for-head"></i>
        </div>
        <div className="banner-one__cta-title">
          <h3 className="banner-one__cta-text">
          <Link to="/carreras" >Descubre nuestras carreras</Link>

          </h3>
        </div>
        <div className="banner-one__cta-link">
          <a href="#none">
            <i className="kipso-icon-right-arrow"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SliderOne;
