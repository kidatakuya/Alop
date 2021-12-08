// import { Link } from "react-router-dom";
import imgUrl from '../../../assets/images/saitoImg.png'
import { ItemListArea } from './../../index';
import './index.scss'

function HomeMain() {
    return(
        <main className="homeMain">
            <div className="topImageWarp">
                <h1>アニメ業界を学ぼう</h1>
                <img src={imgUrl} alt="" />
            </div>
            <ItemListArea isTitle="あなたへのおすすめ" isTitleClassName="itemListTitle"/>
            <ItemListArea isTitle="見られている動画" isTitleClassName="itemListTitle"/>
        </main>
    )
}

export default HomeMain;