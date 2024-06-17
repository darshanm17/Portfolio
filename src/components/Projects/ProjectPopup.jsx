import React from 'react';
import './ProjectPopup.css';

const ProjectPopup = ({ project, onClose }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <img src={project.image} alt={project.name} className="popup-image" />
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p><strong>Technologies Used:</strong> {project.technologies.join(", ")}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                </a>
                <button className="close-btn" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default ProjectPopup;
