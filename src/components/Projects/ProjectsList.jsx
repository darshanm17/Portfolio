import React from 'react';
import './ProjectsList.css';

const ProjectsList = ({ projects, onProjectClick }) => {
    return (
      <div className='projectsdiv'>
      <h1>PROJECTS</h1>
        <div className="projects-list">
        
            {projects.map((project, index) => (
                <div key={index} className="project" onClick={() => onProjectClick(project)}>
                    <img src={project.image} alt={project.name} className="project-image" />
                    <h3>{project.name}</h3>
                    <p className="project-technologies">
                        {project.technologies.join(", ")}
                    </p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ProjectsList;
