const TagLine = (props) => {
    return (
        <div>
            <div style={{color:props.color, display:'flex', justifyContent:'left', alignItems:'left', marginTop:'70px', marginRight:'70px', marginLeft:'70px', marginBottom:'50px'}}>
                <div style={{width:'50%'}}>
                    <h3 style={{textAlign:'left', fontSize:'60px', fontWeight:'bold', margin:'20px'}}>{props.tag}</h3>
                    <div style={{display:'flex', justifyContent:'left'}}>
                        <div style={{height:'8px', width:'130px', backgroundColor:'blue', marginLeft:'20px'}}></div>
                    </div>
                </div>
                <div style={{width:'50%'}}>
                    <p style={{textAlign:'left', fontSize:'20px', margin:'20px'}}>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default TagLine;