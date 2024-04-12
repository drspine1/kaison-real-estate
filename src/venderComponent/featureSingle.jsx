import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";
const FeatureSingle = ({id,name,desc,email,phone,company}) => {
  const [showVender,setShowVender] = useState(false)
return ( 
<>
<div className="feature-single mb-4">

<div  className="flex justify-between cursor-pointer border-2 p-4" onClick={()=>{

setShowVender(!showVender)}}>
<h3 className="uppercase font-semibold text-lg mb-2  ">{name}</h3>
<button className="text-lg font-semibold">
{
  showVender? <HiOutlineChevronUp /> :<HiOutlineChevronDown />
}
</button>
</div>
<div  className={`buy-desc text-lg overflow-hidden mt-4   ${ showVender ? "h-auto p-4" :"h-0"}`}>
  <h3 className="text capitalize text-[#383737] text-xl font-[600] pb-3">{company}</h3>
  <p className="text-xl leading-[2rem]">{desc}</p>
  <h4 className="text-xl py-3">{email}</h4>
  <h4 className="text-xl">{phone}</h4>
</div>
</div>
</>
);
}

export default FeatureSingle;