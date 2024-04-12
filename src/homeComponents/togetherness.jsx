import {motion} from "framer-motion"
import { Link } from "react-router-dom";
const Togetherness = ({image,tittle}) => {
  return ( 
    <>
     <div className="footerImage-container w-[100%] h-[25rem] overflow-hidden mt-32  ">
    <div className="h-[100%] w-[100%] bg-indigo-900 grid place-items-center relative ">
    <div className="img w-full h-full absolute">
      <img src={image} alt="about image" className="w-full h-full opacity-40 z-[-10]" />
    </div>
    <motion.div 
     initial={{y:"250px",opacity:0}}
     whileInView={{y:0,opacity:1}}
     viewport={{once:true}}
     transition={{delay:1,duration:0.5,type:"tween",delay:0.3}}
    className="mx-auto text-center">
    <div className="tittle  text-white mx-auto text-center text-lg p-4 w-[100%]">
      <h1 className="text-[lemon] z-10 uppercase font-semibold text-3xl lg:text-5xl leading-[3.5rem]  ">
        {tittle}
      </h1>
    </div>
    <div className="underline bg-[#f8f8c2] w-24 h-1  text-center mx-auto mb-12"></div>
    <Link to="/contact" className="border bg-transparent transition duration-500  border-[rgb(243,200,181)] text-[white] p-3 uppercase text-lg font-medium hover:bg-[#fd8451] z-10 cursor-pointer relative [50%]">contact us</Link>
     
    </motion.div>
   </div>
   </div>
    </>
   );
}
 
export default Togetherness;