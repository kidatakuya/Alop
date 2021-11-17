import { DefaultBtn } from './../index';
import { Header } from './../index';
import { Footer } from './../index';
import './../../App.css';
// import { Header } from './../index';
function MyPage() {
    return (
        <>
            <Header title="MyPage"/>
            <DefaultBtn url="/"　text="Homeへ"/>
            <Footer />
        </>
    );
}

export default MyPage;
