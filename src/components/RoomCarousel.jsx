import React from 'react';
import { Carousel, Button, Container } from 'react-bootstrap';
import room from '../assets/room1.png'

const RoomCarousel = () => {
  const slides = [
    {
      title: 'PREMIUM ROOM',
      image: room,
      description: 'We foster a cultureb of Innovation that enriches lives through transformative solutions and innovative ideas that resonate with our global Community',
    },
    {
      title: 'FAMILY ROOM',
      image: room,
      description: 'We foster a cultureb of Innovation that enriches lives through transformative solutions and innovative ideas that resonate with our global Community',
    },
    {
      title: 'ELITE ROOM',
      image: room,
      description: 'We foster a cultureb of Innovation that enriches lives through transformative solutions and innovative ideas that resonate with our global Community',
    },
  ];

  return (
    <Container fluid className="p-0" id='rooms'>
      <Carousel controls={true} indicators={false} interval={5000} fade>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="slide-wrapper d-flex align-items-center justify-content-center">
              <div className="slide-card text-center">
                <h2 className="room-title">{slide.title}</h2>
                <img src={slide.image} alt={slide.title} className="room-img" />
                <p className="room-desc">{slide.description}</p>
                <Button className="book-btn">BOOK NOW</Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default RoomCarousel;
