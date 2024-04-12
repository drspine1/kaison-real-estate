import { Link } from "react-router-dom";
import data from "../buyingComponents/buyData"
import { useState } from "react";
import ListBuy from "./listbuy";
import{motion} from "framer-motion"
console.log(data)
const BuyingB = () => {
  const [buying,setBuying] = useState(data)
  return (
    <>
   <div className=" w-[90%] flex flex-col-reverse md:flex-row mt-[15rem] mb-[10rem] h-auto md:h-[34rem] mx-auto text-center gap-[5%]">
      <motion.div 
      initial={{y:"100px",opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:0.3,duration:0.5}}
      viewport={{once:true,amount:0.2}}
      className="img flex-[50%] mt-16 md:mt-0">
        <img src="/images/est5.jpg" alt="" className="w-full h-full shadow-lg overflow-hidden  object-cover shadow-slate-500"/>
      </motion.div>
      <motion.div 
       initial={{y:"100px",opacity:0}}
       whileInView={{y:0,opacity:1}}
       transition={{delay:0.6,duration:0.5}}
       viewport={{once:true,amount:0.2}}
      className="about-a_content flex-[45%]  pt-0 mt-5 md:mt-0">
        <h1 className="text-center text-3xl capitalize text-indigo-500  leading-snug pb-10">the process is simple</h1>
         <div className="buy">
          {
            <ListBuy buying={buying}/>
          }
         </div>
      </motion.div>
    </div>
    </>
    );
}
 
export default BuyingB;