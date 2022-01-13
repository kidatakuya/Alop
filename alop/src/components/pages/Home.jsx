import { Header, Footer, HomeMain } from './../index';
import LogoUrl from "../../assets/images/logo.svg"
import LogoAllUrl from "../../assets/images/logo-all.svg"
import SearchIconUrl from "../../assets/images/search-icon.svg"


// import './../../App.css';

function HomePage() {
    return (
        <>
            <Header isLogo={LogoUrl} isSearchIcon={SearchIconUrl} />
            <HomeMain />
            <Footer isLogo={LogoAllUrl} />
        </>
    );
}

export default HomePage;
