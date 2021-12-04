// import { Link } from "react-router-dom";
// import SearchIcon from '../../../../assets/images/'
import './index.scss'

function CategoryLabel(props) {
    return(
        <>
            <label className={props.isClassName}>
                {props.isText}
            </label>
        </>
    )
}

export default CategoryLabel;