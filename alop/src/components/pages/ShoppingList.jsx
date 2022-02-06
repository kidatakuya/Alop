import {Header,HeaderNav} from './../index'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useState } from 'react';

function ShoppingList(){
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
    <main>
      <h2>買い物かご</h2>
    </main>
    </>
  )

}

export default ShoppingList;
