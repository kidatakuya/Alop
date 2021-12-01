// import { Link } from "react-router-dom";
import { SearchArea, Logo } from './../../index';
import './index.scss'

function Header(props) {
    return(
        <header className="header">
            <Logo isUrl={props.isLogo} isAlt={"aaa"}/>
            <SearchArea isUrl={props.isSearchIcon} />
        </header>
    )
}

export default Header;