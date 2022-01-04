import './index.scss'

function Time(props) {
    return(
        <>
            <time className={props.isClassName}>
                {props.isTime}
            </time>
        </>
    )
}

export default Time;
