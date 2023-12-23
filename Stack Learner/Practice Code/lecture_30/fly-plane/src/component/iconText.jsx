const IconText = (props) => {
    return (
        <div style={{display:'flex', flexDirection:'row', marginTop:'13px', marginRight:'40px'}}>
            <img src={props.src} alt={props.imgText} style={{height:'20px', width:'auto', margin:'2px 10px'}}/>
            <p>{props.text}</p>
        </div>
    )
}

export default IconText;