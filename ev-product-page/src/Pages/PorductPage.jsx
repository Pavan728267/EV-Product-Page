import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../Components/Header';
import './ProductPage.css'; // Import the external CSS
import Calculator from '../Components/Calculator';
import ProductDetails from '../Components/ProductDetails';
import RelatedProducts from '../Components/RelatedProducts';
import RelatedArticles from '../Components/RelatedArticles';
import ProductRequestCard from '../Components/ProductRequestCard';
import LoadingOverlay from '../Components/LoadingOverlay';


const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const [productId, setProductId] = useState(1); // Replace with dynamic ID if routing is added
    const [loading, setLoading] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [selectedOption, setSelectedOption] = useState("EMI");


    useEffect(() => {
        setLoading(true);
        getProductDetails(productId);
    }, [productId]);


    const getProductDetails = (productId) => {
        axios.get(`http://localhost:3002/api/products/getProductinfo?id=${productId}`)
            .then(res => {
                setProduct(res?.data); // Adjust based on your API response shape
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.error("Failed to fetch product:", err);
            });
    }

    const handleRelatedProductClick = (productId) => {
        setLoading(true);
        window.scrollTo(0, 0);
        getProductDetails(productId);
    }
    const getDisplayText = () => {
        if (selectedOption === "EMI") {
            return `EMI starts at ₹${product?.emi} per month.`;
        } else {
            return `Subscriptions start at ₹${product?.emi} per month.`;
        }
    };

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };
    return (
        <>

            <div className="product-details">
                <div className="row">

                    {console.log(product)}
                    <div className="breadcrumb-nav">
                        <span>Home</span> <span className="breadcrumb-separator">/</span>
                        <span>Shop</span> <span className="breadcrumb-separator">/</span>
                        <span>Electric Vehicle</span> <span className="breadcrumb-separator">/</span>
                        <span className="breadcrumb-current">{product?.title}</span>
                    </div>
                    <div className="col-md-6  pl-2">
                        <div className='product-image-section'>
                            <div className="d-flex justify-content-between align-items-center" style={{ paddingLeft: "5%", paddingTop: "10px" }}>
                                <span className="buy-or-subscribe">Buy or Subscribe</span>
                            </div>
                            <img src={product?.image} alt={product?.title} className="product-image" />
                        </div>
                        <div className="product-specs">
                            <div className="specification-card">
                                <img src="/assets/charge.png" alt="" />

                                <span className='specs-name'>{product?.kwhBattery} kWh</span>
                                <span className='specs-name-sub'>Battery</span>
                            </div>
                            <div className="specification-card">
                                <img src="/assets/speed.png" alt="" />

                                <span className='specs-name' >{product?.kmRange} km </span>
                                <span className='specs-name-sub' >Range </span>
                            </div>
                            <div className="specification-card">
                                <img src="/assets/petrol.png" alt="" />
                                <span className='specs-name'>{product?.chargingTime} h:min </span>
                                <span className='specs-name-sub'>Charging Time </span>
                            </div>
                        </div>


                    </div>

                    <div className="col-md-6 product-info">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h2 className="product-name m-0">{product?.title}</h2>

                            <div className="form-check m-0">
                                <input className="form-check-input" type="checkbox" id="compareCheckbox" />
                                <span style={{ color: "#9A9A9A" }}>
                                    Compare
                                </span>
                            </div>
                        </div>

                        <p className="price ">{product?.price}</p>
                        <div className="emi-container">
                            <p className="emi-text">{getDisplayText()}</p>
                            <div className="custom-dropdown">
                                <select value={selectedOption} onChange={handleChange}>
                                    <option value="EMI">EMI</option>
                                    <option value="Subscription">Subscription</option>
                                </select>
                                <span className="dropdown-arrow-down">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="expandable-text-container">
                            <p className={`expandable-text ${expanded ? 'expanded' : ''}`} >
                                {product?.description}
                            </p>
                            <span className="read-toggle" onClick={() => setExpanded(prev => !prev)}>
                                {expanded ? 'Read Less' : 'Read More'}
                            </span>
                        </div>
                        <hr className="my-2" />
                        <div className="product-meta">
                            <div className="meta-item">
                                <span className="meta-key">Brand: </span>
                                <span className="meta-value">{product?.brand}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-key">Category:</span>
                                <span className="meta-value">{product?.category}</span>
                            </div>
                        </div>

                        <hr className="my-2" />

                        <div className="d-flex align-items-center gap-2">
                            <label className="mb-0"><strong>Color:</strong></label>
                            <div className="position-relative">
                                <select
                                    className="form-control color-select pe-4"
                                    defaultValue={product?.color}
                                    style={{ width: '160px' }}
                                >
                                    {product?.colors?.map((color, index) => (
                                        <option key={index} value={color}>
                                            {color}
                                        </option>
                                    ))}
                                </select>
                                <span className="dropdown-arrow-down">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </div>
                        </div>


                        <div className="form-group">
                            {product?.addOns?.map((addon, index) => (
                                <>
                                    <label className="meta-key"><strong>Addons: </strong></label>
                                    <div key={index} className="form-check">
                                        <input type="checkbox" className="form-check-input" id={`addon-${index}`} defaultChecked />
                                        <label className="form-check-label-product " htmlFor={`addon-${index}`}>{addon}</label>
                                    </div>
                                </>
                            ))}
                        </div>

                        <div className="pin-code-section">
                            <div className="exchange">
                                <a className='exchange' href="#tab-title-subscriptions">Save more with Exchange</a>
                            </div>
                            <div className="pin-code-input">
                                <input type="text" placeholder="Enter Pincode" className="form-control pin-input" />
                                <button className="check-btn small-btn">Check</button>
                                <button className="add-to-cart-btn small-btn">Add to cart</button>
                            </div>
                            <small>Please enter the pincode to check availability in your area.</small>
                        </div>


                    </div>
                </div>
                <Calculator />
                <ProductDetails products={product} />
                <RelatedProducts getRelatedProductDetails={handleRelatedProductClick} />
                <ProductRequestCard />
                <RelatedArticles />
            </div>
            <LoadingOverlay isVisible={loading} />

        </>
    );
};

export default ProductPage;
