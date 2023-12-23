import Carousel from 'react-bootstrap/Carousel';

const CardCaro = (props) => {
    return (
        <div>
              <img src={props.src} alt="image1" style={{width:'100%'}}/>
              <Carousel.Caption>
                <h1 style={{fontSize:'100px'}}>{props.title}</h1>
                <p>{props.text}</p>
              </Carousel.Caption>
        </div>
    )
}

export default CardCaro;