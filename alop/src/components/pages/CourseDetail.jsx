import { DefaultBtn, Header, Footer, CourseDetailMain    } from '../index';
import { useParams } from 'react-router-dom';
import LogoUrl from "../../assets/images/logo.svg"
import SearchIconUrl from "../../assets/images/search-icon.svg"
function CourseDetail(props) {
    let { courseId } = useParams();
    return (
        <>
            <Header isTitle={"MyPage"} isLogo={LogoUrl} isSearchIcon={SearchIconUrl} />
            <DefaultBtn url="/" text="Homeへ"/>
            <h1>{courseId}</h1>
            <CourseDetailMain isId={props.isId} />
            <Footer />
        </>
    );
}

export default CourseDetail;
