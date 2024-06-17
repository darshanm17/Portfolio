import {motion} from "framer-motion";

function Test() {
  return (
    <div className="Testcont">
      <motion.div 
      initial={{opacity:0.5,scale:0.5}}
      //animate={{opacity:1,x:200,y:400,scale:1}} 
      transition={{}} 
      whileHover={{opacity:1,scale:2}}
      drag
       className="box"></motion.div>
    </div>
  )
}

export default Test