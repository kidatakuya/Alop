import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { CategoryLabel } from '../..';
import './index.scss'
// import HeartIconUrl from "../../../assets/images/heart-icon.svg"
// import MyCourseIconUrl from "../../../assets/images/my-course-icon.svg"
// import ProfillIconUrl from "../../../assets/images/profile-icon.svg"
// import ShoppingCartIconUrl from "../../../assets/images/shopping-cart-icon.svg"

function HeaderNav() {

    let flagList = [ false, false, false, false]
    const [myCourseHoverFlag, setMyCourseHoverFlag] = useState(false);
    const [shoppingHoverFlag, setShoppingHoverFlag] = useState(false);
    const [favoriteHoverFlag, setFavoriteHoverFlag] = useState(false);
    const [myPageHoverFlag, setMyPageHoverFlag] = useState(false);

    useEffect(() => {
        const hoverFlag = ( flag, HoverFanction ) => {
            HoverFanction(!flag)
        }
       
    })
    

    return(
        <>
            <nav className="headerNav">
                <ul>
                    <li>
                        <Link type='button' to="/" className="iconWarp" onMouseEnter={()=>setMyCourseHoverFlag(!myCourseHoverFlag)} onMouseLeave={()=>setMyCourseHoverFlag(!myCourseHoverFlag)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.607" height="17.783" viewBox="0 0 25.607 17.783">
                                <path id="Icon_materialLaptopChromebook" data-name="Icon materialLaptopChromebook" d="M23.473,20.191V4.5H2.134V20.191H0v2.092H25.607V20.191Zm-8.536,0H10.67V19.145h4.268Zm6.4-3.138H4.268V6.592H21.339Z" transform="translate(0 -4.5)" fill="#555"/>
                            </svg>
                        </Link>
                        { myCourseHoverFlag ? (<CategoryLabel isClassName={"navItemLabel"} isText={"マイコース"} />) : null }
                    </li>
                    
                    <li>
                        <Link to="/" className="iconWarp" onMouseEnter={()=>setShoppingHoverFlag(!shoppingHoverFlag)} onMouseLeave={()=>setShoppingHoverFlag(!shoppingHoverFlag)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26.473" height="25.051" viewBox="0 0 26.473 25.051">
                                <g id="Icon_featherShoppingCart" data-name="Icon featherShoppingCart" transform="translate(1.5 1.5)">
                                    <path id="パス_10" data-name="パス 10" d="M14.134,31.067A1.067,1.067,0,1,1,13.067,30,1.067,1.067,0,0,1,14.134,31.067Z" transform="translate(-4.531 -10.083)" fill="none" stroke="#555" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                    <path id="パス_11" data-name="パス 11" d="M30.634,31.067A1.067,1.067,0,1,1,29.567,30,1.067,1.067,0,0,1,30.634,31.067Z" transform="translate(-9.294 -10.083)" fill="none" stroke="#555" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                    <path id="パス_12" data-name="パス 12" d="M1.5,1.5H5.768L8.627,15.469a2.124,2.124,0,0,0,2.134,1.68H21.132a2.124,2.124,0,0,0,2.134-1.68l1.707-8.753H6.835" transform="translate(-1.5 -1.5)" fill="none" stroke="#555" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                                </g>
                            </svg>
                        </Link>
                        {shoppingHoverFlag ? <CategoryLabel isClassName={"navItemLabel"} isText={"買い物かご"} /> :null}
                    </li>
                    
                    <li>
                        <Link to="/" className="iconWarp" onMouseEnter={()=>setFavoriteHoverFlag(!favoriteHoverFlag)} onMouseLeave={()=>setFavoriteHoverFlag(!favoriteHoverFlag)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.051" height="22.206" viewBox="0 0 25.051 22.206">
                                <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M22.674,6.2a5.808,5.808,0,0,0-8.207,0L13.348,7.312,12.23,6.2a5.8,5.8,0,1,0-8.207,8.2l1.118,1.117,8.207,8.2,8.207-8.2,1.118-1.117a5.788,5.788,0,0,0,0-8.2Z" transform="translate(-0.823 -2.997)" fill="none" stroke="#555" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            </svg>
                        </Link>
                        {favoriteHoverFlag ? <CategoryLabel isClassName={"navItemLabel"} isText={"お気に入り"} /> : null}
                    </li>
                    
                    <li>
                        <Link to="/" className="iconWarp" onMouseEnter={()=>setMyPageHoverFlag(!myPageHoverFlag)} onMouseLeave={()=>setMyPageHoverFlag(!myPageHoverFlag)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20.628" height="19.206" viewBox="0 0 20.628 19.206">
                                <path id="Icon_material-person-outline" data-name="Icon material-person-outline" d="M16.314,8.281A2.619,2.619,0,0,1,19.022,10.8a2.619,2.619,0,0,1-2.707,2.521A2.619,2.619,0,0,1,13.607,10.8a2.619,2.619,0,0,1,2.707-2.521m0,10.8c3.829,0,7.864,1.753,7.864,2.521v1.32H8.45V21.6c0-.768,4.035-2.521,7.864-2.521M16.314,6a4.987,4.987,0,0,0-5.157,4.8,4.987,4.987,0,0,0,5.157,4.8,4.987,4.987,0,0,0,5.157-4.8A4.987,4.987,0,0,0,16.314,6Zm0,10.8C12.872,16.8,6,18.412,6,21.6v3.6H26.628V21.6C26.628,18.412,19.756,16.8,16.314,16.8Z" transform="translate(-6 -6)" fill="#555"/>
                            </svg>
                        </Link>
                        {myPageHoverFlag ? <CategoryLabel isClassName={"navItemLabel"} isText={"マイページ"} /> : null}
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}

export default HeaderNav;
