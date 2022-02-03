import { Header, Footer, CourseDetailMain ,SearchContent, Logo, HeaderNav } from '../index';
import { useParams } from 'react-router-dom';
// import LogoUrl from "../../assets/images/logo.svg"
import LogoAllUrl from "../../assets/images/logo-all.svg"
// import SearchIconUrl from "../../assets/images/search-icon.svg"
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useState } from 'react';

function CourseDetail(props) {
    const [loginFlag, setLoginFlag] = useState(useSelector((state) => state.userData.loginFlag))

    let { courseId } = useParams();
    return (
        <>
            <Header >
                {loginFlag 
                    ? <HeaderNav />:
                    <div>
                        <Link className='SignBtn' to={"/Login"}>ログイン</Link>
                        <Link className='SignBtn' to={'/Signup'}>新規登録</Link>
                    </div>
                }
                
            </Header>
            <CourseDetailMain isId={props.isId} />
            <Footer isLogo={LogoAllUrl} />
        </>
    );
}

export default CourseDetail;
