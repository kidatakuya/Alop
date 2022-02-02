import { Header, Footer, CourseDetailMain ,SearchContent, Logo, HeaderNav } from '../index';
import LogoUrl from "../../assets/images/logo.svg"
import LogoAllUrl from "../../assets/images/logo-all.svg"
import SearchIconUrl from "../../assets/images/search-icon.svg"

function Login(){
  return(
    <>
      <Header >
          <Logo isUrl={LogoUrl} isAlt={"aaa"}/>
          <SearchContent isUrl={SearchIconUrl} />
          <HeaderNav />
      </Header>
      <main>
        <h2>test</h2>
      </main>
      <Footer isLogo={LogoAllUrl} />
    </>
  )
}
export default Login;
