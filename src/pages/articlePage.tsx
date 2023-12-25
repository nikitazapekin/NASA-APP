import { useParams } from "react-router-dom";
import Navigation from "../components/navigation/navigation";
import ArticleBox from "../components/articleBox/articleBox";
import ErrorBoundary from "../components/ErrorBoundary/errorBoundary";
interface AccountPageProps {
    isAuthenticated: boolean
    }
const ArticlePage = ({isAuthenticated}: AccountPageProps) => {
    const {id, idd} = useParams()
    return (  
        <>
        <ErrorBoundary>

        <Navigation isAuthenticated={isAuthenticated} />
<ArticleBox id={id} idd={idd} />
        </ErrorBoundary>
        </>
    );
}
 
export default ArticlePage;