import React from "react";
// import styles from "@/app/ui/home.module.css"
import MainSection from "@/app/components/MainSection";
import AboutSection from "./components/AboutSection";
import AreasSection from "./components/AreasSection";

const Home = () => {
    return (
        <main className="Home" id="homePage">
        <MainSection />
        <AboutSection />
        <AreasSection />
        </main>
    );
};

export default Home;