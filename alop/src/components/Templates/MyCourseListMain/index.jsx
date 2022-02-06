import {CategoryBtn,ItemListArea } from './../../index'
import {SearchNavigateFunction} from './../../Functions/submit.jsx'
import { useSelector } from "react-redux";
import { useNavigate, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';


function MyCourseListMain(){
  let { courseId } = useParams();
  const [isShown, setIsShown] = useState(false);
    const [classItems, setClassItems] = useState(useSelector((state) => state.classLists))
    const [CategoryItems, setCategoryItems] = useState(useSelector((state) => state.categoryLists))
    const [loginFlag, setLoginFlag] = useState(useSelector((state) => state.userData.loginFlag))

  return(
    <main className="myCourseListMain">
      <h2>MyCourseList</h2>
      <div>
          <div>
              <CategoryBtn isClassName={'categoryNavItem'} isText={courseId} /> 
              {
                  isShown &&(
                      <ul className={''}>
                          {classItems.map(( list,index )=>(<li onClick={() => SearchNavigateFunction(list.text, index, classItems, '', setClassItems)} className={"categoryLists__item item"} key={index}>{list.text}</li>))}
                      </ul>
                  )
              }
          </div>
          <p></p>
        </div>
        <ItemListArea/>
    </main>
  )
}

export default MyCourseListMain
