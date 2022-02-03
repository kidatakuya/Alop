import {Link} from 'react-router-dom'
import './index.scss'

function SignupCompleteMain(){
  return(
    <main className="SignupCompleteMain">
      <div className='SignupCompleteMain__content'>
        <h2>会員登録完了</h2>
        <p>
          ご登録メールアドレスへのご確認メールをお送りしました。<br />
          万が一メールが届かない場合は、マイページからご登録メールアドレスが正しいかお確かめください。
        </p>
        <Link to={"/"}>クレジット登録をする</Link>
        <Link to={"/"}>TOPページへ</Link>
      </div>
    </main>
  )
}

export default SignupCompleteMain
