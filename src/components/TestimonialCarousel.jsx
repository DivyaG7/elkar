import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonial from '../assets/testimonial.png'

const testimonials = [
  {
    name: "ANTONY DASS & RUBINA",
    title: "Romantic Getaway",
    image: testimonial,
    review: `“The perfect escape for me and my partner. Waking up to the misty hills of Kodaikanal felt like a dream.
              The cozy ambiance and warm hospitality made it unforgettable. We’ll be back for our anniversary!”`,
    rating: 4,
  },
  {
    name: "KAVYA & PRAVEEN",
    title: "Hill Adventure",
    image: testimonial,
    review: `“Thrilling experience! The view was breathtaking and the arrangements were top-notch. Loved it!”`,
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const handlePrev = () => setIndex(index === 0 ? total - 1 : index - 1);
  const handleNext = () => setIndex(index === total - 1 ? 0 : index + 1);

  return (
    <div className="testimonial-section text-center">
      <h1 className="testimonial-heading">Client Testimonial</h1>
      <img src={testimonials[index].image} alt="client" className="testimonial-img" />
      <h4 className="testimonial-title">{testimonials[index].title}</h4>
      <p className="testimonial-review">{testimonials[index].review}</p>
      <p className="testimonial-name">{testimonials[index].name}</p>
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color={i < testimonials[index].rating ? "gold" : "#ccc"} />
        ))}
      </div>
      <div className="testimonial-nav">
        <button className="nav-btn" onClick={handlePrev}><FaChevronLeft /></button>
        <button className="nav-btn" onClick={handleNext}><FaChevronRight /></button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
