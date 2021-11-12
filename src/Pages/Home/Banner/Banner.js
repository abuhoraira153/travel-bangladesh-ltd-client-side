import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/1.jpg'
import banner2 from '../../../images/banner/2.jpg'
import banner3 from '../../../images/banner/3.jpg'

const Banner = () => {
    return (
        <div className = "banner">
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Kuakata</h3>
      <p>Kuakata is a town in southern Bangladesh known for its panoramic sea beach.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Bisnakandi</h3>
      <p>Bichnakandi, also known as Bisnakandi, is a village in Rustompur Union.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Mohasthan Garh</h3>
      <p>Mahasthangarh is one of the most earliest urban archaeological sites so far discovered in Bangladesh.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </div>
    );
};

export default Banner;