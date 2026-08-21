import React from "react";
// import styles from "@/app/ui/home.module.css"
import MainSection from "@/app/components/MainSection";
import AboutSection from "./components/AboutSection";
import AreasSection from "./components/AreasSection";
import AssociationsSection from "./components/AssociationsSection";
import PublicationsSection from "./components/PublicationsSection";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ScrollReveal from "./components/ScrollReveal";

const Home = () => {
    return (
        <main className="Home" id="homePage">
        <NavBar />
        <ScrollReveal><MainSection /></ScrollReveal>
        <ScrollReveal><AboutSection /></ScrollReveal>
        <ScrollReveal><AreasSection /></ScrollReveal>
        <ScrollReveal><AssociationsSection /></ScrollReveal>
        <ScrollReveal><PublicationsSection /></ScrollReveal>
        <Footer />
        </main>
    );
};

export default Home;
