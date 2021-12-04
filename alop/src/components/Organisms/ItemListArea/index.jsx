// import { Link } from "react-router-dom";
import { ItemCard } from './../../index';
import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './index.scss'


function ItemListArea({navigation}) {
    const [Lists, setLists] = useState([]);
    
    useEffect(()=>{
        const getState = () => {
            axios.get(`http://localhost/Alop/testAPI/newItemList.php`)
            .then(res => {
                const data = res.data;
                setLists(data);     
            })
        }
        getState();
    
    },[]);
    return(
        <form className="itemListArea" name="">
            {Lists ? Lists.map(( List, index ) => (<ItemCard key={index} isId={List.id} isClassName="itemCard" isTitle={List.title} isCategory={List.category} isClass={List.class} isUrl={List.url} isAlt="サムネイル" isText={List.text} isAuthor={List.author} isPrice={List.price} />)) : ""}
        </form>
    )
   

    
}

export default ItemListArea;