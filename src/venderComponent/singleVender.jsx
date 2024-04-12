
import FeatureList from "./featureList";
const SingleVender = ({heading,feature}) => {
  
  return ( 
    <>
        <div className="single-vender mt-8">
          <div>
            <h1 className="mb-8  text-xl text-indigo-500 font-semibold uppercase">{heading}</h1>
            <div className="feature">
             <FeatureList feature={feature}/>
            </div>
          </div>
        </div>
    </>
   );
}
 
export default SingleVender;