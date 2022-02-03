// import { Link } from "react-router-dom";
import { SearchContent, Logo } from './../../index';
import LogoUrl from "../../../assets/images/logo.svg"
import SearchIconUrl from "../../../assets/images/search-icon.svg"
import { useSelector } from "react-redux";
import './index.scss'


function Header({children}, props) {
    const classLists = useSelector((state) => state.classLists);

    return(
        <header className="header">
            <Logo isUrl={LogoUrl} isAlt={"aaa"}/>
            <SearchContent isUrl={SearchIconUrl} />
            {children}
        </header>
    )
}

export default Header;
