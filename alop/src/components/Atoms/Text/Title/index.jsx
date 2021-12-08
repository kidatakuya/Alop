// import { Link } from "react-router-dom";

import './index.scss'

function Title(props) {
    return(
        <h2 className={props.isClassName}>
            {props.isTitle}
        </h2>
    )
}

export default Title;