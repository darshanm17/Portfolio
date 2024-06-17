import { useState } from 'react';
import Links from './Links/Links';
import './Sidebar.scss';
import Togglebutton from './Togglebutton/Togglebutton';
import {motion} from "framer-motion";

function Sidebar() {
  const[open,setopen]=useState(false);
  console.log(open);
  const variants={
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:20
  }
    },
    close:{
      clipPath:"circle(30px at 50px 50px)",
      transition:{
    
        type:"spring",
        stiffness:400,
        damping:40
        
      },

    },
  }
  return (
    <motion.div className='sidebar'
    animate={open?"open":"close"}
    >
    <motion.div className='bg' variants={variants}>
    <Links/>
    </motion.div>
    <Togglebutton setopen={setopen}/>
    </motion.div>
  )
}

export default Sidebar