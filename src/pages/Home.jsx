import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/Skills";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import {Footer} from '../components/footer';
import { EducationSection } from "../components/EducationSection";
function Home(){
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        { /* Theme Toggle */}
        {/* <ThemeToggle /> */}

        { /*Background Effects */ }
        <StarBackground />

        { /*Nav Bar*/}
        <NavBar />

        {/* Hero */}
        <main>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <SkillSection />
            <ProjectsSection />
            <ContactSection />
        </main>
        
        <Footer />

        <div className="fixed bottom-4 left-4 z-50">
          <ThemeToggle />
        </div>

    </div>
}

export default Home;
