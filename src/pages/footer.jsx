import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return ( 
    <>
    <div className="footer-component w-full bg-indigo-900 mx-auto text-center py-12 px-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div className="mb-12">
        <h1 className="text-xl uppercase font-medium text-white pb-5">navigate</h1>
        
        <ul className="text-[hsl(0,0%,90%)] ">
          <li className="capitalize font-medium pb-2 underline text-lg"><Link>home</Link></li>
          <li className="capitalize font-medium pb-2 underline text-lg"><Link>about</Link></li>
          <li className="capitalize font-medium pb-2 underline text-lg"><Link>contact</Link></li>
          <li className="capitalize font-medium pb-2 underline text-lg"><Link>buying</Link></li>
          <li className="capitalize font-medium pb-2 underline text-lg"><Link>selling</Link></li>
          <li className="capitalize font-medium pb-2 underline text-lg"><Link>venders</Link></li>
          <li  className="capitalize font-medium pb-2 underline text-lg"><Link>listings</Link></li>
        </ul>
        <div className="socials flex justify-center mt-5 text-[hsl(0,0%,90%)] ">
          <Link className="mx-1 text-lg font-bold hover:transform hover:translate-y-[-5px] transition-all duration-500"><FaFacebookF/></Link>
          <Link className="mx-1 text-lg font-bold hover:transform hover:translate-y-[-5px] transition-all duration-500"><FaLinkedinIn/></Link>
          <Link className="mx-1 text-lg font-bold hover:transform hover:translate-y-[-5px] transition-all duration-500"><FaSquareInstagram/></Link>
          <Link className="mx-1 text-lg font-bold hover:transform hover:translate-y-[-5px] transition-all duration-500"><FaXTwitter/></Link>
        </div>
      </div>
      <div className="mb-12">
        <h1 className="text-xl uppercase font-medium text-white pb-5"> guides to buying your first home</h1>
        <ul  className="text-[hsl(0,0%,90%)] ">
          <li  className="capitalize font-medium pb-2  text-lg">evaluate property</li>
          <li  className="capitalize font-medium pb-2  text-lg">meet your agent</li>
          <li  className="capitalize font-medium pb-2  text-lg">close the deal</li>
          <li  className="capitalize font-medium pb-2  text-lg">have your new home</li>
        </ul>
        <form  className="mt-3  overflow-hidden mb-3  w-full   mx-auto">
          <input type="text"placeholder="Email Address" className="outline-none rounded p-3  bg-white w-full"/>
          <button type="submit" className="bg-indigo-500  text-white   overflow-hidden text-lg uppercase mt-6 px-6 py-2 rounded">sign up</button>
        </form>
        <small className="text-[#d5cdcd] text-lg">we respect your privacy</small>
      </div>
      <div className="mb-12">
        <Link to="/property" className="text-xl uppercase font-medium text-white bg-indigo-500 py-3 px-5 rounded">find property</Link>
        <div  className="text-[hsl(0,0%,90%)] pt-5 leading-[2rem] text-lg">
          <h4>1234 street St.los Angeles,<br />Call 125454808</h4>
          <Link>kaison124@gmail.com</Link>
        </div>
      </div>
      </div>
      <hr className="stubborn text-[#c43b3b] z-20 mt-6 block"/>
      <p className="text-[hsl(0,0%,90%)] text-lg pt-3">kaison | privacy | terms&conditions | Desighn By <Link className="underline">GoLive</Link></p>
    </div>
    </>
   );
}
 
export default Footer;