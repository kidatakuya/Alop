
import { MainText, ItemTitle, Thumbnail } from './../../../index';

import './index.scss'

function ItemCard(props) {
    return(
        <div className={props.isClassName}>
            <Thumbnail isUrl={""} isAlt={"testtetst"}/>
            <ItemTitle isTitle={props.isTitle} />
            <MainText isText={props.isText} />
        </div>
    )
}

export default ItemCard;