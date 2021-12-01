// import { Link } from "react-router-dom";
import { ItemCard } from './../../index';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss'

function ItemListArea() {
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
        <section className="itemListArea" id="itemListArea">
            {Lists ? Lists.map(( List, index ) => (<ItemCard key={index} isClassName="itemCard" isTitle={List.title} isCategory={List.category} isUrl={List.url} isAlt="サムネイル" isText={List.text}/>)) : ""}
        </section>
    )
   

    
}

export default ItemListArea;