import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import skillsData from './Skillsdata/skillsdata'
import './SkillsList.css';

const SkillModal = ({ skill, onClose }) => {
    const animation = useSpring({
        opacity: skill ? 1 : 0,
        transform: skill ? `translateY(0)` : `translateY(-50%)`
    });

    return (
        skill && (
            <div className="modal-overlay" onClick={onClose}>
                <animated.div style={animation} className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-button" onClick={onClose}>×</button>
                    <h2>{skill.name}</h2>
                    <p>{skill.description}</p>
                </animated.div>
            </div>
        )
    );
};

const SkillsList = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <div className="skillsdiv">
            <h1>SKILLS</h1>
            <div className="skills-list">
                {skillsData.map((skill, index) => (
                    <div 
                        key={index} 
                        className="skill" 
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        onClick={() => setSelectedSkill(skill)}
                    >
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                        <p className="skill-name">{skill.name}</p>
                        {hoveredSkill === skill.name && (
                            <div className="proficiency-tooltip">
                                {skill.proficiency}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
        </div>
    );
};

export default SkillsList;
