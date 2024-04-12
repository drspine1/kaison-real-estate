import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";
const Singlebuy = ({article,desc}) => {
  const [showBuy,setShowBuy] = useState(false)
  return ( 
    <>
    <div className="singlebuy  mb-5 ">
       <div className="flex justify-between cursor-pointer border-2 p-4" onClick={()=>setShowBuy(!showBuy)}>
        <h3 className="uppercase font-semibold text-lg mb-2">{article}</h3>
        <button className="text-lg font-semibold">
          {
            showBuy? <HiOutlineChevronUp /> :<HiOutlineChevronDown />
          }
        </button>
       </div>
       <p className={`buy-desc text-xl overflow-hidden  ${showBuy ? "h-auto p-4" :"h-0"}`}>{desc}</p>
    </div>
    </>
   );
}
 
export default Singlebuy;