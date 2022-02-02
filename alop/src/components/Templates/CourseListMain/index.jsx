// import {ItemListArea,CategoryItemList, CategoryBtn} from '../../index'
// import {SearchNavigateFunction} from '../../Functions/submit'
// import { hoverEventFunction } from '../../Functions/HoverEvent'
// import { useNavigate, useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react';
import './index.scss';
function CourseListMain ({children}){

    return(
    <main className='courseListMain'>
       {children}
    </main>
  
  )
}

export default CourseListMain;
