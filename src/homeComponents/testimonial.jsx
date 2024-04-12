import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import data from "../homeComponents/testimonialData"
console.log(data)
const Testimonial = () => {
  const [testi,setTesti] = useState(data)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  return ( 
    <>
     <div className="w-[85%] md:w-3/4  mx-auto mt-40 text-center mb-20">
      <div className=" test">
      <small  className="text-lg text-[#6fb1fc] font-medium pb-1 block">testimonials</small>
      </div>
      <h1 className="text-3xl font-medium text-[#6fb1fc] pb-16 capitalize">what our client say</h1>
      <div className="">
      <Slider {...settings}>
        {
        testi.map((t)=>{
          const {img,name,article,id} =t
          return <div key={id} className="h-[450px] rounded-xl bg-white shadow-sm  overflow-hidden shadow-[grey] border">
            <div className="img-container h-56 rounded-t-xl bg-indigo-700 flex justify-center items-center">
              <img src={img} className="w-44 h-44 rounded-full"/>
            </div>
            <div className="test-container flex flex-col justify-center items-center px-3">
              <h3 className="text-2xl capitalize pt-3 font-semibold">{name}</h3>
              <p className="text-lg font-medium pt-3 items-baseline italic">{article}</p> 
            </div>
          </div>
        })
        }
       </Slider>
      </div>
     </div>
    </>
   );
}
 
export default Testimonial;