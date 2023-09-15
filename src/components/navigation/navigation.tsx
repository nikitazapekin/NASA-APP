import "./navigation.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import NavigationWindow from "../navigationWindow/navigationWindow"
//import   Search  from  "../../assets/search.png"
import Search from "../../asserts/search.png"
const Navigation = ()=> {
    const handleClick=()=> {
      if(isOpen==true){
        setIsOpen(false)
      } 
      else{
        setIsOpen(true)
      }
    }
    const [isOpen, setIsOpen] =useState(false)
  
    return (
<nav className='navigation'>
<div className='navigationItem'>
</div>
<div className='navigationItem navigationItemMarginLeft '>
      <div className="navigationItemFlexBefore">
      <Link style={{textDecoration: "none", color: "#fff"}} to="/">
 
        <div className="navigationItemFlexItem">SpaceX</div>
 </Link>
     
        <div  className="navigationItemFlexItem"
        onClick={()=> {
          handleClick()
        }}>Info</div>
        {isOpen ? (
            <>
            <NavigationWindow isOpen={isOpen} setIsOpen={setIsOpen} />
            </>
        ) : (
            <></>
        )}
    </div>
</div>
<div className="navigationItem ">


<div className="searchBoxZ">

<input className="searchInputZ"type="text" name="" placeholder="Search" />
<button className="searchButtonZ" >
        <img src={Search} className="tyu" />
</button>
</div>


</div>
<div className="navigationItem">
    <div className="navigationItemFlex">
      <Link  style={{textDecoration: "none", color: "#fff"}} to="/signin">
        
        <div className="navigationItemFlexItem">Sign in</div>
      </Link>
     
        <Link style={{textDecoration: "none", color: "#fff"}} to="/signup">
        <div className="navigationItemFlexItem">Sign up</div>
        </Link>
    </div>
</div>
<div className="navigationFon"></div>
</nav>
    )
}
export default Navigation
//onMouseEnter={handleMouseEnter}