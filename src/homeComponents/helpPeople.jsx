import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";
import{motion} from"framer-motion"
const HelpPeople = () => {
  return ( 
    <>
    <div className="help-people mt-40 mx-auto w-[100%] text-center">
     <div className="small-tag">
     <small className="text-lg text-[#6fb1fc] font-medium pb-1 block capitalize">help</small>
     </div>
      <h2 className="text-3xl font-medium text-[#6fb1fc] pb-16">how we help people</h2>
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.5,type:"tween",duration:0.5}}
      viewport={{once:true,amount:0.1}}
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-24 py-12 bg-[rgb(85,68,237)] text-white">
       <div>
        <HiOutlineBuildingOffice className="mx-auto text-5xl font-semibold mb-4"/>
        <h3 className="text-2xl font-semibold pb-3">Sell home or office</h3>
        <p className="text-[hsl(0,0%,90%)] text-xl ">Minus quod cupiditate voluptates expedita quis fugiat amet officia deleniti unde error modi eum, cum vitae deserunt aspernatur </p>
       </div>
       <div>
       <HiOutlineBuildingOffice2 className="mx-auto text-5xl font-semibold mb-4"/>
        <h3 className="text-2xl font-semibold pb-3">Rent home or office</h3>
        <p className="text-[hsl(0,0%,90%)] text-xl ">Minus quod cupiditate voluptates expedita quis fugiat amet officia deleniti unde error modi eum, cum vitae deserunt aspernatur </p>
       </div>
       <div>
       <HiOutlineHomeModern className="mx-auto text-5xl font-semibold mb-4"/>
        <h3 className="text-2xl font-semibold pb-3">Buy home or office</h3>
        <p className="text-[hsl(0,0%,90%)] text-xl ">Minus quod cupiditate voluptates expedita quis fugiat amet officia deleniti unde error modi eum, cum vitae deserunt aspernatur </p>
       </div>
      </motion.div>
    </div>
    </>
   );
}
 
export default HelpPeople;