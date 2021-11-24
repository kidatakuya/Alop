// import { Link } from "react-router-dom";
import { SearchBtn, Search } from './../../index';
import './index.scss'

function SearchArea() {
    return(
        <form action="" className="searchArea">
            <SearchBtn />
            <Search isNames="searchText" isType="text" isPlaceholder="キーワード検索をする" isClassName="keywordSearch" />
        </form>
    )
}

export default SearchArea;