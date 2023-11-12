import React from "react";
import Mailchimp from "react-mailchimp-form";

const Contact = () => {
  return (
    <div>
      <section className="contact-info-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-placeholder"></i>
                </div>
                <h2 className="contact-info-one__title">
                  Nuestra direcci&oacute;n
                </h2>
                <p className="contact-info-one__text">
                  Av. Carmelo Pérez 279. Col. Ampliación Vicente Villada, <br />
                  Cd. Nezahualcóyotl, Edo. de México. <br /> C.P. 57710
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-contact"></i>
                </div>
                <h2 className="contact-info-one__title">
                  Informaci&oacute;n de Contacto
                </h2>
                <p className="contact-info-one__text">
                  <i
                    className="fa fa-envelope"
                    style={{ marginRight: "8px" }}
                  ></i>
                  cudneza@gmail.com <br />
                </p>
                <p
                  className="contact-info-one__text"
                  style={{ marginTop: "1rem" }}
                >
                  <i className="fa fa-phone" style={{ marginRight: "8px" }}></i>
                  55-5732-9937 <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-one">
        <div className="container">
          <h2 className="contact-one__title text-center">
            Queremos saber <br />
            de ti
          </h2>
          {/* <form
            action="#"
            className="contact-one__form contact-form-validated"
            noValidate="novalidate"
          >
            <div className="row low-gutters">
              <div className="col-lg-6">
                <input type="text" name="name" placeholder="Your Name" />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Email Address" name="email" />
              </div>
              <div className="col-lg-12">
                <textarea placeholder="Write Message" name="message"></textarea>
                <div className="text-center">
                  <button type="submit" className="contact-one__btn thm-btn">
                    Submit Comment
                  </button>
                </div>
              </div>
            </div>
          </form> */}
          <Mailchimp
            action="https://gmail.us6.list-manage.com/subscribe/post?u=9f5dd2c791df9815d925b4d74&amp;id=aef6286cd2"
            //Adding multiple fields:
            fields={[
              {
                name: "FNAME",
                placeholder: "Nombre",
                type: "text",
                required: false,
              },
              {
                name: "EMAIL",
                placeholder: "Email",
                type: "email",
                required: true,
              },
              {
                name: "PHONE",
                placeholder: "Teléfono",
                type: "phone",
                required: false,
              },
            ]}
            // Change predetermined language
            messages={{
              sending: "Enviando...",
              success: "Gracias! Pronto te contactamos.",
              error: "Ocurrio un error.",
              empty: "Tienes que escribir un email.",
              duplicate: "Ya tenemos tu correo. Pronto te contactamos.",
              button: "Registrarme!",
            }}
            // Add a personalized class
            className="mailchimp-contact"
          />
          <div className="result text-center"></div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJjRCGLtfi0YURZKaZVEqdoUs&key=AIzaSyAI8POq1I1uQsp9cZRahD5w_OzRjhebCXo"
        className="google-map__contact"
        title="template google map"
        allowFullScreen=""
      ></iframe>
    </div>
  );
};

export default Contact;
