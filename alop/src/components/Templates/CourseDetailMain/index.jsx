import { useParams, useNavigate} from "react-router-dom";
import { CategoryWarp, Title, Price , Time, MainText, ItemTitle, Thumbnail, Author, ItemListArea, IconBtn} from './../../index';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss'


export const CourseList = (props)=>{
    return(
        <ul className={"courseListWarp"}>
            {
            props.isItems.map((item, index)=>(
                <li className={"courseListWarp__item"} key={index}><span>0{index+1}</span><label htmlFor="">{item.text}</label><time className={"time"}>{item.time}</time></li>
            ))
            }
        </ul>
    )
} 

function CourseDetailMain(props) {
    let { courseId } = useParams({

    });
    const navigate = useNavigate();
    const id = courseId - 1
    const [detail, setDetail] = useState([]);

    const [purchaseFlag, setPurchaseFlag] = useState(false)
    const [switchFlag, setSwitchFlag] = useState(false)
    // コースデータ取得関数
    const getState = async () =>{
        axios.get(`http://localhost/Alop/testAPI/itemDetail.php/?courseId=${id}`)
        .then(res => {
            const data = res.data;
            // data.contents = data.contents.replace(/\\n+/g, '<br>');
            data.recommendedUser = data.recommendedUser.split(/\\n+/g);
            data.contents = data.contents.split(/\\n+/g)
            console.log(data.courseList)
            setDetail(data);
            
            // console.log(detail.contents)
        })
    }

    useEffect(()=>{
        getState()

        // const courseElement = document.getElementById("course")
        // const detailtCardElement = document.getElementsByClassName("detailtCard")
        // const courseElementCoordinateY = courseElement.getBoundingClientRect().top  
        
        // console.log(courseElement)
        // const scrollCardFunction = (styleChangeElements, stopElements, elementsCoordinateY) => {
        //     let y = window.pageYOffset ;
        //     window.addEventListener("scroll", ()=>{
        //         y = window.pageYOffset;
                    
        //         if(elementsCoordinateY <= y){
                
        //             let elementsCoordinatAfterY = elementsCoordinateY + 90
        //             styleChangeElements.style.position="absolute";
        //             styleChangeElements.style.top = elementsCoordinatAfterY + "px";
        //         }else{
        //             styleChangeElements.style.position=""
        //             styleChangeElements.style.top=""
                    
        //         }
        //     })
        // }
        // scrollCardFunction( detailtCardElement[0], courseElement, courseElementCoordinateY)
        
        
    },[]);
    return(
        <main className="courseDetailMain">
            {purchaseFlag ?
                <section className="modal">
                    {switchFlag ?
                    <div className="modal__secondContent">
                        <h3>購入完了</h3>
                        <p className="description">
                            購入が完了いたしました。<br />
                            引き続き本サービスをお楽しみください。
                            </p>
                        <button onClick={()=>navigate("/")}>購入した動画を視聴する</button>
                        <button onClick={()=>navigate("/")}>ホームへ戻る</button>
                    </div>
                    :
                    <div className="modal__firstContent">
                        <h3>購入内容確認</h3>
                        <p className="description">購入を確定してもよろしいでしょうか？</p>
                        <p className="priceWarp">合計<span>¥{detail.price}</span></p>
                        <p className="creditText">クレジットの確認もしくは変更する場合はこちら</p>
                        <button onClick={()=>setSwitchFlag(true)}>購入する</button>
                        <button onClick={()=>setPurchaseFlag(false)}>キャンセルする</button>
                    </div>
                    }
                    
                </section>

                :""}
                
            <section className="detailtCard">
                <Thumbnail isUrl={detail.url} isAlt={""}/>
                <div className={"informationTextWarp"}>
                    <CategoryWarp isClassNameWarp={""} isClassNameCategory={"categoryLabel category"} isClassNameClass={"categoryLabel class"} isClass={detail.class} isCategory={detail.category} />
                    < ItemTitle isClassName={"itemTitle"} isTitle={detail.title} />
                    <Author isClassName={"author"} isAuthor={detail.author} />
                    <Price isClassName={"price"} isPrice={detail.price}/>
                    <button className="purchaseBtn" onClick={()=>setPurchaseFlag(true)}>今すぐ購入する</button>
                    <p className="supplement">安心の３０日間返金保証</p>
                    <div className="BtnWarp">
                        <IconBtn>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15.086" height="13.276" viewBox="0 0 15.086 13.276">
                                <path id="Icon_awesome-shopping-cart" data-name="Icon awesome-shopping-cart" d="M13.832,7.813,15.07,2.42a.624.624,0,0,0-.613-.76H4.17L3.93.5A.627.627,0,0,0,3.314,0H.629A.625.625,0,0,0,0,.622v.415a.625.625,0,0,0,.629.622h1.83l1.84,8.9a1.465,1.465,0,1,0,1.756.222h5.491a1.44,1.44,0,0,0-.441,1.037,1.467,1.467,0,1,0,2.106-1.307l.144-.629a.624.624,0,0,0-.613-.76H5.713L5.541,8.3h7.678A.627.627,0,0,0,13.832,7.813Z" fill="#fff"/>
                            </svg>
                        </IconBtn>
                        <IconBtn>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15.086" height="12.672" viewBox="0 0 15.086 12.672">
                                <path id="Icon_awesome-heart" data-name="Icon awesome-heart" d="M13.621,3.114a4.15,4.15,0,0,0-5.5.385l-.58.574L6.962,3.5a4.15,4.15,0,0,0-5.5-.385,3.951,3.951,0,0,0-.292,5.881l5.7,5.651a.951.951,0,0,0,1.335,0l5.7-5.651a3.949,3.949,0,0,0-.289-5.881Z" transform="translate(0.001 -2.248)" fill="#fff"/>
                            </svg>

                        </IconBtn>
                    </div>
                </div>
                
            </section>

            <section className="courseContentsWarp">
                <div className="courseContents firstContents">
                    {detail ? <CategoryWarp isClassNameWarp={""} isClassNameCategory={"categoryLabel category"} isClassNameClass={"categoryLabel class"} isClass={detail.class} isCategory={detail.category} /> :""}
                    {detail ? <Title isTitle={detail.title} />:""}
                    {detail ? <div className={"innerAuthorTimeWarp"}><Author isClassName={""} isAuthor={detail.author} /><Time isTime={detail.courseCreationEnd}/></div>:""}
                    {detail ? <MainText isClassName={"mainText"} isText={detail.overview} />:""}
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
                { detail ? (detail.courseList || []).map((content, index)=>(
                    <div key={index}>
                        <h4 className={"subTitle"}>{content.title}</h4>
                        <CourseList isItems={content.items} />
                    </div>))
                    :""}
            </section>
            <section className="courseContents othersContents">
                <ItemTitle isClassName={"title"} isTitle={"このコースの作成会社"} />
                <div className="authorInformation">
                    <div className="authorInformation__imgWarp">
                        <img src="" alt="" />
                    </div>
                    <div className={"authorInformation__textWarp"}>
                        <p className="name">{detail.author}</p>
                        <p className="profile">{detail.author}</p>
                    </div>
                </div>
            </section>
            <section>
                <ItemListArea isTitle="関連する動画" isTitleClassName="itemListTitle"/>
            </section>
        </main>
    )
}

export default CourseDetailMain;
