import React,{createContext} from "react";
import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import CourseOne from "../components/CourseOne";
import CountdownKipso from "../components/CountdownKipso";
import CallToActionThree from "../components/CallToActionThree";

import SubscribeOne from "../components/SubscribeOne";

const careers = [{ id: 'software',
name: 'Licenciatura en Desarrollo de Software y Negocios Digitales',
cuatrimestres: 9,
objetivo: 'Formar especialistas en planear, diseñar, desarrollar e implementar sistemas de información, bases de datos, inteligencia artificial y redes para dar solución tecnológica a problemas en las organizaciones.',
maxStudents : 30,
price: '$800/Mes',
pdf: 'https://familyhelpercf8592153a9d4564a85a2a42f623c609204251-dev.s3.amazonaws.com/public/mapa_curricular_carrera_software.pdf',
tag: 'Software',
perfilEgreso: ['Dominar los elementos requeridos para la construcción de un programa de computadora', 'Solucionar problemas que impliquen la búsqueda u ordenación de elementos en una colección de datos.', 'Desarrollar sistemas de redes', 'Generar aplicaciones móviles', 'Gestionar equipos de trabajo en el sector de TI'],
perfilIngreso: ['Conocimiento a nivel medio superior de ciencias básicas: Matemáticas y Física', 'Pensamiento lógico, analítico, crítico y reflexivo.', 'Marcado interés por el desarrollo de software empleando tecnologías emergentes en las áreas de lenguajes de programación, Bases de Datos e ingeniería del software.']

}]

export const CareersContext = createContext(careers);

const HomePage = () => (


  <CareersContext.Provider value={careers}>

  <Layout pageTitle="UDN - Universidad Digital Neza">
    <Topbar />
    <NavOne />
    <SliderOne />
    <AboutTwo />
    <CourseOne />
    <CountdownKipso />
    <CallToActionThree />
    <SubscribeOne />
    <Footer />
  </Layout>
  </CareersContext.Provider>
);

export default HomePage;
