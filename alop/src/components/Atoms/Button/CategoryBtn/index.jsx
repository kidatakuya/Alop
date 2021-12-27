// import { Link } from "react-router-dom";
// import { useContext, useState } from 'react';
// import {FlagsContext} from '../../../Molecules/CategoryItemList'
import './index.scss'

function CategoryBtn(props) {
   

    return(
        <>
            <button className={props.isClassName}>{props.isText}</button>
        </>
    )
}

export default CategoryBtn;
