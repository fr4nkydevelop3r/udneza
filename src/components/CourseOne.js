import React, { useContext } from "react";
import Swiper from "react-id-swiper";
import { Link } from "gatsby";
import "swiper/css/swiper.css";
import Licenciatura1 from "../assets/images/Licenciatura1.png";

import { CareersContext } from "../pages/index";

const CourseOne = () => {
  const careers = useContext(CareersContext);
  console.log(careers);

  const params = {
    slidesPerView: 3,
    loop: false,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div>
      <section className="course-one__top-title home-one">
        <div className="container">
          <div className="block-title mb-0">
            <h2 className="block-title__title">
              Explora nuestras <br />
              carreras
            </h2>
          </div>
        </div>
        <div className="course-one__top-title__curve"></div>
      </section>

      <section className="course-one course-one__teacher-details home-one">
        <div className="container">
          <div className="course-one__carousel">
            <Swiper {...params}>
              {careers.map((career, index) => (
                <div className="item" key={index}>
                  <div className="course-one__single color-1">
                    <div className="course-one__image">
                      <img src={career.image} alt="" />
                    </div>
                    <div className="course-one__content">
                      <Link
                        to={`/detalles-carrera/${career.id}`}
                        className="course-one__category"
                      >
                        {career.tag}
                      </Link>

                      <h2 className="course-one__title">
                        <Link to={`/detalles-carrera/${career.id}`}>
                          {" "}
                          {career.name}{" "}
                        </Link>
                      </h2>
                      <p>
                        <Link to={`/detalles-carrera/${career.id}`}>
                          RVOE {career.rvoe}
                        </Link>
                      </p>

                      <div className="course-one__meta">
                        <Link to={`/detalles-carrera/${career.id}`}>
                          <i className="far fa-clock"></i>{" "}
                          {career.cuatrimestres} cuatrimestres
                        </Link>

                        <Link to={`/detalles-carrera/${career.id}`}>
                          $800/Mes
                        </Link>
                      </div>

                      <Link
                        to={`/detalles-carrera/${career.id}`}
                        className="course-one__link"
                      >
                        Ver informaci&oacute;n
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CourseOne;
