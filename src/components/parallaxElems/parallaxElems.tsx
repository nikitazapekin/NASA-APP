import "./parallaxElems.scss"
import Rocket from "../../asserts/rocket.png"
import BlackHole from "../../asserts/blackHole.png"
//import Moon from "../../asserts/moon.png"
import Moon from "../../asserts/moonWithText.png"
import Asteroid from  "../../asserts/asteroid.png"
import { useParallax } from "react-scroll-parallax";
const ParallaxElems = () => {
    const parallax: any = useParallax({
     
        translateX: [-100, 1100],
        translateY: [-1500, 300],
      rotateZ: [0, 45],
      
   //   rotate: [0,34]
      }); 

      const parallax1: any = useParallax({
        
           translateX: [600, -100],
           translateY: [100, 500],
           scale: [1,2]
          
         }); 

         const parallax2: any = useParallax({
        
            translateX: [1200, -100],
            translateY: [800, -100],
           
          }); 
          const parallax3: any = useParallax({
        
            translateX: [500, -100],
            translateY: [-100, 200],
            rotateZ: [0,45]
          }); 
    return (

        <>
<div className="container-body">
<div ref={parallax1.ref} className="moonEffect">
  <img src={Moon} alt="moon" className="parallaxMoon" />
</div>
   <div className="box" ref={parallax.ref}>
      <img src={Rocket } alt="rocket" className="rocket"   />
</div> 
 <div className="blackHoleEffect" ref={parallax2.ref}>
<img className="black-hole" alt="black-hole" src={BlackHole} />
 </div>

 <div className="homepageAboutBox" ref={parallax3.ref}>
 <img className="asteroid" alt="asteroid" src={Asteroid} />
 
 </div>
  </div>
        </>
      );
}
 
export default ParallaxElems;