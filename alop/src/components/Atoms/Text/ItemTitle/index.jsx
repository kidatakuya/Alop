// import { Link } from "react-router-dom";

import './index.scss'

function ItemTitle(props) {
    return(
        <>
            <h3>
                {props.isTitle}
            </h3>
        </>
    )
}

export default ItemTitle;