
import { Carousel } from "react-bootstrap";
import user from "../src/assets/user.png";
import "../cssfiles/Reviews.css"
const Reviews = () => {
  return (
    <div className="reviews" >
    <h1> Customer Reviews</h1>
    <Carousel>
    <Carousel.Item>
        <div className="review">
          {/* First Review */}
          <div className="r1">
            <p className="review-text">Wonderful experience! Amazing decorations and vibe.</p>
            <span className="r1span">
              <img className="userlogo" src={user} alt="User" />
              <h6 className="username">Shubham Ranmale</h6>
            </span>
            <div className="date">September 15, 2023</div>
          </div>
          {/* Second Review */}
          <div className="r1">
            <p className="review-text">Absolutely stunning decorations! The ambiance 
            created by Party Planners was breathtaking. Highly recommend their services
             for any special occasion</p>
            <span className="r1span">
              <img className="userlogo" src={user} alt="User" />
              <h6 className="username">Soham Ingale</h6>
            </span>
            <div className="date">November 8, 2023</div>
          </div>
          {/* Third Review */}
          <div className="r1 r3">
            <p className="review-text">Impeccable attention to detail! Party Planners transformed our venue into a magical space. Guests were amazed by the beautiful decorations and cozy ambiance.</p>
            <span className="r1span">
              <img className="userlogo" src={user} alt="User" />
              <h6 className="username">Somesh Khanna</h6>
            </span>
            <div className="date">December 21, 2023</div>
          </div>
        </div>
      </Carousel.Item>

      {/* Second Carousel Item */}
      <Carousel.Item>
        <div className="review">
          {/* Fourth Review */}
          <div className="r1">
            <p className="review-text">Exquisite decorations that exceeded our expectations! Party Planners truly captured the essence of our event with their impeccable taste and attention to detail.</p>
            <span className="r1span">
              <img className="userlogo" src={user} alt="User" />
              <h6 className="username">Suchit Chaudhari</h6>
            </span>
            <div className="date">January 5, 2023</div>
          </div>
          {/* Fifth Review */}
          <div className="r1">
            <p className="review-text">Phenomenal ambiance created by Party Planners! Their decorations added a touch of elegance and charm to our celebration, making it truly unforgettable.</p>
            <span className="r1span">
              <img className="userlogo" src={user} alt="User" />
              <h6 className="username">Shubham Thakur</h6>
            </span>
            <div className="date">February 14, 2023</div>
          </div>
          {/* Sixth Review */}
          <div className="r1 r3">
            <p className="review-text">Incredible decorations that set the perfect mood! Party Planners attention to detail and creativity transformed our venue into a magical space.!</p>
            <span className="r1span">
              <img className="userlogo" src={user} alt="User" />
              <h6 className="username">Srishti Ravi</h6>
            </span>
            <div className="date">March 30, 2023</div>
          </div>
        </div>
      </Carousel.Item>

      {/* Third Carousel Item */}
      <Carousel.Item>
        <div className="review">
          {/* Seventh Review */}
          <div className="r1">
            <p className="review-text">Exceptional ambiance and decor by Party Planners! They perfectly captured the theme of our event, creating a warm and inviting atmosphere for our guests.</p>
            <span className="r1span">
              <img className="userlogo" src={user} alt="User" />
              <h6 className="username">Snehal Patil</h6>
            </span>
            <div className="date">April 12, 2023</div>
          </div>
          {/* Eighth Review */}
          <div className="r1">
            <p className="review-text">Spectacular decorations that wowed everyone! Party Planners expertise in creating ambiance made our event truly special and memorable.</p>
            <span className="r1span">
              <img className="userlogo" src={user} alt="User" />
              <h6 className="username">Shreyash Raut</h6>
            </span>
            <div className="date">May 24, 2023</div>
          </div>
          {/* Ninth Review */}
          <div className="r1 r3">
            <p className="review-text">Top-notch decorations that impressed all our guests! Party Planners attention to detail and style added a touch of sophistication to our celebration</p>
            <span className="r1span">
              <img className="userlogo" src={user} alt="User" />
              <h6 className="username">Shreyash Bhagat</h6>
            </span>
            <div className="date">June 18, 2023</div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="review">
          {/* Tenth Review */}
          <div className="r1">
            <p className="review-text">Elegant decorations that created a stunning ambiance! Party Planners expertise and creativity made our event a standout success.</p>
            <span className="r1span">
              <img className="userlogo" src={user} alt="User" />
              <h6 className="username">Sumit Nikam</h6>
            </span>
            <div className="date">July 3, 2023</div>
          </div>
          <div className="r1">
            <p className="review-text">Beautiful decorations that made our event unforgettable! Party Planners attention to detail and design created the perfect ambiance.</p>
            <span className="r1span">
              <img className="userlogo" src={user} alt="User" />
              <h6 className="username">Sumit Nikam</h6>
            </span>
            <div className="date">July 3, 2023</div>
          </div>
          <div className="r1 r3">
            <p className="review-text">Chic decorations that elevated our event! Party Planners impeccable taste and style transformed our venue into a stylish and inviting space</p>
            <span className="r1span">
              <img className="userlogo" src={user} alt="User" />
              <h6 className="username">Sumit Nikam</h6>
            </span>
            <div className="date">July 3, 2023</div>
          </div>
          </div>
          </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Reviews;
