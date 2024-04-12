import FeatureSingle from "./featureSingle";

const FeatureList = ({feature}) => {
  return ( 
    <>
    <div className="feature-list">
      {
      feature.map((feature) =>{
        return <FeatureSingle key={feature.id} {...feature}/>
      })
      }
    </div>
    </>
   );
}
 
export default FeatureList;