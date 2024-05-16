import { IoIosCheckmark } from "react-icons/io";
import {motion} from"framer-motion"
const AboutB = () => {
  return ( 
    <>
    <div className="value-quality mt-40 w-[90%] mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-20 overflow-hidden">
      <motion.div 
      
      initial={{x:"-45px",opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{delay:0.9,type:"tween",duration:0.5}}
      viewport={{once:true, amount:0.1}}
      className="value text-left  justify-between">
        <h2 className="text-3xl font-medium pb-4 text-[black] capitalize">our value</h2>
        <p className="leading-[2rem] text-lg text-[black]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam harum, voluptates accusamus eaque architecto amet est nisi delectus ipsum voluptate natus quidem sint modi nulla accusantium atque libero facere molestiae Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="leading-[2rem] text-lg font-medium text-[black] pb-6 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam necessitatibus debitis, ab maxime eligendi corrupti repellat fugit nostrum obcaecati illum! Qui aperiam labore laborum ut.</p>
      </motion.div>
      <motion.div 
       initial={{x:"200px",opacity:0}}
       whileInView={{x:0,opacity:1}}
       transition={{delay:0.2,type:"tween",duration:0.5}}
       viewport={{once:true, amount:0.1}}
      className="quality text-left  justify-between">
        <h2 className="text-3xl font-medium pb-4 text-[black] capitalize">our quality</h2>
        <p className="leading-[2rem] text-lg font-medium text-[black] pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident itaque repellat nihil! Perspiciatis dicta quod repudiandae porro, fugit praesentium rerum. Consequuntur!</p>
        
          <ul>
            <li className="flex pb-2 text-center text-lg"><IoIosCheckmark className="bg-indigo-400 text-2xl text-white font-bold rounded mr-2"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure </li>
            <li className="flex pb-2 text-center text-lg"><IoIosCheckmark className="bg-indigo-400 text-2xl text-white font-bold rounded mr-2"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure </li>
            <li className="flex pb-2 text-center text-lg"><IoIosCheckmark className="bg-indigo-400 text-2xl text-white font-bold rounded mr-2"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure </li>
            <li className="flex pb-2 text-center text-lg"><IoIosCheckmark className="bg-indigo-400 text-2xl text-white font-bold rounded mr-2"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure </li>
          </ul>
      </motion.div>
    </div>
    </>
   );
}
 
export default AboutB;