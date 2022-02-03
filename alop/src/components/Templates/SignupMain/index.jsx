import { Link } from 'react-router-dom'
import './index.scss';

function SignupMain (){
  return(
    <main className="signupMain">
      <div className="signupMain__content">
        <form action="">
          <h2>新規登録</h2>
          <label htmlFor="">氏名</label>
          <input type="text" placeholder='山田 太郎' />
          <label htmlFor="">メールアドレス</label>
          <input type="email" placeholder='アドレス' />
          <label htmlFor="">パスワード</label>
          <input type="password"  placeholder='8文字以上のパスワード' />
          <label htmlFor="">もう一度パスワードを入力してください</label>
          <input type="password"  placeholder='パスワード確認' />
          <Link to={'/SignupConfirmation'}>確認画面へ進む</Link>
        </form>
      </div>

    </main>
  )
}

export default SignupMain;
