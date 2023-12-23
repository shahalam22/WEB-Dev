const News = (props) => {
    return (
        <div style={{display:'flex'}}>
            <img src={props.src} alt="image1" style={{width:'30%'}}/>
            <div style={{marginLeft:'15px', fontFamily:'arial', fontWeight:'bold'}}>
                <p style={{color:'#ddd'}}>TRAVEL | BY ADMIN</p>
                <p style={{fontSize:'22px'}}>{props.title}</p>
            </div>
        </div>
    )
}

export default News;