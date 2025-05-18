import React from 'react';
import Slider from 'react-slick';
import './RelatedArticles.css';

const RelatedArticles = () => {

  const articles = [
    {

      image: '/assets/news/transfer of vehicle ownership.png',
      title: 'How to Transfer Vehicle Ownership Online & Offline in India (2025 Guide)',
      date: '15/05/2025'
    },
    {
      image: '/assets/news/duplicate driving license.png',
      title: 'All Driving License Categories & Classes in India: A Primer',
      date: '13/05/2025'
    },
    {
      image: '/assets/news/name correction in driving license.png',
      title: 'Top 1000cc Bikes in India: Price, Specs & Reviews',
      date: '14/05/2025'
    },
    {
      image: '/assets/news/1000cc bike.png',
      title: 'Benelli Bikes in India: Complete Model Guide & Prices',
      date: '15/05/2025'
    }
  ];

  <RelatedArticles articles={articles} />




  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(articles.length, 4),
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(articles.length, 3) }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="related-articles-container">
      <div className="related-articles-header">
        <h3 className="articles-section-title">Related Articles</h3>
        <div className="articles-slider-buttons">
          <button className="articles-arrow-btn" onClick={() => sliderRef.current.slickPrev()}>{'‹'}</button>
          <button className="articles-arrow-btn-right" onClick={() => sliderRef.current.slickNext()}>{'›'}</button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {articles.map((article, index) => (
          <div className="article-card-wrapper" key={index}>
            <div className="article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="article-title">{article.title}</div>
              <div className="article-date">{article.date}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RelatedArticles;
