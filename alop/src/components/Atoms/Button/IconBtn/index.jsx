import { IconAnimation } from '../../../Functions/ClickEvent'
import './index.scss'

function IconBtn(props){
    return(
        <button className={props.isClassName} onClick={(e)=>{ IconAnimation( e,"iconAnimation" ) }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25.051" height="22.206" viewBox="0 0 25.051 22.206">
                <path id="Icon_feather-heart" data-name="Icon feather-heart" d="M22.674,6.2a5.808,5.808,0,0,0-8.207,0L13.348,7.312,12.23,6.2a5.8,5.8,0,1,0-8.207,8.2l1.118,1.117,8.207,8.2,8.207-8.2,1.118-1.117a5.788,5.788,0,0,0,0-8.2Z" transform="translate(-0.823 -2.997)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
            </svg>
        </button>
    )
}

export default IconBtn;