// import { Link } from "react-router-dom";

import './index.scss'

function Price(props) {
    return(
        <>
            <p className={props.isClassName}>
                ¥{props.isPrice}
            </p>
        </>
    )
}

export default Price;