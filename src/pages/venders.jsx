
import Header from "../homeComponents/header";
import Togetherness from "../homeComponents/togetherness";
import VenderA from "../venderComponent/venderA";


const Venders = () => {

  return ( 
    <>
    <div className="vender-page">
      <Header img="/images/vender.jpg" tittle="venders"/>
     <VenderA/>
      <Togetherness image=" /images/together.jpg"tittle={`let's work together`}/>
    </div>
    </>
   );
}
 
export default Venders;