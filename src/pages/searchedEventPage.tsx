import Navigation from "../components/navigation/navigation";
interface SattelitiesPageProps {
    isAuthenticated: boolean;
  }
const SearchedEventPage = ({isAuthenticated}: SattelitiesPageProps) => {
    return ( 
        <>
        <Navigation isAuthenticated={isAuthenticated} />
        </>
     );
}
 
export default SearchedEventPage;