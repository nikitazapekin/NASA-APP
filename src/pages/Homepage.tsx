import Navigation from "../components/navigation/navigation"
import Footer from "../components/footer/footer"
import Spinner from "../components/spinner/spinner";
 import { useParallaxController } from "react-scroll-parallax";
 import Rocket from "../asserts/rocket.png"
import { useParallax } from "react-scroll-parallax";
import "./pagesStyles.scss"
import Moon from "../asserts/moon.png"
import MoonPics from "../components/moonPics/moonPics";
import { ParallaxBanner } from "react-scroll-parallax";
import ParallaxElems from "../components/parallaxElems/parallaxElems";
interface HomepageProps {
    isAuthenticated: boolean;
  }
 
const Homepage=({isAuthenticated}: HomepageProps)=> {
    return ( 
        <div className="pageLayout">
        <Navigation isAuthenticated={isAuthenticated} />
  <ParallaxElems />
    <MoonPics />  
        <Footer />

        </div>
   
    )
}
export default Homepage

//https://medium.com/stackanatomy/adding-parallax-scroll-animations-to-react-a518889ee547