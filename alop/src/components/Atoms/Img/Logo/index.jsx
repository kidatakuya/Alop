import { Link } from "react-router-dom";


import './index.scss'

function Logo(props) {
    return(
        <Link to="/" className="logo">
            <img src={props.isUrl} alt={props.isAlt} />
        </Link>
    
    )
}

export default Logo;