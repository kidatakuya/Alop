import { Link } from "react-router-dom";
import { SearchBtn, Search } from './../../index';
import './index.scss'

function SearchArea() {
    return(
        <form action="" className="searchArea">
            <SearchBtn />
            <Search />
        </form>
    )
}

export default SearchArea;