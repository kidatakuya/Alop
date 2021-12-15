// import { Link } from "react-router-dom";

import './index.scss'

function CategoryBtn(props) {
    return(
        <>
            <button className={props.isClassName}>{props.isText}</button>
        </>
    )
}

export default CategoryBtn;