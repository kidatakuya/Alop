// import { Link } from "react-router-dom";

import './index.scss'

function Thumbnail(props) {
    return(
        <>
            <img className="thumbnail" src={props.isUrl} alt={props.isAlt} />
        </>
    )
}

export default Thumbnail;