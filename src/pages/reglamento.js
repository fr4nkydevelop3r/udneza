import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import ReglamentoAcad from "../components/Reglamento";

const Reglamento = () => {
  return (
    <Layout pageTitle="UDN | Reglamento">
      <NavOne />
      <PageHeader title="Reglamento" />
      <ReglamentoAcad />
      <Footer />
    </Layout>
  );
};

export default Reglamento;
