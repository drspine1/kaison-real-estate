import{motion} from "framer-motion"
const HowItWork = () => {
  return ( 
    <>
    <motion.div 
    initial={{y:"250px",opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{delay:0.2,type:"tween",duration:0.5}}
    viewport={{once:true}}
    className="how_it-work w-[90%] mx-auto text-center mt-28 mb-6">
     <div className="test ">
     <small className="text-lg text-[#6fb1fc] font-medium pb-1 block">work flow</small>
     </div>
      <h1 className="text-3xl font-medium text-[#6fb1fc] pb-16">How it works</h1>
      <div className="how-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10">
        <motion.div 
          initial={{y:"45px",opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.2,type:"tween",duration:0.5}}
          viewport={{once:true}}
        
        className="mb-8">
          <h1 className="text-2xl font-semibold mb-6  text-white bg-[#0f0f35] w-20 h-20 grid place-items-center  mx-auto shadow-md shadow-zinc-600">01</h1>
          <h3 className="text-3xl font-medium pb-4 text-[black] capitalize">evaluate property</h3>
          <p className="leading-[2rem] text-xl text-[black]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil amet voluptates perspiciatis. Aspernatur, rem obcaecati. Reprehenderit</p>
        </motion.div>
        <motion.div 
          initial={{y:"45px",opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.4,type:"tween",duration:0.5}}
          viewport={{once:true}}
        
        className="mb-8">
        <h1 className="text-2xl font-semibold mb-6  text-white bg-[#0f0f35] w-20 h-20 grid place-items-center  mx-auto shadow-md shadow-zinc-600">02</h1>
          <h3 className="text-3xl font-medium pb-3 text-[black] capitalize">meet your agent</h3>
          <p className="leading-[2rem] text-xl text-[black]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil amet voluptates perspiciatis. Aspernatur, rem obcaecati. Reprehenderit </p>
        </motion.div>
        <motion.div 
          initial={{y:"45px",opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:0.6,type:"tween",duration:0.5}}
          viewport={{once:true}}
        
        className="mb-8">
        <h1 className="text-2xl font-semibold mb-6  text-white bg-[#0f0f35] w-20 h-20 grid place-items-center  mx-auto shadow-md shadow-zinc-600">03</h1>
          <h3 className="text-3xl font-medium pb-3 text-[black] capitalize">close the deal</h3>
          <p className="leading-[2rem] text-xl text-[black]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil amet voluptates perspiciatis. Aspernatur, rem obcaecati. Reprehenderit</p>
        </motion.div>

        < motion.div
          initial={{y:"45px",opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:.2,type:"tween",duration:0.5}}
          viewport={{once:true}}
        
        className="mb-8">
        <h1 className="text-2xl font-semibold mb-6  text-white bg-[#0f0f35] w-20 h-20 grid place-items-center  mx-auto shadow-md shadow-zinc-600">04</h1>
          <h3 className="text-3xl font-medium pb-3 text-[black] capitalize">have your property</h3>
          <p className="leading-[2rem] text-xl text-[black]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil amet voluptates perspiciatis. Aspernatur, rem obcaecati. Reprehenderit</p>
        </ motion.div>
      </div>
    </motion.div>
    </>
   );
}
 
export default HowItWork;