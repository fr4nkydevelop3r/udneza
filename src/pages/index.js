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

const careers = [
{ 
  id: 'software',
  name: 'Desarrollo de Software y Negocios Digitales',
  cuatrimestres: 9,
  objetivo: 'Formar profesionales que respondan al avance acelerado de la sociedad, al desarrollar software con innovación tecnológica para mejorar la calidad de vida de la población, con la capacidad de analizar, diseñar e implementar sistemas inteligentes y proyectos de innovación de los negocios digitales, con la integración de las tecnologías para generar valor.',
  maxStudents : 20,
  price: '$800/Mes',
  pdf: 'https://fantasticanswer5129fd70bc3b4da2a3c92f7b578283a781345-dev.s3.amazonaws.com/public/UDNeza/Malla+Curricular+de+Desarrollo+de+Software+y+Negocios+Digitales.pdf',
  tag: 'Software',
  image: "https://libraryappamplified089c9b46b2074a0482e5265842b1143851-dev.s3.amazonaws.com/public/Licenciatura7.png",
  perfilIngreso: [
    'Interés por los servicios tecnológicos que puede ofrecer al mundo laboral', 
    'Capacidad de retención, análisis y síntesis de información digital', 
    'Afinidad por los procesos digitales y diseño de alternativas de solución y nuevas áreas de oportunidad', 
    'Constancia en el desarrollo de actividades innovadoras para el mundo laboral', 
    'Hábitos de lectura y de comprensión y para expresarse por escrito', 
    'Habilidades para comunicar sus ideas en público', 
    'Responsabilidad hacia el trabajo individual y en equipo', 
    'Compromiso con su propia formación y con la sociedad', 
    'Ser un ciudadano con valores universales', 
    'Conocimiento y reflexión de los problemas actuales que exponen a las empresas', 
    'Manejo de las tecnologías de la información y comunicación', 
    'Habilidades para una adecuada gestión de la información digital', 
    'Modelos de negocio y medios digitales'
  ],
  perfilEgreso: [
  'Los problemas y áreas de oportunidad que presentan el desarrollo del software y diferentes negocios', 
  'Teorías y conceptos que fundamentan el Desarrollo de Software y Negocios Digitales para el correcto diseño, desarrollo e integración de los recursos digitales', 
  'Información vigente del manejo de medios digitales en el desarrollo profesional', 'Las herramientas digitales para emplear y detonar la creatividad e innovación', 
  'Valoración de los servicios para emplearlos a estrategias de gestión y desarrollo de herramientas digitales', 
  'Conocimientos de la programación y el desarrollo de diferentes aplicaciones en las redes neuronales, la inteligencia artificial, marketing digital, programación WEB, Blockchain, entre otras áreas',
  'Correcto y eficiente manejo de recursos y herramientas digitales',
  'Aplicar sus conocimientos en la resolución de problemas empresariales vinculados con el sector social, gubernamental y privado',
  'Mejorar la flexibilidad y la capacidad de reacción y anticipación en los proyectos',
  'Almacenar de manera organizada la información digital para favorecer su posterior localización',
  'Sistematizar y utilizar la información y conocimiento, añadiendo valor a los resultados obtenidos'],
}, {
  id: 'educacion',
  name: 'Educación',
  cuatrimestres: 9,
  objetivo: 'Formar  profesionales que generen propuestas y estrategias de intervención innovadoras para las organizaciones educativas, al claustro docente, modelos educativos, planes y programas de estudio, actividades de enseñanza-aprendizaje, recursos y materiales didácticos en diferentes niveles educativos, integrando disposiciones jurídicas vigentes a la realidad de las organizaciones educativas.',
  maxStudents : 20,
  price: '$800/Mes',
  pdf: 'https://fantasticanswer5129fd70bc3b4da2a3c92f7b578283a781345-dev.s3.amazonaws.com/public/UDNeza/Malla+Curricular+de+Licenciatura+en+Educacion+UDN.pdf',
  tag: 'Educación',
  image: "https://libraryappamplified089c9b46b2074a0482e5265842b1143851-dev.s3.amazonaws.com/public/Licenciatura1.png",
  perfilIngreso: [
    'Capacidad de retención, análisis y síntesis de información de la profesión', 
    'Afinidad por eventos y procesos educativos y necesidades de solución y generar nuevas oportunidades', 
    'Constancia en el desarrollo de actividades de aprendizaje', 
    'Hábitos de lectura y de comprensión, de materiales impresos y digitales', 
    'Hábitos de lectura y de comprensión y para expresarse por escrito', 
    'Habilidades para comunicar sus ideas en público', 
    'Responsabilidad hacia el trabajo individual y en equipo, con valores universales',
    'Compromiso con su propia formación y con la sociedad',
    'Gestión y procesamiento de la información virtual',
    'Conocer los Problemas actuales y emergentes de la Educación'
 ],
  perfilEgreso: [
 'Capaz de atender la problemática de la Educación, con una visión crítica y propositiva',
 'Amplio conocimiento de la Política educativa, el marco normativo jurídico vigente y aspectos administrativos del Sistema Educativo Nacional',
 'Aplica las disposiciones legales, metodológicas y sociales de la Educación que aseguren la pertinencia de la educación',
 'Desarrolla Estrategias didácticas innovadoras de la Educación',
 'Transfiere saberes en la atención a los problemas actuales en diferentes niveles educativos',
 'nterpreta, de manera crítica, la realidad educativa, problemas y sucesos educativos en sus diversos niveles, para diseñar intervenciones pertinentes en diversos contextos',
 'Aplica las tecnologías de la información y comunicación en el desarrollo de las habilidades docentes y en maximizar el aprendizaje de los estudiantes'
],
},

{
  id: 'negocios-internacionales',
  name: 'Comercio y Negocios Internacionales',
  cuatrimestres: 9,
  objetivo: 'Formar profesionales que transfieran sus conocimientos en el comercio internacional y en la generación de negocios globales, así como en la gestión y mejoramiento de organizaciones comerciales, a nivel nacional e internacional, aportando la innovación en los elementos comerciales, normativos, económicos, de inversión y financieros que permitan enfrentar los problemas y desafíos globales emergentes e inherentes al intercambio de mercaderías y la generación de negocios internacionales.',
  maxStudents : 20,
  price: '$800/Mes',
  pdf: 'https://fantasticanswer5129fd70bc3b4da2a3c92f7b578283a781345-dev.s3.amazonaws.com/public/UDNeza/Malla+Curricular+de+Licenciatura+en+Comercio+y+Negocios+Internacionales+UDN.pdf',
  tag: 'negocios',
  image: "https://libraryappamplified089c9b46b2074a0482e5265842b1143851-dev.s3.amazonaws.com/public/Licenciatura5.png",
  perfilIngreso: [
    'Percepción para detectar oportunidades comerciales y de negocios', 
    'Capacidad de observar los comportamientos de los mercados globales', 
    'Criterios cuantitativos para evaluar la competencia internacional', 
    'Capacidad de retención, análisis y síntesis', 
    'Iniciativa y creatividad, capacidad de liderazgo y de trabajo en equipo', 
    'Interés por los idiomas', 
    'Atributos de otras culturas y de la geografía mundial',
    'Fundamentos legales y tratados comerciales de México',
    'Conocimientos del comercio y negocios internacionales y tendencias de mercados globales',
    'Habilidad para analizar los fenómenos económicos y financieros internacionales',
    'Habilidades digitales en computación y gestión de la información virtual',
    'Habilidades para el dominio del idioma inglés'
],
  perfilEgreso: [
 'Aplica los Términos del Comercio Internacional (INCOTERMS)',
 'Aplica las Leyes, códigos, reglamentos y normatividad con injerencia en el derecho mercantil y comercio internacional',
 'Genera modelos de decisión para el transporte de mercaderías y de logística',
 'Aplica las cargas tributarias para organizaciones del comercio y negocios internacionales',
 'Desarrolla los procesos de mercadotecnia tradicional y digital',
 'Alternativas de transporte global de las mercaderías',
 'Conoce el potencial de la Oferta exportable de México',
 'Aprovecha los tratados comerciales de México en los mercados globales, oportunidades y obstáculos',
 'Analizar los fenómenos económicos, políticos y sociales en organización globales',
 'Realizar procedimientos comerciales y negocios internacionales y proyectos de inversión',
 'Seleccionar estrategias administrativas eficientes y planear procesos',
 'Generar estrategias comerciales y de modelos de negocios internacionales',
 'Aplicar procesos estadísticos en la toma de decisiones en intercambios comerciales y modelos de negocios',
 'Aplicar los procedimientos de la clasificación arancelaria y términos internacionales de comercio',
 'Aportar soluciones en el ámbito comercial de unidades económicas',
 'Organizar y dirigir grupos de trabajo al logro de objetivos en las organizaciones',
 'Negociar y persuadir estrategias de comercialización y de negocios'
],
},

{
  id: 'desarrollo-ambiental',
  name: 'Gestión y Desarrollo Ambiental',
  cuatrimestres: 9,
  objetivo: 'Formar profesionales que apliquen sus competencias en la gestión y el desarrollo ambiental, para diseñar y ejecutar acciones y proyectos de desarrollo compatibles con el ambiente así como planes de prevención de daños ambientales, con el fin de mejorar la calidad de vida de la población; incluye la generación de conocimientos de las acciones sociales, políticas y económicas que garantizan un desarrollo sostenible, dentro del marco jurídico aplicables en la gestión apropiada de los recursos.',
  maxStudents : 20,
  price: '$800/Mes',
  pdf: 'https://fantasticanswer5129fd70bc3b4da2a3c92f7b578283a781345-dev.s3.amazonaws.com/public/UDNeza/Malla+Curricular+de+Licenciatura+en+Gestio%CC%81n+y+Desarrollo+Ambiental+UDN.pdf',
  tag: 'ambiente',
  image: "https://libraryappamplified089c9b46b2074a0482e5265842b1143851-dev.s3.amazonaws.com/public/Licenciatura3.png",
  perfilIngreso: [
    'Interés por los procesos y fenómenos ambientales y sociales', 
    'Capacidad de retención, análisis y síntesis de información ambiental', 
    'Afinidad por los procesos ambientales y diseño de alternativas de solución', 
    'Constancia en el desarrollo de actividades innovadoras de aprendizaje', 
    'Hábitos de lectura y de comprensión y para expresarse por escrito', 
    'Habilidades para comunicar sus ideas en público', 
    'Responsabilidad hacia el trabajo individual y en equipo',
    'Compromiso con su propia formación y con la sociedad',
    'Ser un ciudadano con valores universales',
    'Escenario territorial y recursos naturales de México',
    'Conocimiento y reflexión de los fenómenos y problemas ambientales actuales',
    'Habilidades para una adecuada gestión de la información virtual'
],
  perfilEgreso: [
 'Conoce los problemas ambientales, con una visión integral y propositiva',
 'Aplica las disposiciones jurídicas vigentes, federales y locales, en materia Ambiental',
 'Aplica las Teorías y conceptos de la Gestión y Desarrollo Ambiental para la sostenibilidad y la calidad de vida de la población, local y globalmente',
 'Aplica los fundamentos científicos aplicables en la gestión ambiental, la conservación y aprovechamiento sostenible de los recursos',
 'Realiza la Valoración de los recursos naturales y estrategias de gestión y desarrollo ambiental',
 'Aplicar sus conocimientos en la resolución de problemas ambientales vinculados con el sector social, gubernamental y privado',
 'Aplica el marco normativo vigente, disposiciones legales, y sociales y las metodológicas de la Gestión y Desarrollo Ambiental para salvaguardar la integridad de la naturaleza y la sociedad en diferentes realidades de México',
 'Integra los saberes comunitarios en la gestión y aprovechamiento sustentable de los recursos naturales, en beneficio de la sociedad',
 'Identifica, analiza e interpreta la información relacionada con la problemática ambiental y generar documentos, informes y propuestas pertinentes',
 'Diseñar estrategias de solución ante conflictos ambientales y áreas de oportunidad relacionadas con la Gestión Ambiental, de manera ética, humana y sustentable'
],
}


]

export const CareersContext = createContext(careers);

const HomePage = () => (


  <CareersContext.Provider value={careers}>

  <Layout pageTitle="UDN - Universidad Digital Neza">
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
