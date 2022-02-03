import { Link } from 'react-router-dom'
import './index.scss';

function SignupConfirmationMain (){
  return(
    <main className="signupMain">
      <div className="signupMain__content">
        <form action="">
          <h2>新規登録</h2>
          <label htmlFor="">氏名</label>
          <p>東江楓音</p>
          <label htmlFor="">メールアドレス</label>
          <p>touekanon0723@gmail.com</p>
          <label htmlFor="">パスワード</label>
          <p>パスワード</p>
          
          <Link to={"/"}>会員登録をする</Link>
          <Link to={"/"}>訂正する</Link>
        </form>
      </div>

    </main>
  )
}

export default SignupConfirmationMain;
