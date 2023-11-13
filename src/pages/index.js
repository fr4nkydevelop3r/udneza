import React, { createContext } from "react";
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

const careers = [
  {
    id: "educacion",
    name: "Educación",
    cuatrimestres: 9,
    objetivo:
      "Formar profesionales que generen propuestas y estrategias innovadoras de intervención para las organizaciones educativas, al claustro docente, modelos educativos, planes y programas de estudio, actividades de enseñanza-aprendizaje, recursos y materiales didácticos y ejecuten las mejores propuestas en diferentes niveles educativos, integrando políticas y disposiciones jurídicas.",
    maxStudents: 20,
    price: "$800/Mes",
    pdf: "https://cudn.s3.us-east-2.amazonaws.com/Lic.Educ.pdf",
    tag: "Educación",
    image:
      "https://libraryappamplified089c9b46b2074a0482e5265842b1143851-dev.s3.amazonaws.com/public/Licenciatura1.png",
    perfilIngreso: [
      "Capacidad de retención, análisis y síntesis de información de la profesión.",
      "Afinidad por eventos y procesos educativos y generar nuevas áreas de oportunidad.",
      "Constancia en el desarrollo de actividades de aprendizaje.",
      "Hábitos de lectura y de comprensión, de materiales impresos y digitales. ",
      "Habilidad para expresarse por escrito y de forma gráfica.",
      "Habilidades para comunicar verbalmente sus ideas en público.",
      "Responsabilidad hacia el trabajo individual y en equipo.",
      "Compromiso con su propia formación y con la sociedad.",
      "Ser una persona Ética y con valores universales.",
    ],
    perfilEgreso: [
      "Transferir saberes en la atención a los problemas actuales en diferentes niveles educativos.",
      "Interpretar la realidad educativa, problemas y sucesos educativos en sus diversos niveles, para diseñar intervenciones pertinentes en diversos contextos.",
      "Aplicar las tecnologías de la información y comunicación y la inteligencia artificial en el desarrollo de las habilidades docentes y en maximizar el aprendizaje de los estudiantes.",
      "Aplicar el marco normativo vigente, para atender la problemática real de la Educación.",
      "Realizar investigación educativa institucional, para generar nuevas alternativas innovadoras. ",
      "Proponer alternativas en el diseño curricular, modelos educativos, planes y programas de estudios y estrategias de enseñanza-aprendizaje, que respondan a las demandas emergentes.",
      "Elaborar propuestas de intervención educativa en diversos niveles y contextos.",
      "Operar modelos didácticos innovadores, integrando las nuevas aportaciones de la Educación, como respuesta a las problemáticas de diferentes niveles educativos.",
      "Diseñar estrategias para la calidad, innovación y actualización docente.",
      "Reflexionar el presente y futuro de la Educación, en un proceso de transformación constante y proponer nuevas intervenciones, teorías y paradigmas educativos.",
    ],
    rvoe: "20232563",
  },

  {
    id: "negocios-internacionales",
    name: "Comercio y Negocios Internacionales",
    cuatrimestres: 9,
    objetivo:
      "Formar profesionales que transfieran sus conocimientos en el comercio internacional y en generar negocios globales y en la gestión y mejoramiento de organizaciones comerciales, a nivel internacional, aportando la innovación en los elementos comerciales, normativos, económicos, de inversión y financieros que permitan enfrentar los problemas y desafíos globales emergentes e inherentes al intercambio de mercaderías y los negocios internacionales, aprovechando las nuevas tecnologías, la inteligencia artificial, el factor humano y la competitividad.",
    maxStudents: 20,
    price: "$800/Mes",
    pdf: "https://cudn.s3.us-east-2.amazonaws.com/Licenciatura+en+Com.pdf",
    tag: "negocios",
    image:
      "https://libraryappamplified089c9b46b2074a0482e5265842b1143851-dev.s3.amazonaws.com/public/Licenciatura5.png",
    perfilIngreso: [
      "Percepción para detectar oportunidades comerciales y de negocios.",
      "Capacidad de observar los comportamientos de los mercados globales.",
      "Criterios cuantitativos para evaluar la competencia internacional.",
      "Capacidad de retención, análisis y síntesis.",
      "Iniciativa y creatividad.",
      "Capacidad de liderazgo y de trabajo en equipo.",
      "Sentido de negociación y responsabilidad.",
      "Interés por los idiomas.",
    ],
    perfilEgreso: [
      "Analizar los fenómenos económicos, políticos y sociales en organización globales.",
      "Realizar procedimientos comerciales y negocios internacionales y proyectos de inversión.",
      "Aplicar la administración organizacional y derecho mercantil.",
      "Seleccionar estrategias administrativas eficientes y planear procesos.",
      "Generar estrategias comerciales y de modelos de negocios internacionales.",
      "Aplicar procesos estadísticos para la toma de decisiones en intercambios comerciales y los negocios.",
      "Aplicar los procedimientos de la clasificación arancelaria y términos internacionales de comercio.",
      "Detectar riesgos en la unidad económica de manera eficiente y oportuna.",
      "Organizar y dirigir grupos de trabajo al logro de objetivos en las organizaciones.",
      "Negociar y persuadir estrategias de comercialización y de negocios.",
      "Evaluar la oferta exportable de los mercados nacionales y de los oferentes globales.",
      "Diseñar propuestas de mercadotecnia digital y tradicional.",
      "Aplicar herramientas digitales innovadoras en el comercio electrónico.",
      "Evaluar áreas de oportunidad para el desarrollo de nuevos intercambios comerciales y modelos de negocios, con innovación y disrupción.",
      "Toma de decisiones para la logística y el movimiento de mercaderías.",
    ],
    rvoe: "20232564",
  },

  {
    id: "desarrollo-ambiental",
    name: "Gestión y Desarrollo Ambiental",
    cuatrimestres: 9,
    objetivo:
      "Formar profesionales que apliquen sus competencias en la gestión y el desarrollo ambiental, para diseñar y ejecutar acciones y proyectos de desarrollo compatibles con el ambiente así como planes de prevención de daños ambientales, con el fin de mejorar la calidad de vida de la población, aunado a generar conocimientos de las acciones sociales, políticas y económicas que garantizan un desarrollo sostenible, dentro del marco jurídico aplicables y la solución innovadora de conflictos ambientales",
    maxStudents: 20,
    price: "$800/Mes",
    pdf: "https://cudn.s3.us-east-2.amazonaws.com/Lic.+en+Gesti.pdf",
    tag: "ambiente",
    image:
      "https://libraryappamplified089c9b46b2074a0482e5265842b1143851-dev.s3.amazonaws.com/public/Licenciatura3.png",
    perfilIngreso: [
      "Interés por los procesos y fenómenos ambientales y sociales",
      "Capacidad de retención, análisis y síntesis de información ambiental",
      "Afinidad por los procesos ambientales y diseño de alternativas de solución y nuevas áreas de oportunidad.",
      "Constancia en el desarrollo de actividades innovadoras de aprendizaje. ",
      "Hábitos de lectura y de comprensión y para expresarse por escrito.",
      "Habilidades para comunicar sus ideas en público.",
      "Responsabilidad hacia el trabajo individual y en equipo.",
      "Compromiso con su propia formación y con la sociedad.",
      "Ser un ciudadano con valores universales.",
    ],
    perfilEgreso: [
      "Aplicar sus conocimientos en la resolución de problemas ambientales vinculados con el sector social, gubernamental y privado.",
      "Aplicar el marco normativo vigente, disposiciones legales, y sociales y para salvaguardar la integridad de la naturaleza y la sociedad en diferentes realidades.",
      "Integrar los saberes comunitarios en la gestión y aprovechamiento sustentable de los recursos naturales, en beneficio de la sociedad.",
      "Identificar, analizar e interpretar la información relacionada con la problemática ambiental y generar documentos, informes y propuestas pertinentes.",
      "Diseñar estrategias de solución ante conflictos ambientales y áreas de oportunidad relacionadas con la Gestión Ambiental, de manera ética, humana y sustentable.",
      "Generar y aplicar soluciones innovadoras y mecanismos alternos a la problemática ambiental, la conservación y aprovechamiento sostenible de los recursos naturales.",
      "Generar áreas de oportunidad de gestión ambiental, a favor del sector social y la naturaleza.",
      "Utilizar las mejores herramientas y tecnologías para el conocimiento y diagnóstico de la situación ambiental en distintos escenarios territoriales.",
      "Desarrollar proyectos de investigación de las diferentes problemáticas para su resolución sostenible y diseñar y operar proyectos de bionegocios de genes, especies y ecosistemas.",
      "Relacionar la Gestión y Desarrollo Ambiental con otras ciencias para atender problemas y áreas de oportunidad relacionados con el desarrollo sostenible.",
    ],
    rvoe: "20232562",
  },
];

export const CareersContext = createContext(careers);

const HomePage = () => (
  <CareersContext.Provider value={careers}>
    <Layout pageTitle="CUDN - Centro Universitario Digital Neza">
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
