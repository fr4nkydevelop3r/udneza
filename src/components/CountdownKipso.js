import React from "react";
import Mailchimp from 'react-mailchimp-form'
import Countdown from "react-countdown";

const CountdownKipso = () => {
  return (
    <section className="countdown-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="countdown-one__content">
              <h2 className="countdown-one__title">Reg&iacute;strate ahora</h2>
              <p className="countdown-one__tag-line">
                registr&aacute;ndote tu inscripci&oacute;n ser&aacute; gratuita
              </p>
              <p className="countdown-one__text">
                En la UDN te ofrecemos la oportunidad de estudiar en l&iacute;nea, brindandote formaci&oacute;n profesional de acuerdo
                a la demanda laboral actual. Te acompa&ntilde;aremos en tu proceso de aprendizaje desde el d&iacute;a uno hasta tu titulaci&oacute;n.
                
                              </p>
              <div className="countdown-one__list list-unstyled">
                <Countdown date={Date.now() + 2000000000} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="become-teacher__form">
              <div className="become-teacher__form-top">
                <h2 className="become-teacher__form-title">Obt&eacute;n tu inscripci&oacute;n gratuita</h2>
              </div>
              {/*<form
                action="#"
                method="POST"
                className="become-teacher__form-content contact-form-validated"
              >
                <input type="text" placeholder="Your Name" name="name" />
                <input type="text" placeholder="Email Address" name="email" />
                <input type="text" placeholder="Phone Number" name="phone" />
                <input type="text" placeholder="Comment" name="message" />
                <button
                  type="submit"
                  className="thm-btn become-teacher__form-btn"
                >
                  Reg&iacute;strate
                </button>
              </form>*/}
              <Mailchimp
  action='https://gmail.us6.list-manage.com/subscribe/post?u=9f5dd2c791df9815d925b4d74&amp;id=aef6286cd2' 
  
  //Adding multiple fields:
  fields={[
    {
      name: 'FNAME',
      placeholder: 'Nombre',
      type: 'text',
      required: false
    },
    {
      name: 'EMAIL',
      placeholder: 'Email',
      type: 'email',
      required: true
    },
    {
      name: 'PHONE',
      placeholder: 'Teléfono',
      type: 'phone',
      required: false
    },
   
  ]}
  // Change predetermined language
  messages = {
    {
      sending: "Enviando...",
      success: "Gracias! Pronte te contactamos.",
      error: "Ocurrio un error.",
      empty: "Tienes que escribir un email.",
      duplicate: "Ya tenemos tu correo. Pronto te contactamos.",
      button: "Registrarme!"
    }
  }
  // Add a personalized class
  className='become-teacher__form-content contact-form-validated'
  />
              <div className="result text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CountdownKipso;
