import { Link } from "react-router-dom";

import './index.scss'

function Title(props) {
    return(
        <h1>
            {props.title}
        </h1>
    )
}

export default Title;