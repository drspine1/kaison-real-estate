import { Link } from "react-router-dom";

const Service = () => {
  return ( 
    <>
    <div className="service-container w-[85%] mx-auto text-center mt-40 ">
      <div className="small-tag">
      <small className="text-lg text-[#6fb1fc] font-medium pb-1 block">service</small>
      </div>
      <h2 className="text-3xl font-medium text-[#6fb1fc] pb-16">our services</h2>
      <div className="services grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="hover:transform hover:scale-[1.1] transition duration-500 ">
          <img src="/images/buyer.jpg" alt="buy" className="h-[15rem] overflow-hidden w-full"/>
        <div className="bg-[rgb(85,68,237)] p-5 ">
        <h1 className="text-2xl capitalize font-bold text-white leading-snug mb-3">for buyers</h1>
            <p className="text-left  text-[hsl(0,0%,90%)] text-lg pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla voluptatum dicta vel. Non, praesentium!</p>
            <Link to="/buying" className="uppercase font-bold text-white underline ">more about buying</Link>
        </div>
        </div>
        <div className="hover:transform hover:scale-[1.1] transition duration-500 ">
        <img src="/images/seller.jpg" alt="sale" className="h-[15rem] w-full"/>
         <div  className="bg-[rgb(85,68,237)] p-5 ">
         <h1 className="text-2xl capitalize font-bold text-white leading-snug mb-3">for sellers</h1>
            <p className="text-left  text-[hsl(0,0%,90%)] text-lg pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla voluptatum dicta vel. Non, praesentium!</p>
            <Link to="/selling" className="uppercase font-bold text-white underline ">more about selling</Link>
         </div>
        </div>
        <div className="hover:transform hover:scale-[1.1] transition duration-500 ">
        <img src="/images/listings.jpg" alt="listing" className="h-[15rem]  w-full"/>
          <div   className="bg-[rgb(85,68,237)] p-5">
          <h1 className="text-2xl font-bold capitalize text-white leading-snug mb-3">listings</h1>
            <p className="text-left  text-[hsl(0,0%,90%)] text-lg pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla voluptatum dicta vel. Non, praesentium!</p>
            <Link to="/property" className="uppercase font-bold text-white underline ">more about listing</Link>
          </div>
        </div>
      </div>
    </div>
    </>
   );
}
 
export default Service;