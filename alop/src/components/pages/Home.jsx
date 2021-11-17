import { DefaultBtn, Header, Footer } from './../index';
import './../../App.css';

function HomePage() {
    return (
        <>
            <Header title="Home"/>
            <DefaultBtn url="MyPage" text="MyPageへ"/>
            
            <Footer />
        </>
    );
}

export default HomePage;
