// import { Link } from "react-router-dom";
import { Title, HomeMain } from './../../index';
import './index.scss'

function Header(props) {
    return(
        <header className="header">
            <Title title={props.title}/>
        </header>
    )
}

export default Header;