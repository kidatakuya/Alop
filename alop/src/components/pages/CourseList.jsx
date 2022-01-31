import { DefaultBtn, Header, Footer, CourseListMain } from '../index';
import { useParams } from 'react-router-dom';
import LogoUrl from "../../assets/images/logo.svg"
import LogoAllUrl from "../../assets/images/logo-all.svg"
import SearchIconUrl from "../../assets/images/search-icon.svg"
function CourseList(props) {
    let { courseId } = useParams();
    return (
        <>
            <Header isTitle={"MyPage"} isLogo={LogoUrl} isSearchIcon={SearchIconUrl} />
            <CourseListMain />
            <Footer isLogo={LogoAllUrl} />
        </>
    );
}

export default CourseList;
