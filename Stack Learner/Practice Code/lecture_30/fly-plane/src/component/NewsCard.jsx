import Card from 'react-bootstrap/Card';

const NewsCard = (props) => {
    return (
        <div>
            <Card style={{width: '20rem', border:'none', boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2)'}}>
              <Card.Img variant="top" src={props.src} />
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <div style={{margin:'10px', fontFamily:'arial', fontWeight:'bold', border:'none'}}>
                        <p style={{color:'#ddd'}}>TRAVEL | BY ADMIN</p>
                        <p style={{fontSize:'22px'}}>{props.text}</p>
                    </div>
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
    )
}

export default NewsCard;