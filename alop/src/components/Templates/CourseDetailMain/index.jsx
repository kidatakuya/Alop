import { useParams } from "react-router-dom";
import { CategoryWarp, Title, Price , Time, MainText, ItemTitle} from './../../index';
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
                console.log(detail)

            })
        }
        getState()
    },[])
    return(
        <main className="myPageMain">
            <section className="courseContents">
                {detail ? <CategoryWarp isClassNameWarp={""} isClassNameCategory={"categoryLabel category"} isClassNameClass={"categoryLabel class"} isClass={detail.class} isCategory={detail.category} /> :""}
                {detail ? <Title isTitle={detail.title} />:""}
                {detail ? <div><Price isPrice={detail.price}/><Time isTime={detail.time}/></div>:""}
                {detail ? <MainText isText={detail.overview} />:""}
            </section>
            <section className="courseContents">
                <ItemTitle className={""} isTitle={"講座内容"} />
                <MainText className={""} isText={detail.overview} />
            </section>
            <section className="courseContents">
                <ItemTitle className={""} isTitle={"こんな方におすすめ"} />
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            <section className="courseContents">
                <ItemTitle className={""} isTitle={"無料動画（一部公開）"} />
                <div>
                    <video src=""></video>
                </div>
            </section>
            <section className="courseContents">
                <ItemTitle className={""} isTitle={"コース目次"} />
                <div>
                    <h4></h4>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <h4></h4>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </section>
            <section className="courseContents">
                <ItemTitle className={""} isTitle={"このコースの講師"} />
                <div>
                    <video src=""></video>
                </div>
            </section>
            <section>
                
            </section>
        </main>
    )
}

export default CourseDetailMain;
