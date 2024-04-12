import Header from "../homeComponents/header";
import Togetherness from "../homeComponents/togetherness";
import SellingA from "../sellingComponent/sellingA";
import SellingB from "../sellingComponent/sellingB";

const Selling = () => {
  return ( 
    <>
    <div className="selling-page">
      <Header img="/images/seller.jpg" tittle="how to sell"/>
      <SellingA/>
      <SellingB/>
      <Togetherness image=" /images/together.jpg"tittle={`let's work together`}/>
    </div>
    </>
   );
}
 
export default Selling;