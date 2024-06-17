import React from 'react';
import './SkillPopup.css';

const SkillPopup = ({ skill, onClose }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <img src={skill.image} alt={skill.name} className="popup-image" />
                <h2>{skill.name}</h2>
                <p>{skill.description}</p>
                <button className="close-btn" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default SkillPopup;
