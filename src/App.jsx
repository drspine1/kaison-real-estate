import { BrowserRouter,Routes,Route } from "react-router-dom"
import NavBar from "./pages/navBar"
import Home from "./pages/home"
import Footer from "./pages/footer"
import About from "./pages/about"
import Buying from "./pages/buying"
import Selling from "./pages/selling"
import Venders from "./pages/venders"
import Contact from "./pages/contact"
import ScrollToTop from "./scrollToTop"
import Property from "./pages/propety"
function App() {


  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
      <NavBar/>
    <Routes>
    <Route  index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="buying" element={<Buying/>}/>
    <Route path="selling" element={<Selling/>}/>
    <Route path="vender" element={<Venders/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="property" element={<Property/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
