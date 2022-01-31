// import { Link } from "react-router-dom";
import { ItemCard, Title } from './../../index';
import React, { useEffect, useState } from 'react';
import {getState} from '../../Functions/submit'
// import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './index.scss'


function ItemListArea(props) {
    const [Lists, setLists] = useState([]);
    
    useEffect(()=>{
        getState('test', setLists);
    
    },[]);
    return(
        <section className="itemConent">
            <Title isTitle={props.isTitle} isClassName={props.isTitleClassName}/>
            <form className="itemListArea" name="">
                {Lists ? Lists.map(( List, index ) => (<ItemCard key={index} isId={List.id} isClassName="itemCard" isTitle={List.title} isCategory={List.category} isClass={List.class} isUrl={List.url} isAlt="サムネイル" isText={List.text} isAuthor={List.author} isPrice={List.price} />)) : ""}
            </form>
        </section>
    )


    
}

export default ItemListArea;
