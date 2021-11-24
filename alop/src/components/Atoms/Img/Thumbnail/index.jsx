import { Link } from "react-router-dom";

import './index.scss'

function Thumbnail(props) {
    return(
        <>
            <img src={props.isUrl} alt={props.isAlt} />
        </>
    )
}

export default Thumbnail;