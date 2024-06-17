import { Carousel } from "react-bootstrap";
import party1 from "../src/assets/party1.jpg";
import party2 from "../src/assets/party2.jpg";
import party3 from "../src/assets/party3.jpg";
import party4 from "../src/assets/party4.jpg";
import party5 from "../src/assets/party5.jpg"
const NewCarousel = () => {
  return (
    <Carousel style={{"z-Index":10}}>    
     
      <Carousel.Item>
        <img className="d-block w-100 " src={party1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block  w-100"  src={party2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={party3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={party4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default NewCarousel;
