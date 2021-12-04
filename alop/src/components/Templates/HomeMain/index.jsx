// import { Link } from "react-router-dom";
import { ItemListArea, DefaultBtn } from './../../index';
import './index.scss'

function HomeMain() {
    return(
        <main>
            <DefaultBtn url="MyPage" text="MyPageへ"/>
            <ItemListArea />
        </main>
    )
}

export default HomeMain;