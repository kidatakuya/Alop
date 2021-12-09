// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

// import {SubmitFunction} from './../../../functions/submit'
import { ItemTitle, Thumbnail, CategoryWarp, Author, Price, IconBtn } from './../../../index';


import './index.scss'

function ItemCard(props) {
    const navigate = useNavigate();
    return(
        <div onClick={(event) => {navigate(`CourseDetail/${props.isId}`)}} className={props.isClassName}>
            <Thumbnail isUrl={props.isUrl} isAlt={props.isAlt}/>
            <IconBtn isClassName={"heartBtn"} isId={props.isId} />
            <CategoryWarp isClass={props.isClass} isCategory={props.isCategory} />
            <ItemTitle isTitle={props.isTitle} isClass={"itemTitle"} />
            <Author isAuthor={props.isAuthor} isClassName={"itemAuthor"}/>
            <Price isPrice={props.isPrice} isClassName={"itemPrice"} />
        </div>
    )
}

export default ItemCard;