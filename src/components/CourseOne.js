import React from "react";
import Swiper from "react-id-swiper";
import { Link } from "gatsby";
import "swiper/css/swiper.css";
import course1 from "../assets/images/course-1-1.jpg";


const CourseOne = () => {

  const infoCarreer = [{
    name: 'Desarrollo de Software'
  }]

  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
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
              <div className="item">
                <div className="course-one__single color-1">
                  <div className="course-one__image">
                    <img src={course1} alt="" />
                    <i className="far fa-heart"></i>
                  </div>
                  <div className="course-one__content">
 
                    <Link to="/detalles-carrera/software"  className="course-one__category">Desarrollo de Software</Link>

              
                    <h2 className="course-one__title">
                      <Link to="/detalles-carrera/software" >Licenciatura en Desarrollo de Software y Negocios Digitales</Link>

                    </h2>
            
                    <div className="course-one__meta">
                    
                      <Link to="/detalles-carrera/software"> 
                        <i className="far fa-clock"></i> 9 cuatrimestres
                      </Link>
                  
                      
                      <Link to="/detalles-carrera/software"> 
                      $800/Mes
                      </Link>
                    </div>
                   
                    <Link 
                      to="/detalles-carrera/software"   
                      className="course-one__link"
                    > 
                     Ver informaci&oacute;n
                    </Link>

                    
                  </div>
                </div>
              </div>


            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CourseOne;
