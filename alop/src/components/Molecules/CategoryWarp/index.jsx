// import { Link } from "react-router-dom";
// import SearchIcon from '../../../../assets/images/'
import { CategoryLabel } from './../../index';
import './index.scss'

function CategoryWarp(props) {
    return(
       
        <div className={props.isClassNameWarp}>
            <CategoryLabel isText={props.isCategory} isClassName={props.isClassNameCategory} />
            <CategoryLabel isText={props.isClass} isClassName={props.isClassNameClass}/>
        </div>
    )
}

export default CategoryWarp;
