import { Header, LoginMain ,SearchContent, Logo, HeaderNav } from '../index';
import LogoUrl from "../../assets/images/logo.svg"
import LogoAllUrl from "../../assets/images/logo-all.svg"
import SearchIconUrl from "../../assets/images/search-icon.svg"
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useState } from 'react';

function Login(){
  const [loginFlag, setLoginFlag] = useState(useSelector((state) => state.userData.loginFlag))


  return(
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
      <LoginMain />
      
    </>
  )
}
export default Login;
