// import { Link } from "react-router-dom";
import { SearchContent, Logo, HeaderNav } from './../../index';
import './index.scss'

function Header(props) {
    return(
        <header className="header">
            <Logo isUrl={props.isLogo} isAlt={"aaa"}/>
            <SearchContent isUrl={props.isSearchIcon} />
            <HeaderNav />
        </header>
    )
}

export default Header;