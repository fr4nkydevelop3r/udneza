import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import DetallesCarrera from "../components/DetallesCarrera";

const CoursesPage = ({ params }) => {
  return (
    <Layout pageTitle="CUDN | Detalles Carrera">
      <NavOne />
      <PageHeader title="Detalles Carrera" />
      <DetallesCarrera carrera={Object.values(params)} />
      <Footer />
    </Layout>
  );
};

export default CoursesPage;
