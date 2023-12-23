const Benefits = (props) => {
    return (
        <div>
            <div style={{display:'flex'}}>
                <img src={props.src} alt="image" style={{width:'30px', height: '30px'}}/>
                <h3 style={{marginLeft:'7px'}}>{props.title}</h3>
            </div>
            <p style={{fontSize:'20px'}}>{props.text}</p>
        </div>
    )
}

export default Benefits;