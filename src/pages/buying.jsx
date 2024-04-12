import BuyingA from "../buyingComponents/buyingA";
import BuyingB from "../buyingComponents/buyingB";
import Header from "../homeComponents/header";
import Togetherness from "../homeComponents/togetherness";

const Buying = () => {
  return (
    <>
    <div className="buying-page">
      <Header img="/images/buyer.jpg" tittle="how to buy "/>
      <BuyingA/>
      <BuyingB/>
      <Togetherness image="/images/together.jpg" tittle={`let's work together`}/>
    </div>
    </>
    );
}
 
export default Buying;