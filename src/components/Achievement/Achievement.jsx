import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Achievement.css';

const certificates = [
    { title: 'Certificate 1', image: '/Images/certificate1.png', description: 'Description of Certificate 1', pdfUrl: '/PDF/webdev.pdf' },
    { title: 'Certificate 2', image: '/Images/certificate2.png', description: 'Description of Certificate 2', pdfUrl: '/PDF/software.pdf' },
    { title: 'Certificate 3', image: '/Images/certificate3.png', description: 'Description of Certificate 3', pdfUrl: '/PDF/core-java.pdf' },
    { title: 'Certificate 4', image: '/Images/certificate4.png', description: 'Description of Certificate 4', pdfUrl: '/PDF/java-basic.pdf' },
    { title: 'Certificate 5', image: '/Images/certificate5.png', description: 'Description of Certificate 5', pdfUrl: '/PDF/NSDC.pdf' },
];

const Achievement = () => {
    const [hoveredCert, setHoveredCert] = useState(null);
    const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 200 });

    return (
        <div className="certificates-leetcode">
            <animated.div style={fadeIn}>
                <h2>My Certificates</h2>
                <div className="certificates">
                    {certificates.map((cert, index) => (
                        <div 
                            key={index} 
                            className="certificate"
                            onMouseEnter={() => setHoveredCert(cert.description)}
                            onMouseLeave={() => setHoveredCert(null)}
                            onClick={() => window.open(cert.pdfUrl, "_blank")}
                        >
                            <img src={cert.image} alt={cert.title} />
                            <p>{cert.title}</p>
                            {hoveredCert === cert.description && (
                                <div className="description-tooltip">
                                    {cert.description}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </animated.div>
        </div>
    );
};

export default Achievement;
