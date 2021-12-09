import './index.scss'

function ImageWarp(props){
    return(
        <div className={props.isClassName}>
            <h1>{props.isText}</h1>
            <img src={props.isimgUrl} alt="" />
        </div>
    )
}

export default ImageWarp;
