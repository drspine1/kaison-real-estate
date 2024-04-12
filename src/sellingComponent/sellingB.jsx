import { useState } from "react";
import ListSell from "./listSell";
import data from "../sellingComponent/sellerData"
import{motion} from "framer-motion"
const SellingB = () => {
  const [selling,setSelling] = useState(data)
  return ( 
    <>
    <div className=" w-[95%] flex flex-col-reverse md:flex-row mt-[15rem] mb-[10rem] h-auto md:h-[34rem] mx-auto text-center gap-[5%]">
     
       <motion.div 
            initial={{y:"100px",opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{delay:0.6,duration:0.5}}
            viewport={{once:true,amount:0.2}}
       className="about-a_content flex-[45%]  pt-0 mt-32 md:mt-0">
         <h1 className="text-center text-3xl capitalize text-indigo-500  leading-snug pb-10">the process is simple</h1>
          <div className="buy">
           {
             <ListSell selling={selling}/>
           }
          </div>
       </motion.div>
       <motion.div
             initial={{y:"100px",opacity:0}}
             whileInView={{y:0,opacity:1}}
             transition={{delay:0.3,duration:0.5}}
             viewport={{once:true,amount:0.2}}
       className="img flex-[50%] ">
         <img src="/images/est6.jpg" alt="" className="w-full h-full shadow-lg overflow-hidden  object-cover shadow-slate-500"/>
       </motion.div>
     </div>
     </>
   );
}
 
export default SellingB;