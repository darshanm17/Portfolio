import "./Educationhero.scss"
import{motion} from "framer-motion";
import school from "./school.png"
import twelth from "./12th.png";
import rvitm from "./rvitmlogo.png"
import data from "./data";

export default function Educationhero() {
  const variants={
    initial:{
      opacity:0,
      x:"-255%",scale:0.5
    },
    animate:{
      opacity:1,
       x:0
    },
    transition:{
      delay:1,
      duration:4,
      type:"spring",
        stiffness:400,
        damping:40
    },
    whileInView:{
      opacity:1,
      scale:1
    }
  }
  return (
    <>
    <div className="Educationhero">
      <motion.div className='sideline' initial={{opacity:0,y:-20,scale:0.3}} whileInView={{opacity:1,scale:1}} 
      animate={{y:0,
      
      }}
      transition={{
      duration:0.5
      }}
      ></motion.div>
      <motion.div className="Educationcont" variants={variants} initial="initial"
      animate="animate"
      whileInView="whileInView">
      {
        data.map((edu)=>{
          return(
            <motion.div className="edudetails">
            <motion.div className="edutextdetails">
              <motion.h2>
                {edu.InstituteName}
              </motion.h2>
              <motion.h1>
                {edu.Cuorse}
              </motion.h1>
              </motion.div>
              <motion.div>
              <motion.img className="edulogos"src={edu.img} />
              </motion.div>
             
             
            </motion.div>
          )
        })
      }
      </motion.div>
     
      </div>
   
     
  
     {/*<motion.div className="twelth" initial="initial"
      animate="animate"
      whileInView="whileInView">
      <motion.h2 variants={variants}>
       SMGH
      </motion.h2>
      <motion.h1 variants={variants}>
        12th
      </motion.h1>
</motion.div>
    
      <motion.div className="Engineering" initial="initial"
      animate="animate"
      whileInView="whileInView">
      <motion.h2 variants={variants}>
        R.V INSTITUTE OF TECHNOLOGY AND MANAGEMENT
      </motion.h2>
      <motion.h1 variants={variants}>
        BE IN CSE
      </motion.h1>
</motion.div>}
      </motion.div>
      <motion.div className="logoscont" variants={variants}
      initial="initial"
      animate="animate"
      whileInView="whileInView"
      >
      <motion.div className="logos" variants={variants}
       initial="initial"
      animate="animate"
      whileInView="whileInView">
        <motion.img src={school} initial="initial"
      animate="animate"
      whileInView="whileInView"></motion.img>
      </motion.div>
      <motion.div className="logos" variants={variants}
       initial="initial"
      animate="animate"
      whileInView="whileInView">
        <motion.img src={twelth} initial="initial"
      animate="animate"
      whileInView="whileInView"></motion.img>
      </motion.div>
      <motion.div className="logos" variants={variants}
       initial="initial"
      animate="animate"
      whileInView="whileInView">
        <motion.img src={rvitm} initial="initial"
      animate="animate"
      whileInView="whileInView"></motion.img>
      </motion.div>
      </motion.div>
    </div>*/}
    </>
  )
}
{/*  <motion.div className="tenth" initial="initial"
      
      animate="animate"
      whileInView="whileInView">
      <motion.h2 variants={variants}>
        BS.MADAPPA.SMARAKA VIDYA SAMASTHE
      </motion.h2>
   
      <motion.h1 variants={variants}>
       10th
      </motion.h1>
     
      </motion.div>*/}