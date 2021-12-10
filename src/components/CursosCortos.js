import React from "react";

const CursosCortos = () => {
  return (
    <section className="course-category-three">
   
      <div className="container">
        <div className="block-title">
          <h2 className="block-title__title">
            Cursos de actualización 
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-6 col-sm-12">
          <table id="cursos-table">
            <thead>
                <tr>
                    <th>Fecha del curso</th>
                    <th>Curso de actualización</th>

                </tr>
            </thead>
            
            <tbody>
             
    <tr>
        <td rowspan="3">17 al 28 de enero</td>
        <td>Capital social de México</td>
    </tr>

    <tr>
        <td>Teorías del comercio internacional</td>
    </tr>

    <tr>
        <td>Corrientes contemporáneas de la educación</td>
    </tr>

    <tr>
        <td rowspan="3">31 de enero al 11 de febrero</td>
        <td>Ciencias de la tierra</td>
    </tr>

    <tr>
        <td>Regiones Comerciales del Mundo</td>
    </tr>

    <tr>
        <td>Didáctica contemporánea y tendencias</td>
    </tr>

    <tr>
        <td rowspan="3">14 al 25 de Febrero</td>
        <td>Legislación ambiental de México</td>
    </tr>

    <tr>
        <td>Acuerdos y tratados comerciales de México</td>
    </tr>

    <tr>
        <td>Ética y responsabilidad social en la Educación</td>
    </tr>

    <tr>
        <td rowspan="3">28 de febrero al 11 de marzo</td>
        <td>Recursos vegetales de México</td>
    </tr>

    <tr>
        <td>Matemáticas financieras para empresarios</td>
    </tr>

    <tr>
        <td>Teorías del aprendizaje para el siglo XXI</td>
    </tr>

    <tr>
        <td rowspan="3">14 al 25 de marzo</td>
        <td>Recursos Faunísticos de México</td>
    </tr>

    <tr>
        <td>Legislación del Comercio Exterior de México</td>
    </tr>

    <tr>
        <td>Estrategias para el desarrollo del talento humano</td>
    </tr>


    <tr>
        <td>28 de marzo al 8 de abril</td>
        <td>Innovación para el desarrollo</td>
    </tr>


</tbody>
        </table>
          </div>
    
        </div>
      </div>
    </section>
  );
};

export default CursosCortos;
