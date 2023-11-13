import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const GalleryPage = () => {
  return (
    <Layout pageTitle="CUDN | Contacto">
      <NavOne />
      <PageHeader title="Contacto" />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default GalleryPage;
