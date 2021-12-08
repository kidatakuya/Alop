// import { Link } from "react-router-dom";
import { SearchArea, Logo, HeaderNav } from './../../index';
import './index.scss'

function Header(props) {
    return(
        <header className="header">
            <Logo isUrl={props.isLogo} isAlt={"aaa"}/>
            <SearchArea isUrl={props.isSearchIcon} />
            <HeaderNav />
        </header>
    )
}

export default Header;