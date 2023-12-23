const TitleHead = (props) => {
    return (
        <div style={{width:'90%', color:'black', position: 'absolute', top:props.top, display:props.display}}>
            <div style={{width:'60%', fontSize:'50px', fontWeight:'bold', paddingLeft:'7%'}}>
                <p>{props.head}</p>
                <div style={{height:'8px', width:'130px', backgroundColor:'blue'}}></div>
            </div>
            <div style={{width: '40%', fontSize:'20px', paddingLeft:'7%'}}>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default TitleHead