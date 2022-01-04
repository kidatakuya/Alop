// import { Link } from "react-router-dom";
import imgUrl from '../../../assets/images/saitoImg.png'
import { ItemListArea, ImageWarp } from './../../index';
import './index.scss'

function HomeMain() {
    return(
        <main className="topImageWarp">
            <ImageWarp isClassName="topImageWarp" isText="アニメ業界を学ぼう。" isimgUrl={imgUrl} />
            <ItemListArea isTitle="あなたへのおすすめ" isTitleClassName="itemListTitle"/>
            <ItemListArea isTitle="見られている動画" isTitleClassName="itemListTitle"/>
        </main>
    )
}

export default HomeMain;
