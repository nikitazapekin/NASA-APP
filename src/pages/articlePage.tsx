import { useParams } from "react-router-dom";
import Navigation from "../components/navigation/navigation";
import ArticleBox from "../components/articleBox/articleBox";
import ErrorBoundary from "../components/ErrorBoundary/errorBoundary";
import "./pagesStyles.scss"
import Footer from "../components/footer/footer";
interface AccountPageProps {
    isAuthenticated: boolean
}
const ArticlePage = ({ isAuthenticated }: AccountPageProps) => {
    const { id, idd } = useParams()
    return (
        <div className="pageLayout">
            <ErrorBoundary>
                <Navigation isAuthenticated={isAuthenticated} />
                <ArticleBox id={id} idd={idd} />
            </ErrorBoundary>
            <Footer />
        </div>
    );
}

export default ArticlePage;