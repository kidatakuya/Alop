import { Link } from "react-router-dom";
import { SearchArea, ItemCard, DefaultBtn } from './../../index';
import './index.scss'

function HomeMain() {
    return(
        <main>
            <DefaultBtn url="MyPage" text="MyPageへ"/>
            <SearchArea />
            <ItemCard isClassName="itemCard"/>
        </main>
    )
}

export default HomeMain;