import "./Hero.scss";
import scroll from "./scroll.png";
import {motion} from "framer-motion";
import dp from "/Images/Dp.png"
export default function Hero() {
  const herovariants={
       initial:{
        opacity:0,
        x:-500
       },
       animation:{
           opacity:1,
           x:0,
           transition:{
            duration:1,
            staggerChildren:0.1
           }
       },
       scrollButton:{
        opacity:0,
        y:10,
        transition:{
          duration:1,
          repeat:Infinity
        }
       }
  }
  const sidervariants={
    initial:{
      x:0
    },
    animate:{
    
    x:"-220%",
    transition:{
      duration:20,
      repeatType:"mirror",
      repeat:Infinity
    }
    }
  }
  return (
    <motion.div className="hero" >
    <motion.div className="wrapper" >
    <motion.div className="textCont" variants={herovariants} initial="initial"
    animate="animation">
      <motion.h2 variants={herovariants}>DARSHAN M</motion.h2>
      <motion.h1 variants={herovariants}>WEB DEVELOPER</motion.h1>
    
      <motion.div variants={herovariants} className="herobutton">
      <motion.button variants={herovariants} className="see" id="seeid">Scroll Down</motion.button>
      <motion.button variants={herovariants} style={{cursor:"pointer"}}>DSA</motion.button>

      </motion.div>
      <motion.img variants={herovariants} animate="scrollButton" src={scroll}/>
      </motion.div>
      </motion.div>
      <motion.div className="slidingTextContainer" variants={sidervariants} initial="initial"
      animate="animate">WEB DEVELOPER JAVA PROGRAMMER</motion.div>
        <motion.image variants={herovariants} src={dp} className="dp"></motion.image>
    </motion.div>
  
  )
}
