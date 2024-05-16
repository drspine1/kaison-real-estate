import { Link } from "react-router-dom";
import {motion} from "framer-motion"

import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Hero = () => {
  return ( 
    <>
    <div className="hero-component relative">
      <motion.div 
      initial={{x:"200px",y:"-50%",opacity:0}}
      animate={{x:"-50%",y:"-50%",opacity:1}}
      transition={{delay:0.3,duration:0.6,type:"tween"}}
      className="hero-content absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] text-center px-4 md:px-0  w-[100%] sm:w-[80%] md:w-[60%]   lg:w-[50%]">
        <h1 className="text-3xl md:text-4xl text-[hsl(0,0%,90%)] uppercase font-semibold leading-[3.5rem]">get your dream home </h1> 
        <div className="bg w-32 h-1 text-center mx-auto my-6"></div>
        <p className="text-[rgba(255,255,255,0.72)] text-2xl font-medium mb-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro magnam, iste id rem, fugit rerum</p> 
        <Link to="/property" className="bg-[#5463b3] px-8 py-3 text-[hsl(0,0%,90%)] text-xl uppercase font-bold rounded transform  hover:scale-[1.1] transition duration-500 " >find Property</Link>
      </motion.div>
      <div className="socials absolute right-10 top-[20%] hidden md:block">
        <Link className="text-2xl  "><FaFacebookF className="mb-3 text-[white] font-bold hover:transform hover:translate-x-2 transition-all duration-500"/></Link>
        <Link className="text-2xl"><FaLinkedinIn className="mb-3 text-[white] font-bold hover:transform hover:translate-x-2 transition-all duration-500"/></Link>
        <Link className="text-2xl"><FaSquareInstagram className="mb-3 text-[white] font-bold hover:transform hover:translate-x-2 transition-all duration-500"/></Link>
        <Link className="text-2xl"><FaXTwitter className="mb-3 text-[white] font-bold hover:transform hover:translate-x-2 transition-all duration-500"/></Link>
      </div>
    </div>
    </>
   );
}
 
export default Hero;