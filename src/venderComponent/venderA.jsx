import data from "../venderComponent/venderData"
import ListVender from "../venderComponent/listVender";
import { Link } from "react-router-dom";
import { useState } from "react";
import {motion} from "framer-motion"
const VenderA = () => {
  const [vender,setVender] = useState(data)
  return ( 
    <>
    <div className=" w-[80%] md:w-[90%]  lg:w-[80%] mt-[7rem]  mx-auto text-center" >
   <motion.div
     initial={{y:"20px",opacity:0}}
     animate={{y:0,opacity:1}}
     transition={{delay:0.8,duration:0.5, type:"tween"}}
   >
   <h1 className="capitalize text-2xl font-semibold text-[#251d1d]"><Link to="/" className="uppercase ">home</Link> : need a vender?</h1>
    <div className="background  bg-indigo-200 w-32   mx-auto h-1 mt-3 mb-24"></div>
   </motion.div>
    <div>
    <ListVender vender={vender}/>
    </div>
    </div>
    </>
   );
}
 
export default VenderA;