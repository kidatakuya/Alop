import {Header,Footer, MyCourseListMain,HeaderNav} from './../index'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useState } from 'react';

function MyCourseList(){
  const [loginFlag, setLoginFlag] = useState(useSelector((state) => state.userData.loginFlag))

  return(
    <>
      <Header>
      {loginFlag 
                    ? <HeaderNav />:
                    <div>
                        <Link className='SignBtn' to={"/Login"}>ログイン</Link>
                        <Link className='SignBtn' to={'/Signup'}>新規登録</Link>
                    </div>
                }
      </Header>
      <MyCourseListMain/>
      <Footer/>
    </>
    
  )

}

export default MyCourseList
