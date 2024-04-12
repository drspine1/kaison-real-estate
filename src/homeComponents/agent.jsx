import { FaAward } from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { BsHouseHeartFill } from "react-icons/bs";
import { FaHandPeace } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import{motion} from"framer-motion"
const Agent = () => {
  return ( 
    <>
    <motion.div 
     initial={{y:"200px",opacity:0}}
     whileInView={{y:0,opacity:1}}
     transition={{delay:0.2,type:"tween",duration:0.5}}
     viewport={{once:true, amount:0.1}}

    className="agent-component w-[85%] mx-auto text-center mt-40">
   <div className="small-tag">
   <small className="text-lg text-[rgb(111,177,252)] font-medium pb-1 block">Realtor</small>
   </div>
      <h1 className="text-3xl font-medium text-[#6fb1fc] pb-16 capitalize">meet our agents</h1>
      <div className="realtors grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pb-3">
        <div className="mb-12">
          <img src="/images/agent1.jpg" alt="" className="object-cover h-[15rem] mb-4 w-full"/>
          <h3 className="capitalize font-bold text-xl text-[midnightblue]">smith jones</h3>
          <h4 className="text-black capitalize text-xl font-semibold mt-3">realtor</h4>
          <h3 className="text-xl mt-4 flex items-center justify-center"><MdOutlinePhone  className="text-[midnightblue] font-bold mr-2"/>02032654875</h3> 
          <h3 className="text-lg mt-4 flex items-center justify-center"><MdOutlineEmail className="text-[midnightblue] font-bold mr-2"/>smithjones01@gmail.com</h3>
        </div>
        <div className="mb-12">
        <img src="/images/agent2.jpg" alt=""  className="object-cover h-[15rem]  mb-4 w-full"/>
          <h3 className="capitalize font-bold text-xl text-[midnightblue]">kings patman</h3>
          <h4 className="text-black capitalize text-xl font-semibold mt-3">realtor</h4>
          <h3 className="text-xl mt-4 flex items-center justify-center"><MdOutlinePhone  className="text-[midnightblue] font-bold mr-2"/>02032414875</h3>
          <h3 className="text-lg mt-4 flex items-center justify-center"><MdOutlineEmail className="text-[midnightblue] mr-2"/>patmanenergy@gmail.com</h3>
        </div>
        <div className="mb-12">
        <img src="/images/agent3.jpg" alt=""  className="object-cover h-[15rem] mb-4 w-full"/>
          <h3  className="capitalize font-bold text-xl text-[midnightblue]">samuel godspower</h3>
          <h4 className="text-black capitalize text-xl font-semibold mt-3">realtor</h4>
          <h3 className="text-xl mt-4 flex items-center justify-center"><MdOutlinePhone className="text-[midnightblue] font-bold mr-2"/>02033574875</h3>
          <h3 className="text-lg mt-4 flex items-center justify-center"><MdOutlineEmail className="text-[midnightblue] mr-2"/>godspowerisreal@gmail.com</h3>
        </div>
      </div>
     
   
    </motion.div>
    <motion.div
    
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{delay:0.4,type:"tween",duration:0.5}}
    viewport={{once:true, amount:0.1}}
    >
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center bg-indigo-100 p-6">
      <div className="flex">
       <span> <BsHouseHeartFill className="mx-auto text-center text-4xl text-[midnightblue] font-bld"/></span>
        <div className="ml-4">
          <h2 className="text-3xl font-semibold text-orange-500">350</h2>
          <p className="text-xl mt-6 font-semibold text-[rgb(52,49,49)]">Apartment sold</p>
        </div>
      </div>
      <div className="flex">
      <span> <FaHandPeace className="mx-auto text-center text-4xl text-[midnightblue] font-bld"/></span>
        <div className="ml-4">
          <h2  className="text-3xl font-semibold text-yellow-500">1351</h2>
          <p className="text-xl mt-6 font-semibold text-[rgb(52,49,49)]">Happy Clients</p>
        </div>
      </div>
      <div className="flex">
     <span>    <MdApartment className="mx-auto text-center text-4xl text-[midnightblue] font-bld"/></span>
        <div className="ml-1">
          <h2 className="text-3xl font-semibold text-[crimson]">30</h2>
          <p  className="text-xl mt-6 font-semibold text-[rgb(52,49,49)]">years of experience</p>
        </div>
      </div>
      <div className="flex">
        <span> <FaAward className="mx-auto text-center text-4xl text-[midnightblue] font-bld"/></span>
        <div className="ml-4">
          <h2 className="text-3xl font-semibold  text-[red]">10</h2>
          <p  className="text-xl mt-6 font-semibold text-[rgb(52,49,49)]">award wins</p>
        </div>
      </div>
     </div>
    </motion.div>
    </>
   );
}
 
export default Agent;