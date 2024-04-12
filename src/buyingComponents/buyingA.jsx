import { Link } from "react-router-dom";
import{motion} from"framer-motion"
const BuyingA = () => {
  return ( 
    <>
    <div className="buying-a_component  w-full text-center mx-auto mt-28">
 <motion.div
 initial={{y:"20px",opacity:0}}
 animate={{y:0,opacity:1}}
 transition={{delay:0.8,duration:0.5, type:"tween"}}
 >
 <h1 className="capitalize text-2xl font-semibold text-[#251d1d]"><Link to="/" className="uppercase ">home</Link> : ready to buy?</h1>
    <div className="background  bg-indigo-200 w-32   mx-auto h-1 mt-3 mb-24"></div>
 </motion.div>
      <div className=" flex flex-col md:flex-row mt-12 h-auto md:h-[34rem]">
      <div className="left-buy flex-[40%]  bg-[rgb(85,68,237)] p-10">
     <motion.div
     initial={{y:"200px",opacity:0}}
     whileInView={{y:0,opacity:1}}
     transition={{delay:0.3,duration:0.5}}
     viewport={{once:true,amount:0.1}}
     >
     <h1 className="text-left text-3xl capitalize text-white leading-snug pb-6">why buy with us</h1>
        <p  className="text-left  text-[hsl(0,0%,90%)] text-xl md:text-lg pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum explicabo dolorem porro eaque dignissimos nostrum ipsum iste sint debitis soluta, rem, consectetur tempore harum quaerat ea minus a iure!</p>
        <p  className="text-left  text-[hsl(0,0%,90%)] text-xl md:text-lg pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum explicabo dolorem porro eaque dignissimos nostrum ipsum iste sint debitis soluta, rem, consectetur tempore harum quaerat ea minus a iure!</p>

        <Link to="/property" className="uppercase font-bold text-white underline ">find property</Link>
     </motion.div>
      </div>
      <div className="right-img-buy flex-[60%]">
         <img src="/images/est7.jpg" alt=""  className="w-full h-full"/>
      </div>
      </div>
    </div>
    </>
   );
}
 
export default BuyingA;