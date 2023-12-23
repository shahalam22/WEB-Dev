const TagLineC = (props) => {
    return (
        <div>
            <div style={{color:props.color, display:'flex', textAlign:props.align, justifyContent:props.align, alignItems:props.align, marginTop:'70px', marginRight:'70px', marginLeft:'70px', marginBottom:'50px'}}>
                <div style={{width:'70%'}}>
                    <h3 style={{textAlign:props.align, fontSize:'60px', fontWeight:'bold', margin:'20px'}}>{props.tag}</h3>
                    <div style={{display:'flex', justifyContent:props.align}}>
                        <div style={{height:'8px', width:'130px', backgroundColor:'blue', marginLeft:'20px'}}></div>
                    </div>
                    <div style={{width:'100%'}}>
                        <p style={{textAlign:props.align, fontSize:'20px', margin:'20px'}}>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagLineC;