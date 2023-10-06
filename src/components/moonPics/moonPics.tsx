import "./moonPics.scss"
import Moon1 from "../../asserts/space1.jpg"
import Moon2 from "../../asserts/space2.jpg"
import Moon3 from "../../asserts/space3.jpg"
import Moon4 from "../../asserts/space4.jpg"
import Moon5 from "../../asserts/space5.jpg"
import { useParallax } from "react-scroll-parallax"
const MoonPics = () => {

 
    return (  
        <div className="moonPics">
<img className="moonPic" alt="moon" src={Moon3} />
<img className="moonPic" alt="moon" src={Moon3}  style={{scale: "-1"}}/>
<img className="moonPic" alt="moon" src={Moon3} />
        </div>
    );
}
 
export default MoonPics;