import React, { useState } from 'react';
import axios from 'axios';
import './ProductRequestCard.css';
import LoadingOverlay from './LoadingOverlay';


const ProductRequestCard = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleRequest = () => {
        const newErrors = {};
        if (!productName.trim()) newErrors.productName = 'Product name is required.';
        if (!description.trim()) newErrors.description = 'Description is required.';
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Product Name:', productName);
            console.log('Description:', description);
            const data = new URLSearchParams();
            data.append('name', productName);
            data.append('desc', description);

            setLoading(true);
            axios.post(`http://localhost:3002/api/products/requestProduct`,data.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(res => {
                    console.log(res?.data); 
                    setProductName('')
                    setDescription('')
                    setLoading(false);
                    
                })
                .catch(err => {
                    setLoading(false);
                    console.error("Failed to fetch product:", err);
                });
        }
    };

    return (
        <>
            <div className="product-request-card">
                <h3 className="product-request-title">Request a Product</h3>
                <div className="product-request-inputs">
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    {errors.productName && <span className="error-text">{errors.productName}</span>}

                    <textarea
                        placeholder="Description"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {errors.description && <span className="error-text">{errors.description}</span>}

                    <button onClick={handleRequest}>Request</button>
                </div>
            </div>
            <LoadingOverlay isVisible={loading} />
        </>
    );
};

export default ProductRequestCard;
