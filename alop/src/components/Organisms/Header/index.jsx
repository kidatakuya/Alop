// import { Link } from "react-router-dom";
// import { SearchContent, Logo, HeaderNav } from './../../index';
import { useSelector } from "react-redux";
import './index.scss'


function Header({children}) {
    const classLists = useSelector((state) => state.classLists);

    return(
        <header className="header">
            {children}
        </header>
    )
}

export default Header;
