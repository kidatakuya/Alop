// import { Link } from "react-router-dom";

import './index.scss'

function MainText(props) {
    return(
        <>
            <p key={props.isKey} className={props.isClassName}>
                {props.isText}
            </p>
        </>
    )
}

export default MainText;
