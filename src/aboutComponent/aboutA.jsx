import { Link } from "react-router-dom";
import{motion} from "framer-motion"
const AboutA = () => {
  return ( 
    <>
  <div className="about-a  w-full text-center mx-auto mt-28">
   <motion.div
   initial={{y:"20px",opacity:0}}
   animate={{y:0,opacity:1}}
   transition={{delay:0.8,duration:0.5, type:"tween"}}
   >
   <h1 className="capitalize text-2xl font-semibold text-[#251d1d]"><Link to="/" className="uppercase ">home</Link> : get to know us</h1>
    <div className="background  bg-indigo-200 w-32   mx-auto h-1 mt-3 mb-24"></div>
   </motion.div>
  <div className=" flex flex-col md:flex-row mt-12 h-auto md:h-[34rem]">
      <div className="img flex-[60%] ">
        <img src="/images/est9.jpg" alt="" className="w-full h-full"/>
      </div>
     <div className="flex-[40%] bg-[rgb(85,68,237)]">
     <motion.div 
      
      initial={{x:"200px",opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{delay:0.2,type:"tween",duration:0.5}}
      viewport={{once:true, amount:0.1}}

      className="about-a_content    p-10">
        <h1 className="text-left text-3xl capitalize text-white leading-snug pb-6">welcome to kaison,a real estate agency</h1>
        <p className="text-left  text-[hsl(0,0%,90%)] text-xl md:text-lg pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, recusandae. Aliquid repellendus minima cumque dolor.</p>

        <p className="text-left  text-[hsl(0,0%,90%)] text-xl md:text-lg pb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptate?</p>

        <p className="text-left  text-[hsl(0,0%,90%)] text-xl md:text-lg pb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, vero? Quia, molestiae voluptatem exercitationem maxime vel sed ipsa error eum blanditiis praesentium culpa!</p>
        <Link to="/property" className="uppercase font-bold text-white underline ">find property</Link>
      </motion.div>
     </div>
    </div>
  </div>
    </>
   );
}
 
export default AboutA;