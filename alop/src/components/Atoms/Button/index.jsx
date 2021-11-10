import { Link } from "react-router-dom";

import './index.scss'

function Button() {
    return(
        <>
            <Link to="/MyPage" className="btn">test</Link>
        </>
    )
}

export default Button;