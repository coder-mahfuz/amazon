import React from "react";

import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <Carousel indicators={false} nextLabel="" prevLabel="" interval={500}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/51BNzDmnUqL._SX1500_.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/41RoguJznKL._SX1500_.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/51kyN9jKbJL._SX1500_.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
