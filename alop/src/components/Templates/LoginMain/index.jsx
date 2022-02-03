import { Link } from 'react-router-dom'
import './index.scss';

function LoginMain (){
  return(
    <main className="loginMain">
      <div className="loginMain__content">
        <form action="">
          <h2>ログイン</h2>
          <label htmlFor="">メールアドレス</label>
          <input type="email" placeholder='アドレス' />
          <label htmlFor="">パスワード</label>
          <input type="password"  placeholder='8文字以上のパスワード'　/>
          <button>ログイン</button>
          <p>パスワードをお忘れの方はこちらから</p>
        </form>
        <p>アカウントをお持ちでない場合はこちらから</p>
        <Link to="/Signup">新規登録</Link>
      </div>

    </main>
  )
}

export default LoginMain;
