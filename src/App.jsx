import { useState } from "react";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Test from "./Test";
import Hero from "./components/Hero/Hero";
import Educationhero from "./components/About/Educationhero";
//import Skills from "./components/Skiils/Skills";
import Projects from "./components/Projects/project";
import ContactForm from "./components/Contact/Contact";
import SkillsList from "./components/Skiils/SkillsList";
import SkillPopup from "./components/Skiils/Skillpopup";
import ProjectsList from "./components/Projects/ProjectsList";
import ProjectPopup from "./components/Projects/ProjectPopup";
import { skillsData } from "./skillsData";
import { projectsData } from "./projectsData";
import Coming from "./components/ComingNext/Coming";
import Achievement from "./components/Achievement/Achievement";
//import BadgesList from "./components/Achievement/Leetcode";
import LeetCode from "./components/Achievement/Leetcode";
import LeetCodeProfile from "./components/LeetCode/LeetCodeProfile";

function App() {
  const [count, setCount] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
      setSelectedProject(project);
  };

  const handleClosePopuppro = () => {
      setSelectedProject(null);
  };

  const handleSkillClick = (skill) => {
      setSelectedSkill(skill);
  };

  const handleClosePopup = () => {
      setSelectedSkill(null);
  };

  return (
    <>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>

     

       <section id="Projects">
     
       <ProjectsList projects={projectsData} onProjectClick={handleProjectClick} />
            {selectedProject && (
                <ProjectPopup project={selectedProject} onClose={handleClosePopuppro} />
            )}
      </section> 
      {/* <section>
        <Educationhero />
      </section> */}
      <section id="Skills">
       <SkillsList/>
      </section>
      <section id="Whats Next">
        <Coming/>
      </section>
     
      <section id="Certificates"><Achievement/></section>
       <section id="Coding-Journy"><LeetCodeProfile/> </section>  
      /*<section id="Contact"><ContactForm/></section>*/
      {/* <section id="Contact">Contact</section> */}
    
    </>
  );
}

export default App;
