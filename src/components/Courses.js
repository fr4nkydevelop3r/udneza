import React from "react";
import { Link } from "gatsby";
import course1 from "../assets/images/course-1-1.jpg";
import Course from '../components/Course';

const Courses = () => {
  return (
    <section className="course-one course-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />
                <i className="far fa-heart"></i>
              </div>
              <div className="course-one__content">
                <Link to="/detalles-carrera/software"  className="course-one__category">
                  Desarrollo de software
                </Link>
            
                <h2 className="course-one__title">
                  <Link to="/detalles-carrera/software">Licenciatura en Desarrollo de Software y Negocios Digitales</Link>
                </h2>
                <div className="course-one__meta">
                  <Link to="/detalles-carrera/software" >
                    <i className="far fa-clock"></i> 9 cuatrimestres
                  </Link>
                
                  <Link to="/detalles-carrera/software" >$800/Mes</Link>
                </div>
                <Link  to="/detalles-carrera/software" className="course-one__link">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>




        </div>
      
     {/*} <div className="post-pagination">
          <a href="#none">
            <i className="fa fa-angle-double-left"></i>
          </a>
          <a className="active" href="#none">
            1
          </a>
          <a href="#none">2</a>
          <a href="#none">3</a>
          <a href="#none">4</a>
          <a href="#none">
            <i className="fa fa-angle-double-right"></i>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Courses;
