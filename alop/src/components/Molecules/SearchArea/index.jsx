// import { Link } from "react-router-dom";
import { SearchBtn, Search } from './../../index';
import './index.scss'

function SearchArea(props) {
    return(
        <form action="" className="searchArea">
            <SearchBtn isUrl={props.isUrl} />
            <Search isNames="searchText" isType="text" isPlaceholder="キーワード検索をする" isClassName="keywordSearch" />
        </form>
    )
}

export default SearchArea;