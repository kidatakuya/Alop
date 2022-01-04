// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ItemTitle, Thumbnail, CategoryWarp, Author, Price, IconBtn } from './../../../index';
import './index.scss'

function ItemCard(props) {
    const navigate = useNavigate();
    return(
        <div onClick={() => {navigate(`CourseDetail/${props.isId}`)}} className={props.isClassName}>
            <Thumbnail isUrl={props.isUrl} isAlt={props.isAlt}/>
            <IconBtn isClassName={"heartBtn"} isId={props.isId} />
            <CategoryWarp isClassNameWarp={"CategoryWarp"} isClassNameCategory={"categoryLabel category"} isClassNameClass={"categoryLabel class"} isClass={props.isClass} isCategory={props.isCategory} />
            <ItemTitle isTitle={props.isTitle} isClassName={"itemTitle"} />
            <Author isAuthor={props.isAuthor} isClassName={"itemAuthor"}/>
            <Price isPrice={props.isPrice} isClassName={"itemPrice"} />
        </div>
    )
}

export default ItemCard;
