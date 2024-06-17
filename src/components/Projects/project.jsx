import React from 'react';
import { motion } from 'framer-motion';
import './Projects.scss';
import projectData from './Projectdata/projectdata';

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
//import skillData from './Skillsdata/skillsdata'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const projectVariants = {
  initial: {
    opacity: 0,
    x: "-255%",
    scale: 0
  },
  animate: {
    opacity: 1,
    x: 0
  },
  transition: {
    delay: 1,
    duration: 4,
    type: "spring",
    stiffness: 400,
    damping: 40
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 400,
      damping: 20
    }
  }
};

export default function Projects() {
  return (
    <>
      <div className='whole'>
        <motion.div className='sideline' initial={{ opacity: 0, y: -20, scale: 0.3 }} whileInView={{ opacity: 1, scale: 1 }} 
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <div className='projects'>
          <div>
            <h2>PROJECTS</h2>
          </div>
          <motion.div className='projectsContainer'
            variants={projectVariants}
            initial="initial"
            animate="animate"
            whileInView="whileInView"
          >
          <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{display:"flex",alignItems:"center",justifyContent:"center"}}
        className="Swiper-cont"
      >
            {
              projectData.map((project) => {
                return (
                  <SwiperSlide>
                  <motion.div className="card" 
                    variants={projectVariants}
                    initial="initial"
                    animate="animate"
                    whileInView="whileInView"
                    key={project.id}
                  >
                    <motion.div className='imageClass'>
                      <img src={project.img} className="card-img-top imgCont" alt={project.title} />
                    </motion.div>
                    <motion.div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.Description}</p>
                      <p className="card-tech">
                        {project.Technology.join(', ')}
                      </p>
                      <a href='{project.link}'>Know More</a>
                    </motion.div>
                  </motion.div>
                  </SwiperSlide>
                );
              })
            }
            </Swiper>
          </motion.div> 
        </div>
      </div>
    </>
  );
}
