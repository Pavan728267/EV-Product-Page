import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

import './RelatedProducts.css'; // external CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const RelatedProducts = ({getRelatedProductDetails}) => {
  const [releatedProducts, setReleatedProduct] = useState(null);
  const sliderRef = useRef(null);
  useEffect(() => {
    axios.get(`http://localhost:3002/api/products/getAllProducts`)
      .then(res => {
        setReleatedProduct(res?.data); // Adjust based on your API response shape
        console.log("ProductDetails", JSON.stringify(res?.data));
        console.log("ProductDetails state", JSON.stringify(releatedProducts));
      })
      .catch(err => {
        console.error("Failed to fetch product:", err);
      });
  }, []);


  const handleDetailsAndExploreMore = (id) => {
    getRelatedProductDetails(id);
  };



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(releatedProducts?.length, 4), // XL: 4 slides
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // XL and below (optional, included for completeness)
        settings: {
          slidesToShow: Math.min(releatedProducts?.length, 4),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // MD
        settings: {
          slidesToShow: Math.min(releatedProducts?.length, 3),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // SM
        settings: {
          slidesToShow: Math.min(releatedProducts?.length, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // XS
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="related-products-container">
      <div className="related-products-header">
        <h2 className="section-title">Related Products</h2>
        <div className="slider-buttons">
          <button onClick={() => sliderRef.current.slickPrev()} className="arrow-btn">{'❮'}</button>
          <button onClick={() => sliderRef.current.slickNext()} className="arrow-btn-right">{'❯'}</button>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {releatedProducts?.map((product) => (
          <div key={product?.id} className="related-product-card">
            <div className="card-content">
              <div className="related-product-image">
                <img src={product.image} alt={product?.name} />
              </div>
              <h2 className="related-product-name">{product?.name}</h2>
              <p className="related-product-price">₹{product?.price}</p>
            </div>

            <div className="button-group">
              <button onClick={() => handleDetailsAndExploreMore(product?.id)} className="btn explore-btn">
                Explore More
              </button>
              <button onClick={() => handleDetailsAndExploreMore(product?.id)} className="btn details-btn">
                Details
              </button>
            </div>
          </div>

        ))}
      </Slider>
    </div>
  );
};

export default RelatedProducts;
