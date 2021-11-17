import { Link } from "react-router-dom";

import './index.scss'

function Logo() {
    return(
        <>
            <Link to="/MyPage" className="logo">Logo</Link>
        </>
    )
}

export default Logo;