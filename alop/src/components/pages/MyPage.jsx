import { DefaultBtn, Header, Footer, MyPageMain } from './../index';
import { useParams } from 'react-router-dom';
import LogoUrl from "../../assets/images/logo.svg"
import SearchIconUrl from "../../assets/images/search-icon.svg"
function MyPage(props) {
    let { courseId } = useParams();
    return (
        <>
            <Header isTitle={"MyPage"} isLogo={LogoUrl} isSearchIcon={SearchIconUrl} />
            <DefaultBtn url="/"　text="Homeへ"/>
            <h1>{courseId}</h1>
            <MyPageMain isId={props.isId} />
            <Footer />
        </>
    );
}

export default MyPage;
