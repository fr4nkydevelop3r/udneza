import React from "react";


const Footer = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <footer className="site-footer">
       
        <div className="site-footer__bottom">
          <div className="container">
            <p className="site-footer__copy">
              &copy; Copyright 2020  Universidad Digital Nezahualc&oacute;yotl
            </p>
            <div className="site-footer__social">
              <div
                onClick={scrollTop}
                onKeyDown={scrollTop}
                role="button"
                tabIndex={0}
                className="scroll-to-target site-footer__scroll-top"
              >
                <i className="kipso-icon-top-arrow"></i>
              </div>

              <a href="https://twitter.com/udneza">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/Universidad-Digital-Neza-105121505153040" target="_blank">
                <i className="fab fa-facebook-square"></i>
              </a>
            
              {/*<a href="#none">
                <i className="fab fa-instagram"></i>
              </a>*/}
            </div>
          </div>
        </div>
      </footer>

      <div className="search-popup">
        <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="kipso-icon-magnifying-glass"></i>
            </button>
            <div className="cancel"></div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Footer;
