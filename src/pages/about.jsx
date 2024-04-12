import AboutA from "../aboutComponent/aboutA";
import AboutB from "../aboutComponent/aboutB";
import Header from "../homeComponents/header";
import Agent from "../homeComponents/agent";
import Togetherness from "../homeComponents/togetherness";
const About = () => {
  return ( 
    <>
    <div className="about-page">
      <Header img="/images/aboutest.jpg" tittle="about us"/>
      <AboutA/>
      <AboutB/>
      <Agent/>
      <Togetherness image="/images/together.jpg" tittle={`let's work together`}/>
    </div>
    </>
   );
}
 
export default About;