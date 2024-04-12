import Header from "../homeComponents/header";
import Togetherness from "../homeComponents/togetherness";
import { Link } from "react-router-dom";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import {motion} from "framer-motion"
import { VscLocation } from "react-icons/vsc";


const Contact = () => {
  return ( 
    <>
    <div className="contact-page">
      <Header img="/images/contactest.jpg" tittle="contact us"/>
      <div   className="buying-a_component  w-full text-center mx-auto mt-28">
      <motion.div
        initial={{y:"20px",opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{delay:0.8,duration:0.5, type:"tween"}}
      >
        <h1 className="capitalize text-2xl font-semibold text-[rgb(37,29,29)]"><Link to="/" className="uppercase ">home</Link> : get in touch</h1>
    <div className="background  bg-indigo-200 w-32   mx-auto h-1 mt-3 mb-24"></div>
      </motion.div>
    <div className="flex flex-col md:flex-row  w-[90%] mx-auto text-center">
      <div className="flex-[50%]">
        <div className="mb-10">
         <h5 className="bg-indigo-800 w-[4rem] h-[3rem] grid place-items-center text-2xl text-white font-bold rounded-full mx-auto"> <VscLocation className="mx-auto"/></h5>
          <h3 className="uppercase font-semibold text-lg pt-4">address:</h3>
          <p className="pt-2 text-lg font-semibold pb-1 text-[#2c1e1eec]">198 West 21th Street, suite 721</p>
          <h5 className="text-[#2c1e1eec] text-lg font-semibold">New York NY 10016</h5>
        </div>
        <div className="mb-10">
          <h5 className="bg-indigo-800 w-[4rem] h-[3rem] grid place-items-center text-2xl text-white font-bold rounded-full mx-auto"><MdOutlinePhone className="mx-auto"/></h5>
          <h3 className="uppercase font-semibold text-lg pt-4">phone:</h3>
          <h4 className="text-[#2c1e1eec] text-lg font-semibold">+1235235598</h4>
        </div>
        <div>
          <h5 className="bg-indigo-800 w-[4rem] h-[3rem] grid place-items-center text-2xl text-white font-bold rounded-full mx-auto"><MdOutlineEmail className="mx-auto"/></h5>
          <h3 className="uppercase font-semibold text-lg pt-4">email:</h3>
          <p className="text-[#2c1e1eec] text-lg font-semibold">donkhan@gmail.com</p>
        </div>
      </div>
      <form className="flex-[50%] bg-indigo-800 p-12 rounded-md mt-28 md:mt-0" >
        <input type="text" placeholder="full name" className="w-full mb-8 outline-none p-4 text-lg rounded"/>
        <input type="email" placeholder="email w-id" className="w-full mb-8 outline-none p-4 text-lg rounded"/>
        <input type="phone" placeholder="phone" className="w-full mb-8 outline-none p-4 text-lg rounded"/>
        <textarea type="text" placeholder="enter your message"className="w-full mb-8 outline-none p-4 text-lg rounded"></textarea>
        <button className="mt-3 rounded text-lg uppercase font-semibold text-indigo-700 bg-[hsl(0,0%,90%)] hover:bg-white transition duration-500 w-full py-4">submit</button>
      </form>
    </div>
      </div>
      <Togetherness image="/images/together.jpg" tittle="let's work together"/>
    </div>
    </>
   );
}
 
export default Contact;