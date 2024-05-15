import { VscLocation } from "react-icons/vsc";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoMdBed } from "react-icons/io";
import { FaUser, FaUserAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { LuClock10 } from "react-icons/lu";
import {motion} from "framer-motion"

import { useState } from "react";
import Header from "../homeComponents/header";
import Togetherness from "../homeComponents/togetherness";
import data from "../listingsComponent/listingsData"
console.log(data)
const Property = () => {
  const [property,setProperty] =useState(data)
  return ( 
    <>
    <div className="property-page">
      <Header img="/images/propertybg.jpg" tittle="our property"/>
     <div className="prop w-[90%] mx-auto text-center mt-40"> 
       <motion.div
       
       initial={{y:"50px",opacity:0}}
       animate={{y:0,opacity:1}}
       transition={{delay:0.8,duration:0.5, type:"tween"}}
       
       
       >
       <div className="small-tag">
     <small className="text-lg lg:text-sm text-[#6fb1fc] font-medium pb-1 block capitalize">what we offer</small>
     </div>
      <h2 className="text-3xl font-medium text-[#6fb1fc] pb-16">properties</h2>
       </motion.div>
     <div className="properties  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-16">
        {
          property.map((property) =>{
            const {id,location,img,name,time,prize,category,bathroom,bedroom,garage,user,foot,background} = property
            return <div className="property w-[100%]" key={id}>
              <div className="img relative mx-auto text-center">
              <img src={img} className="w-[100%] h-[15rem]   object-cover overflow-hidden"/>
          <h2 className={`absolute top-6 left-6 uppercase tetx-lg font-semibold text-white w-28 py-1 rounded ${!background?"bg-[orange]" :"bg-[orangered]"}`}>{category}</h2>
                 </div> 

                 <div className="border-2">
                 <h3 className="text-xl md:text-lg mt-8 mb-2 font-medium">{name}</h3>
              <h4 className="flex items-center justify-center text-lg lg:text-sm"><VscLocation className="text-indigo-400 font-bold mr-1 text-xl"/>{location}</h4>
                  
              <div className="property-cat mt-4 border-t px-5">
                  <div className="flex justify-between mt-3 items-center">
                  <h3 className="flex items-center text-lg lg:text-sm"><HiMiniSquares2X2 className="mr-2 font-bold text-indigo-400 text-lg md:text-xl"/>{foot}</h3>
                <h3 className="flex items-center text-lg lg:text-sm"><FaCarSide className="mr-2 font-bold text-indigo-400 text-lg md:text-xl"/>{garage}</h3>
                  </div>
                <div className="flex justify-between mt-3 items-center">
                <h3  className="flex items-center text-lg lg:text-sm"><IoMdBed className="mr-2 font-bold text-indigo-400 text-lg md:text-xl"/>{bedroom}</h3>
                <h3 className="flex items-center text-lg lg:text-sm"><GiBathtub className="mr-2 font-bold text-indigo-400 text-lg md:text-xl"/>{bathroom}</h3>
                </div>
             
              </div>
              <div className="flex justify-between border-t mt-5 py-5 px-5">
                  <h3 className="flex items-center capitalize text-lg lg:text-sm"><FaUserAlt className="mr-2 font-bold text-indigo-400 text-lg md:text-xl"/>{user}</h3>
                  <h3 className="flex items-center text-lg lg:text-sm"><LuClock10 className="mr-2 font-bold text-indigo-400 text-lg md:text-xl "/>{time}</h3>
                </div>
                 </div>

                  <h2 className="bg-indigo-400 py-3  text-white text-xl font-bold shadow-md shadow-blue-300">${prize}</h2>
            </div>
          })
        }
        </div>
     </div>

      <Togetherness image="/images/together.jpg" tittle="let's work together"/>
    </div>
    </>
   );
}
 
export default Property;