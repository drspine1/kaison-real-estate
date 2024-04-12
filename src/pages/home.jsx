import Agent from "../homeComponents/agent";
import DreamHouse from "../homeComponents/dreamHouse";
import HelpPeople from "../homeComponents/helpPeople";
import Hero from "../homeComponents/hero";
import HowItWork from "../homeComponents/howItWork";
import Service from "../homeComponents/service";
import Testimonial from "../homeComponents/testimonial";
import Togetherness from "../homeComponents/togetherness";

const Home = () => {
  return ( 
    <>
    <div className="home-component">
      <Hero/>
      <HowItWork/>
      <DreamHouse/>
      <HelpPeople/>
      <Service/>
    <Testimonial/>
      <Togetherness image="/images/together.jpg" tittle={`let's work together`}/>
    </div>
    </>
   );
}
 
export default Home;