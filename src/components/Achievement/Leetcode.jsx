import React from 'react';
import badgesData from './Leetcode';
import './BadgesList.css';

const LeetCode = () => {
    const handleMouseMove = (e, index) => {
        const badge = document.getElementById(`badge-${index}`);
        const rect = badge.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        const rotateX = deltaY * -10; // Adjust the intensity of the tilt effect
        const rotateY = deltaX * 10; // Adjust the intensity of the tilt effect

        badge.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (index) => {
        const badge = document.getElementById(`badge-${index}`);
        badge.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    return (
        <div className="badges-list">
            {badgesData.map((badge, index) => (
                <a 
                    key={index}
                    href={badge.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge-link"
                >
                    <div
                        id={`badge-${index}`}
                        className="badge"
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <img src={badge.image} alt={badge.title} className="badge-image" />
                        <p className="badge-title">{badge.title}</p>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default LeetCode;
