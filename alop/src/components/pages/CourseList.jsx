import { Header, Footer, CourseListMain,SearchContent, Logo, HeaderNav,CategoryBtn,ItemListArea } from '../index';
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import {SearchNavigateFunction} from '../Functions/submit'
import { hoverEventFunction } from '../Functions/HoverEvent'
import LogoUrl from "../../assets/images/logo.svg"
import LogoAllUrl from "../../assets/images/logo-all.svg"
import SearchIconUrl from "../../assets/images/search-icon.svg"
import { useSelector } from "react-redux";




function CourseList(props) {
    let { courseId } = useParams();
    const { categoryId } = useParams();
    const [isShown, setIsShown] = useState(false);
    const [classItems, setClassItems] = useState(useSelector((state) => state.classLists))
    const [CategoryItems, setCategoryItems] = useState(useSelector((state) => state.categoryLists))
    const [loginFlag, setLoginFlag] = useState(useSelector((state) => state.userData.loginFlag))


    useEffect(()=>{
        // const listsContent = document.getElementsByClassName('categoryHoverEvent');
        // hoverEventFunction(listsContent, setIsShown, categoryId, props.classLists);

        
        // if(isShown){
        //     let categoryLists = document.getElementsByClassName("categoryLists__item");
        //     for(let i=0;i<=props.classLists.length-1;i++){
        //         if( props.classLists[i].choiceFlag ){
        //             categoryLists[i].classList.add('test')
        //         }
        //     }
            
        // }
    },[])
    return (
        <>
            <Header >
                {loginFlag 
                    ? <HeaderNav />:
                    <div>
                        <Link className='SignBtn' to={"/Login"}>ログイン</Link>
                        <Link className='SignBtn' to={'/Signup'}>新規登録</Link>
                    </div>
                }
                
            </Header>
            <CourseListMain>
                <div>
                    <div>
                    <CategoryBtn isClassName={'categoryNavItem'} isText={categoryId} /> 
                    {
                        isShown &&(
                            <ul className={''}>
                                {props.classLists.map(( list,index )=>(<li onClick={() => SearchNavigateFunction(list.text, index, classItems, '', setClassItems)} className={"categoryLists__item item"} key={index}>{list.text}</li>))}
                            </ul>
                        )
                    }
                    </div>
                </div>
                <ItemListArea/>
            </CourseListMain>
            <Footer isLogo={LogoAllUrl} />
        </>
    );
}

export default CourseList;
