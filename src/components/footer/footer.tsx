import "./footer.scss"
import Facebook from "../../asserts/facebook.png"
import Linkeid from "../../asserts/linkeid.png"
import Instagram from "../../asserts/instagram.jpg"
import SpaceX from "../../asserts/spaceX.jpg"
const Footer=()=> {
  const currentYear = new Date().getFullYear();
return (
  
    <footer className="footer">
    <div className="container">
      <div className="footerTitle">
        @SpaceX {currentYear}
      </div>
     <div className="row">

      {/* <div className="footer-col">
         <h4>company</h4>
         <ul>
           <li><a href="#">about us</a></li>

         </ul>
</div> */}
   
       <div className="footer-col">
       
       <a href="https://www.facebook.com/spacextechnologies/">
          <img src={Facebook} className="socialNetworks" alt="network" />
         </a>
         <a href="https://www.spacex.com/">
          <img src={SpaceX} className="socialNetworks" alt="network" />
         </a>
         <a href="https://www.instagram.com/spacex/">
          <img src={Instagram} className="socialNetworks" alt="network" />
         </a>
         <a href="https://www.linkedin.com/company/spacex">
          <img src={Linkeid} className="socialNetworks" alt="network" />

         </a>

     
         </div>


     </div>
    </div>
 </footer>
)
}
export default Footer