import { Header, Footer, HomeMain, HeaderNav } from './../index';
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useState } from 'react';
import LogoAllUrl from "../../assets/images/logo-all.svg"


// import './../../App.css';

function HomePage() {
    const [loginFlag, setLoginFlag] = useState(useSelector((state) => state.userData.loginFlag))

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
            <HomeMain />
            <Footer isLogo={LogoAllUrl} />
        </>
    );
}

export default HomePage;
