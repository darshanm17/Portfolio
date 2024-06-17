import "./Navbar.scss";
import logo from './Images/logo-nobg.png'
import {motion} from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  return (
    <>
    <div className="navbarscss">
      <Sidebar/>  
    <div className="wrapper">
    <ul className="unorderdlist">
      <motion.li
      initial={{opacity:0,scale:0.5}}
      animate={{opacity:1,scale:1}}
      transition={{duration:1}}
      
      ><img src={logo} className="Logo"/></motion.li>
      {//<li><img src={logo} className="Logo"/></li>
      }
    </ul>

    </div>
    </div>
    </>
    )
}

export default Navbar