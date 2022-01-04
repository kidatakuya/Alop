// import { Link } from "react-router-dom";

import './index.scss'

function Author(props) {
    return(
        <>
            <p className={props.isClassName}>
                {props.isAuthor}
            </p>
        </>
    )
}

export default Author;
