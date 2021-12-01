// import { Link } from "react-router-dom";
// import SearchIcon from '../../../../assets/images/'
import './index.scss'

function SearchBtn(props) {
    return(
        <>
            <button className="SearchBtn">
                <img src={props.isUrl} alt="サーチ" />
            </button>
        </>
    )
}

export default SearchBtn;