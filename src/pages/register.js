import React from "react";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import CountdownKipso from "../components/CountdownKipso";
const Register = () => {
  return (
    <Layout pageTitle="CUDN | Registro">
      <NavOne />
      <PageHeader title="Registro" />
      <CountdownKipso />
      <Footer />
    </Layout>
  );
};

export default Register;
