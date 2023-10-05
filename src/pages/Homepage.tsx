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
interface HomepageProps {
    isAuthenticated: boolean;
  }
 /* interface parallaxProps {
    ref: React.RefObject<HTMLElement>;
   controller: ParallaxController | null;
   //constroller: any;
    element: Element | undefined;
  } */
const Homepage=({isAuthenticated}: HomepageProps)=> {
     
 


      const parallax: any = useParallax({
     //   easing: [1, -0.75, 0.5, 1.34],
        translateX: [-100, 1100],
        translateY: [-1500, 300],
      }); 

      const parallax1: any = useParallax({
        //   easing: [1, -0.75, 0.5, 1.34],
           translateX: [600, -100],
           translateY: [100, 500]
          // translateY: [-100, 1200],
         }); 
    
    return (
        
        <div className="pageLayout">
       

       
        <Navigation isAuthenticated={isAuthenticated} />
<div className="container-body">

  <div ref={parallax1.ref} className="moonEffect">
    <img src={Moon} alt="moon" className="parallaxMoon" />
  </div>
     <div className="box" ref={parallax.ref}>
        <img src={Rocket } alt="rocket" className="rocket"   />
  </div> 
   {/* <div className="box2" ref={parallax1.ref}>
        REPLAY
    </div>   */}
    </div>




  
    <MoonPics />  













        <Footer />

        </div>
   
    )
}
export default Homepage

//https://medium.com/stackanatomy/adding-parallax-scroll-animations-to-react-a518889ee547