import { NavLink,Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { useState } from "react";
const NavBar = () => {
  const activeNav = "text-emerald-300"
  const inActive =""
  const [showNav,setShowNav] =useState(false) 
  return ( 
    <>
    <header className="w-full h-6rem sticky top-0 left-0 bg-[#0f0f35] z-50 ">
    <nav className=" p-6 flex justify-between  text-white   relative">
      <div className="logo flex items-center text-xl lg:text-2xl font-semibold uppercase ">
        <MdRealEstateAgent className="text-3xl"/>
        <h1 className="ml-3">kaison <br />real  estate</h1>
      </div>
      <ul className="hidden md:block mt-3">
        <li className="inline-block mx-2 bp:text-2xl text-2xl capitalize font-medium"><NavLink to="/" className={({isActive})=> isActive? activeNav : inActive}>home</NavLink></li>
        <li className="inline-block mx-2 bp:text-2xl text-2xl capitalize font-medium"><NavLink to="/about" className={({isActive})=> isActive? activeNav : inActive}>about us</NavLink></li>
        <li className="inline-block mx-2 bp:text-2xl text-2xl capitalize font-medium"><NavLink to="/buying" className={({isActive})=> isActive? activeNav : inActive}>buying</NavLink></li>
        <li className="inline-block mx-2 bp:text-2xl text-2xl capitalize font-medium"><NavLink to="/selling" className={({isActive})=> isActive? activeNav : inActive}>selling</NavLink></li>
        <li className="inline-block mx-2 bp:text-2xl text-2xl capitalize font-medium"><NavLink to="vender" className={({isActive})=> isActive? activeNav : inActive}>vender</NavLink></li>
        <li className="inline-block mx-2 bp:text-2xl text-2xl capitalize font-medium"><NavLink to="/contact" className={({isActive})=> isActive? activeNav : inActive}>contact</NavLink></li>
      </ul>

      <ul className={`nav-links block md:hidden absolute left-0 top-[100%]  bg-indigo-950 w-2/4 h-screen text-center p-5 pt-8 transition duration-500 ${showNav? "left-0":"left-[-100%]"}`}>
        <li className="block mx-3   text-2xl capitalize font-medium mb-4" onClick={()=>setShowNav(false)}><Link to="/">home</Link></li>
        <li className="block mx-3  text-2xl capitalize font-medium mb-4" onClick={()=>setShowNav(false)}><Link to="/about">about us</Link></li>
        <li className="block mx-3  text-2xl capitalize font-medium mb-4" onClick={()=>setShowNav(false)}><Link to="/buying">buying</Link></li>
        <li className="block mx-3  text-2xl capitalize font-medium mb-4" onClick={()=>setShowNav(false)}><Link to="/selling">selling</Link></li>
        <li className="block mx-3  text-2xl capitalize font-medium mb-4" onClick={()=>setShowNav(false)}><Link to="vender">vender</Link></li>
        <li className="block mx-3  text-2xl capitalize font-medium mb-4" onClick={()=>setShowNav(false)}><Link to="/contact">contact</Link></li>
      </ul>
     
      <div className="toggle-btn block text-3xl md:hidden ">
        <button onClick={()=>setShowNav(!showNav)}>
          {
            showNav ? <FaTimes/> : <HiMenu/>
          }
          </button>
      </div>
    </nav>
    </header>
    </>
   );
}
 
export default NavBar;