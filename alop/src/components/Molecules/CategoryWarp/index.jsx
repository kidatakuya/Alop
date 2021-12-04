// import { Link } from "react-router-dom";
// import SearchIcon from '../../../../assets/images/'
import { CategoryLabel } from './../../index';
import './index.scss'

function CategoryWarp(props) {
    return(
       
        <div className="CategoryWarp">
            <CategoryLabel isText={props.isClass} isClassName={"categoryLabel class"}/>
            <CategoryLabel isText={props.isCategory} isClassName={"categoryLabel category"} />
        </div>
        
    )
}

export default CategoryWarp;