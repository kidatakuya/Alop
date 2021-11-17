import { Link } from "react-router-dom";

import './index.scss'

function DefaultBtn(props) {
    return(
        <>
            <Link to={props.url} className="DefaultBtn">{props.text}</Link>
        </>
    )
}

export default DefaultBtn;