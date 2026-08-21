import React from "react";
// import styles from "@/app/ui/home.module.css"
import MainSection from "@/app/components/MainSection";
import AboutSection from "./components/AboutSection";
import AreasSection from "./components/AreasSection";
import AssociationsSection from "./components/AssociationsSection";
import PublicationsSection from "./components/PublicationsSection";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const Home = () => {
    return (
        <main className="Home" id="homePage">
        <NavBar />
        <MainSection />
        <AboutSection />
        <AreasSection />
        <AssociationsSection />
        <PublicationsSection />
        <Footer />
        </main>
    );
};

export default Home;