// import { Link } from "react-router-dom";

import './index.scss'

function Search(props) {
    return(
        <>
            <input name={props.isNames} type={props.isType} className={props.isClassName} placeholder={props.isPlaceholder} />
        </>
    )
}

export default Search;