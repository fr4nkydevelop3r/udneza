import React from "react";
import Mailchimp from "react-mailchimp-form";

const SubscribeOne = () => {
  return (
    <section className="mailchimp-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mailchimp-one__content">
              <div className="mailchimp-one__icon">
                <i className="kipso-icon-email"></i>
              </div>
              <h2 className="mailchimp-one__title">
                Recibe m&aacute;s <br />
                informaci&oacute;n en tu correo
              </h2>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            {/*} <div className="my-auto">
                            <form action="#" className="mailchimp-one__form mc-form">
                                <input type="text" id="mc-email" placeholder="Enter your email" />
                                    <button type="submit" className="thm-btn">Enviar</button>
                            </form>
                            <div className="mc-form__response"></div>
                        </div> */}

            <Mailchimp
              action="https://gmail.us6.list-manage.com/subscribe/post?u=9f5dd2c791df9815d925b4d74&amp;id=aef6286cd2"
              //Adding multiple fields:
              fields={[
                {
                  name: "EMAIL",
                  placeholder: "Email",
                  type: "email",
                  required: true,
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
              className="mailchimp-one-field"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SubscribeOne;
