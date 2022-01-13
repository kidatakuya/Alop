import { useParams } from "react-router-dom";
import { CategoryWarp, Title, Price , Time, MainText, ItemTitle, Thumbnail, Author} from './../../index';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss'

function CourseDetailMain(props) {
    let { courseId } = useParams({

    });
    const id = courseId - 1
    const [detail, setDetail] = useState([]);
    useEffect(()=>{

        const getState = async () =>{
            axios.get(`http://localhost/Alop/testAPI/itemDetail.php/?courseId=${id}`)
            .then(res => {
                const data = res.data;
                // data.contents = data.contents.replace(/\\n+/g, '<br>');
                data.recommendedUser = data.recommendedUser.split(/\\n+/g);
                data.contents = data.contents.split(/\\n+/g)
                // console.log(data.contents)
                setDetail(data);
                
                // console.log(detail.contents)
            })
        }
        getState()

        const courseElement = document.getElementById("course")
        const detailtCardElement = document.getElementsByClassName("detailtCard")
        const courseElementCoordinateY = courseElement.getBoundingClientRect().top  
        
        // console.log(courseElement)
        const scrollCardFunction = (styleChangeElements, stopElements, elementsCoordinateY) => {
            let y = window.pageYOffset ;
            window.addEventListener("scroll", ()=>{
                y = window.pageYOffset;
                    
                if(elementsCoordinateY <= y){
                
                    let elementsCoordinatAfterY = elementsCoordinateY + 90
                    styleChangeElements.style.position="absolute";
                    styleChangeElements.style.top = elementsCoordinatAfterY + "px";
                }else{
                    styleChangeElements.style.position=""
                    styleChangeElements.style.top=""
                    
                }
            })
        }
        scrollCardFunction( detailtCardElement[0], courseElement, courseElementCoordinateY)
        
        
    },[])
    return(
        <main className="courseDetailMain">

            <section className="detailtCard">
                <Thumbnail isUrl={detail.url} isAlt={""}/>
                <div className={"informationTextWarp"}>
                    <CategoryWarp isClassNameWarp={""} isClassNameCategory={"categoryLabel category"} isClassNameClass={"categoryLabel class"} isClass={detail.class} isCategory={detail.category} />
                    < ItemTitle isClassName={"itemTitle"} isTitle={detail.title} />
                    <Price isPrice={detail.price}/>
                    <Author isClassName={""} isAuthor={detail.author} />
                    <Time isTime={detail.time}/>
                </div>
                
            </section>

            <section className="courseContentsWarp">
                <div className="courseContents firstContents">
                    {detail ? <CategoryWarp isClassNameWarp={""} isClassNameCategory={"categoryLabel category"} isClassNameClass={"categoryLabel class"} isClass={detail.class} isCategory={detail.category} /> :""}
                    {detail ? <Title isTitle={detail.title} />:""}
                    {detail ? <div className={"innerAuthorTimeWarp"}><Author isClassName={""} isAuthor={detail.author} /><Time isTime={detail.courseCreationEnd}/></div>:""}
                    {detail ? <MainText isText={detail.overview} />:""}
                </div>
            </section>
            
            <section className="courseContents othersContents">
                <ItemTitle isClassName={"title"} isTitle={"講座内容"} />
                {detail ? (detail.contents || []).map((text, index) => (<><MainText key={index} isClassName={"detailtText"} isText={text} /><br/></> )):""}
            </section>
            <section className="courseContents othersContents">
                <ItemTitle isClassName={"title"} isTitle={"こんな方におすすめ"} />
                {/* <MainText isClassName={"detailtText"} isText={detail.recommendedUser} /> */}
                {detail ? (detail.recommendedUser || []).map((text, index) => (<MainText key={index} isClassName={"detailtText"} isText={text} /> )):""}
            </section>
            <section className="courseContents othersContents">
                <ItemTitle isClassName={"title"} isTitle={"無料動画（一部公開）"} />
                <div>
                    <video src=""></video>
                </div>
            </section>
            <section className="courseContents othersContents" id="course">
                <ItemTitle isClassName={"title"} isTitle={"コース目次"} />
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
            <section className="courseContents othersContents">
                <ItemTitle isClassName={"title"} isTitle={"このコースの作成会社"} />
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
