import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import CursosCortos from "../components/CursosCortos";

const CoursesPage = () => {
    return (
        <Layout pageTitle="UDN | Cursos">
            <NavOne />
            <PageHeader title="Cursos" />
            <CursosCortos />
            <Footer />
        </Layout>
    );
};

export default CoursesPage;
