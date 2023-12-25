import "./navigation.scss"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import NavigationWindow from "../navigationWindow/navigationWindow"
import Search from "../../asserts/search.png"
import ChatIcon from "../../asserts/chatIcon.png"
import Notification from "../../asserts/not.png"
import User from "../../asserts/us.png"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useRef } from "react"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import { useActions } from "../../hooks/useActions"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import debounce from 'lodash/debounce';
interface NavigationProps {
isAuthenticated: boolean
}
const Navigation = ({isAuthenticated}: NavigationProps)=> {
  const navigate= useNavigate()
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [searchItems, setSearchItems]=useState<any[]>([])
  const auth = useContext(AuthContext)
  const [value, setValue] =useState("")
  const {data, error, loading} =useTypedSelectors(state=>state.NasaDatabaseReducer)
 const {fetchNasaDatabase} =useActions()
  const [isSearchActive, setIsSearchActive] = useState(false); 
  const [typedValue, setTypedValue] =useState("")
 const handleClickElem=()=> {
setSearchItems([]);
 }
  const searchForm=(event: React.ChangeEvent<HTMLInputElement>)=> {
    if(event.target.name=="searchh"){
      setIsSearchActive(event.target.value.length > 0); 
 if (timer) {
  clearTimeout(timer);  
}
 
const newTimer = setTimeout(() => {
  setTypedValue(event.target.value)
  sendRequest(event.target.value);
}, 300);
setTimer(newTimer);
}
  }
  useEffect(()=> {
    try{
      setSearchItems(data.collection.items )
      console.log(data.collection.items[0].data[0].description )
    }  catch(e){
      console.log(e)
    }
  }, [data])
    const handleClick=()=> {
      if(isOpen==true){
        setIsOpen(false)
      } 
      else{
        setIsOpen(true)
      }
    }
    const [isOpen, setIsOpen] =useState(false)
    const sendRequest = (query: string) => {
      try {
        fetchNasaDatabase(query)

      } catch(e){
      
        console.log("ERR"+e)
      }
    };
    const handleNavigate =()=> {
      setIsSearchClicked(true);
      console.log("TYPED"+typedValue)
navigate(`/found-elements/${typedValue}`)
    }

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

<input
className={`searchInputZ ${isSearchActive ? 'active' : ''}`}
//dataTest="search"
//test={"search"}
name="searchh"
// placeholder="Search"  
       onChange={ searchForm}
/>

{/*
<div className="foundedElemsSearch">
{searchItems.length>0 && searchItems.slice(0,5).map((item, index)=> (
  <div className="foundedElemSearch">
  <Link style={{color: "#fff", textDecoration: "none"}} to={`/search/${item.data[0].title}`}> 
<p className="foundedElemSearchText" onClick={ handleClickElem}>
  {item.data[0].title}
  </p>
    </Link> 
</div>
))}
</div> */}

<div className="foundedElemsSearch">
  {isSearchActive && !isSearchClicked && searchItems.length > 0 && searchItems.slice(0, 5).map((item, index) => (
    <div className="foundedElemSearch" key={index}>
      <Link style={{ color: "#fff", textDecoration: "none" }} to={`/search/${item.data[0].title}`}>
        <p className="foundedElemSearchText" onClick={handleClickElem}>
          {item.data[0].title}
        </p>
      </Link>
    </div>
  ))}
</div>



<button className="searchButtonZ"   >
        <img src={Search} className="tyu" onClick={()=> handleNavigate()} />
</button>
</div>
</div>
{ !isAuthenticated ? (
<div className="navigationItem">
    <div className="navigationItemFlex">
      <Link  style={{textDecoration: "none", color: "#fff"}} to="/signin">
        <div className="navigationItemFlexItem">Sign in</div>
      </Link>
        <Link style={{textDecoration: "none", color: "#fff"}} to="/signup">
        <div className="navigationItemFlexItem">Sign up</div>
        </Link>
    </div>
</div>  ) :
(
  <>
  <div className="navigationItem navigationItemPictures">
<img className="navigationItemIcon" alt="icon"  src={ChatIcon} />
<img className="navigationItemIcon" alt="icon"  src={Notification} />
<Link to={`/account/${auth.firstName}/${auth.secondName}`}>

<img className="navigationItemIcon" alt="icon"  src={User} />
</Link>
  </div>
  </>
)
}
<div className="navigationFon"></div>

</nav>
    )
}
export default Navigation
