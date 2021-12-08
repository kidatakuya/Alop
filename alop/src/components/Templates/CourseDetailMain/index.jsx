import { useParams } from "react-router-dom";
// import { ItemCard } from './../../index';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss'

function CourseDetailMain(props) {
    let { courseId } = useParams();
    const id = courseId - 1
    const [detail, setDetail] = useState([]);
    useEffect(()=>{
        const getState = () =>{
            axios.get(`http://localhost/Alop/testAPI/itemDetail.php/?courseId=${id}`)
            .then(res => {
                const data = res.data;
                setDetail(data);
                console.log(data)

            })
        }
        getState()
    },[])
    return(
        <main className="MyPageMain">
            <h2>{detail.title}</h2>
            <p>{detail.text}</p>
            <p>{detail.id}</p>
        </main>
    )
}

export default CourseDetailMain;