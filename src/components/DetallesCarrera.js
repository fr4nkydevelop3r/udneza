import React, { useState, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import courseD1 from "../assets/images/course-d-1.jpg";

import { CareersContext } from "../pages/index";

const DetallesCarrera = ({ carrera }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const careers = useContext(CareersContext);

  const career = careers.filter((c) => c.id === carrera[0])[0];

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  console.log(career);

  return (
    <section className="course-details">
      {career && (
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course-details__content">
                <div className="course-details__top">
                  <div className="course-details__top-left">
                    <h2 className="course-details__title">{career.name}</h2>
                  </div>
                  <div className="course-details__top-right">
                    <a href="#none" className="course-one__category">
                      {career.tag}
                    </a>
                  </div>
                </div>
                <div className="course-one__image">
                  <img src={career.image} alt="" />
                </div>

                <Tabs>
                  <TabList>
                    <Tab>Objetivo</Tab>
                    <Tab>Plan de Estudios</Tab>
                    <Tab>Perfil Ingreso</Tab>
                    <Tab>Perfil Egreso</Tab>
                  </TabList>

                  <TabPanel>
                    <p>{career.objetivo}</p>
                  </TabPanel>

                  <TabPanel>
                    <a
                      href={career.pdf}
                      target="_blank"
                      rel="noreferrer"
                      id="email"
                    >
                      {`${career.name}.pdf`}
                    </a>
                  </TabPanel>

                  <TabPanel>
                    <ul>
                      {career.perfilIngreso.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul>
                      {career.perfilEgreso.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-details__price">
                <p className="course-details__price-text">Mensualidad</p>
                <p className="course-details__price-amount">$800</p>
              </div>

              <div className="course-details__meta">
                <a className="course-details__meta-link">
                  <span className="course-details__meta-icon">
                    <i className="far fa-clock"></i>
                  </span>
                  Cuatrimestres <span> {career.cuatrimestres}</span>
                </a>

                <a className="course-details__meta-link">
                  <span className="course-details__meta-icon">
                    <i className="far fa-user-circle"></i>
                  </span>
                  Estudiantes: <span>Max {career.maxStudents}</span>
                </a>
                <a className="course-details__meta-link">
                  <span className="course-details__meta-icon">
                    <i className="fas fa-play"></i>
                  </span>
                  Clases: <span>Online</span>
                </a>
                <a className="course-details__meta-link">
                  <span className="course-details__meta-icon">
                    <i className="far fa-folder-open"></i>
                  </span>
                  Ex&aacute;menes: <span>Híbrido</span>
                </a>
                <a className="course-details__meta-link">
                  <span className="course-details__meta-icon">
                    <i className="far fa-file"></i>
                  </span>
                  RVOE: <span>{career.rvoe}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetallesCarrera;
