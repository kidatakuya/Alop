// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

// import {SubmitFunction} from './../../../functions/submit'
import { ItemTitle, Thumbnail, CategoryWarp, Author, Price } from './../../../index';


import './index.scss'

function ItemCard(props) {
    const navigate = useNavigate();
    return(
        <div onClick={() => {navigate(`MyPage/${props.isId}`)}} className={props.isClassName}>
            <Thumbnail isUrl={props.isUrl} isAlt={props.isAlt}/>
            <CategoryWarp isClass={props.isClass} isCategory={props.isCategory} />
            <ItemTitle isTitle={props.isTitle} isClass={"itemTitle"} />
            <Author isAuthor={props.isAuthor} isClassName={"itemAuthor"}/>
            <Price isPrice={props.isPrice} isClassName={"itemPrice"} />
        </div>
    )
}

export default ItemCard;