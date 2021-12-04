import { Header, Footer, HomeMain } from './../index';
import LogoUrl from "../../assets/images/logo.svg"
import SearchIconUrl from "../../assets/images/search-icon.svg"


// import './../../App.css';

function HomePage() {
    return (
        <>
            <Header isTitle={"Home"} isLogo={LogoUrl} isSearchIcon={SearchIconUrl} />
            <HomeMain />
            <Footer />
        </>
    );
}

export default HomePage;
