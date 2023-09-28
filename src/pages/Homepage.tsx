import Navigation from "../components/navigation/navigation"
import Footer from "../components/footer/footer"
interface HomepageProps {
    isAuthenticated: boolean;
  }
  
const Homepage=({isAuthenticated}: HomepageProps)=> {
    return (
        <>
        <Navigation isAuthenticated={isAuthenticated} />
        <Footer />
        </>
    )
}
export default Homepage