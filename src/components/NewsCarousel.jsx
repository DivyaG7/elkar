import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import news from '../assets/news.png'

const newsData = [
  {
    title: 'E - PASS',
    description: 'Madras High Court issues direct e-pass to vehicles entering nilgiris and kodaikanal',
    image: news
  },
  {
    title: 'E - PASS',
    description: 'Madras High Court issues direct e-pass to vehicles entering nilgiris and kodaikanal',
    image: news
  },
  {
    title: 'E - PASS',
    description: 'Madras High Court issues direct e-pass to vehicles entering nilgiris and kodaikanal',
    image: news
  },
  {
    title: 'E - PASS',
    description: 'Madras High Court issues direct e-pass to vehicles entering nilgiris and kodaikanal',
    image: news
  },
];

const NewsCarousel = () => {
  return (
    <div className="news-section">
      <h1 className="news-title">News & Updates</h1>
      <p className="news-subtext">"Neque porro quisquam est qui dolorem ipsum quia dolor s"</p>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        navigation
        loop
        className="news-swiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {newsData.map((news, index) => (
          <SwiperSlide key={index}>
            <div className="news-card">
              <img src={news.image} alt="news" className="news-img" />
              <h4 className="news-head">{news.title}</h4>
              <p className="news-desc">{news.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsCarousel;
