import { IconAnimation } from '../../../Functions/ClickEvent'
import './index.scss'

function IconBtn({children}){
    return(
        <button type="button" className={"heartBtn cartBtn"} onClick={(e)=>{ IconAnimation( e,"iconAnimation" ) }}>
            {children}
        </button>
    )
}

export default IconBtn;
