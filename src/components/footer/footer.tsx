import "./footer.scss"
//import Telegram from "../../assets/telegram.png"
//import Twitter from "../../assets/twitter.png"
//import Facebook from "../../assets/facebook.png"
//import Linkeid from "../../assets/linkeid.png"
const Footer=()=> {
return (
  
    <footer className="footer">
    <div className="container">
     <div className="row">
       <div className="footer-col">
         <h4>company</h4>
         <ul>
           <li><a href="#">about us</a></li>
           <li><a href="#">our services</a></li>
           <li><a href="#">privacy policy</a></li>
           <li><a href="#">affiliate program</a></li>
         </ul>
       </div>
       <div className="footer-col">
         <h4>get help</h4>
         <ul>
           <li><a href="#">FAQ</a></li>
           <li><a href="#">shipping</a></li>
           <li><a href="#">returns</a></li>
           <li><a href="#">order status</a></li>
           <li><a href="#">payment options</a></li>
         </ul>
       </div>
       <div className="footer-col">
         <h4>online shop</h4>
         <ul>
           <li><a href="#">watch</a></li>
           <li><a href="#">bag</a></li>
           <li><a href="#">shoes</a></li>
           <li><a href="#">dress</a></li>
         </ul>
       </div>
       <div className="footer-col">
         <h4>follow us</h4>
         <div className="social-links">
     {/*    <a href="#">
          <img src={Linkeid} className="socialNetworks" alt="network" />

         </a>
         <a href="#">
          <img src={Facebook} className="socialNetworks" alt="network" />

         </a>
         <a href="#">
          <img src={Telegram} className="socialNetworks" alt="network" />

         </a>
         <a href="#">
          <img src={Twitter} className="socialNetworks" alt="network" />

         </a>
*/}
         </div>
       </div>
     </div>
    </div>
 </footer>
)
}
export default Footer