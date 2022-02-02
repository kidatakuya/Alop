import { Header, Footer, HomeMain, SearchContent, Logo, HeaderNav } from './../index';
import LogoUrl from "../../assets/images/logo.svg"
import LogoAllUrl from "../../assets/images/logo-all.svg"
import SearchIconUrl from "../../assets/images/search-icon.svg"


// import './../../App.css';

function HomePage() {
    return (
        <>
            <Header isLogo={LogoUrl} isSearchIcon={SearchIconUrl}>
                <Logo isUrl={LogoUrl} isAlt={"aaa"}/>
                <SearchContent isUrl={SearchIconUrl} />
                <HeaderNav />
            </Header>
            <HomeMain />
            <Footer isLogo={LogoAllUrl} />
        </>
    );
}

export default HomePage;
