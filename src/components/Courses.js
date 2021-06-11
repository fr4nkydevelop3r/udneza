import React,{useContext} from "react";
import { Link } from "gatsby";
import course1 from "../assets/images/course-1-1.jpg";
import Course from '../components/Course';

import {CareersContext} from '../pages/index'

const Courses = () => {

  const careers = useContext(CareersContext);


  return (
    <section className="course-one course-page">
      <div className="container">
        <div className="row">

        {careers.map((career) => (
          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />
                <i className="far fa-heart"></i>
              </div>
              <div className="course-one__content">
                <Link to={`/detalles-carrera/${career.id}`}  className="course-one__category">
                  {career.tag}
                </Link>
            
                <h2 className="course-one__title">
                  <Link to={`/detalles-carrera/${career.id}`}>{career.name}</Link>
                </h2>
                <div className="course-one__meta">
                  <Link tto={`/detalles-carrera/${career.id}`}  >
                    <i className="far fa-clock"></i> {career.cuatrimestres} cuatrimestres
                  </Link>
                
                  <Link to={`/detalles-carrera/${career.id}`} >$800/Mes</Link>
                </div>
                <Link  to={`/detalles-carrera/${career.id}`}  className="course-one__link">
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>

        ))}

        
 

          


        </div>
      
  
      </div>
    </section>
  );
};

export default Courses;
