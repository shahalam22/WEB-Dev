import IconText from "./iconText"

const CardS = (props) => {
    return (
        <div>
            <img src={props.src} alt="image" style={{width:'100%'}}/>
            <h2 style={{margin:'20px 15px 0px 13px', fontFamily:'arial', fontSize:'28px'}}>{props.title}</h2>
            <IconText src='/icons/location_black.png' imgText='location' text='Lake Grove, New York'/>            
        </div>
    )
}

export default CardS