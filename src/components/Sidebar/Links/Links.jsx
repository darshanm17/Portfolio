import React from 'react'
import {motion} from "framer-motion";
const variants={
  open:{
    transition:{
      staggerChildren:0.1,
    }
    ,
    
  },
  close:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1
    }
  }
}
const itemsVariants={
  open:{
   y:0,
   opacity:1
  },
  close:{
    y:50,
    opacity:0,
  

  }
}

function Links() {
  const items=["HomePage","Projects","Skills","Whats Next","Certificates","Coding-Journy","Contact"]
  return (<>
    <div className='links' variants={variants}>
      {
        items.map((item)=>{
          return(
            <motion.li variants={itemsVariants}
            whileHover={{scale:1.2}}
            whileTap={{scale:0.8}}
            ><a href={`#${item}`} key={item}>{item}</a></motion.li>
          )
        })
      }
    </div>
    </>
  )
}

export default Links