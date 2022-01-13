import { Header, Footer, CourseDetailMain    } from '../index';
import { useParams } from 'react-router-dom';
import LogoUrl from "../../assets/images/logo.svg"
import LogoAllUrl from "../../assets/images/logo-all.svg"
import SearchIconUrl from "../../assets/images/search-icon.svg"
function CourseDetail(props) {
    let { courseId } = useParams();
    return (
        <>
            <Header isLogo={LogoUrl} isSearchIcon={SearchIconUrl} />
            <CourseDetailMain isId={props.isId} />
            <Footer isLogo={LogoAllUrl} />
        </>
    );
}

export default CourseDetail;
