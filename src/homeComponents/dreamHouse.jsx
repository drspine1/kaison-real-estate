import { Link } from "react-router-dom";
import{motion} from "framer-motion"
const  DreamHouse = () => {
  return (
    <>
    <div className="dream-house w-[100%] text-center mx-auto flex flex-col md:flex-row mt-40 mb-14 h-auto md:h-[32rem]">
   <div className="flex-[40%] bg-[rgb(85,68,237)]">
   <motion.div 
      initial={{x:"-200px",opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{delay:0.2,type:"tween",duration:0.5}}
      viewport={{once:true, amount:0.1}}
      className="dream-content  p-10 text-left">
        <h2 className="text-left text-4xl capitalize text-white leading-snug pb-6">let's make your <br />dream house, your <br />home.</h2>
        <p className="text-left  text-[hsl(0,0%,90%)] text-xl md:text-lg pb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nam ex culpa natus tempora architecto vero cum quia quis, odit nihil quae asperiores ducimus est! A cumque esse pariatur voluptate, inventore explicabo voluptatibus iusto voluptas nemo magnam perferendis ipsum tempore.</p>
        <Link to="/property" className="uppercase font-bold text-white underline ">find property</Link>
      </motion.div>
   </div>
      <div className="dream-img flex-[60%] pb-6 h-full">
        <img src="/images/interior4.jpg" alt=""  className="w-[100%] h-[32rem]"/>
      </div>
    </div>
    </>
   );
}
 
export default DreamHouse ;