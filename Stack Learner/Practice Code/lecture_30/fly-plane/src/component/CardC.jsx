import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardC = (props) => {
    return (
        <Card style={{ width: '18rem' , margin:'15px'}}>
          <Card.Img variant="top" src={props.src} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>
            <Button variant="primary">Check Details</Button>
          </Card.Body>
        </Card>
    )
}

export default CardC;