import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import './ProductDetails.css';

const specGroups = {
    "General Comparison": [
        "exShowroomPrice", "certifiedRange", "trueRange", "topSpeed", "weight"
    ],
    "Battery & Charging": [
        "batteryType", "batteryCapacity", "chargingTime", "fastCharging", "batteryIpRating"
    ],
    "Motor & Performance": [
        "motorPowerNominalPeak", "motorType", "maxTorque", "acceleration0To40kmh", "ridingModes"
    ],
    "Brakes & Suspension": [
        "brakingSystem", "frontBrakeType", "rearBrakeType", "frontSuspension", "rearSuspension"
    ],
    "Dimensions": [
        "length", "width", "height", "seatHeight", "wheelbase"
    ],
    "Features": [
        "instrumentCluster", "reverseAssist", "music", "chargingStationLocator", "sideStandMotorCutoff"
    ]
    // Add more groups as needed
};

const ProductDetails = ({ products }) => {
    const [tabIndex, setTabIndex] = useState(0);
    
  const longDescription = products?.longDescription ?? '';
  const specification = products?.specification ?? {};
  const subscription = products?.subscription ?? {};

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };

    return (
        <Box className="product-details-container">
            <Tabs className='custom-tab' value={tabIndex} onChange={handleTabChange} centered>
                <Tab className='custom-tab' label="Description" />
                <Tab label="Specification" className='custom-tab' />
                <Tab className='custom-tab' label="Ouestion & Answer" />
                <Tab className='custom-tab' label="Subscription" />
            </Tabs>
            <Box className="tab-underline" />
            <Box className="tab-content">
                {tabIndex === 0 && (
                    //   <Typography ></Typography>
                    <p className="description-text">{longDescription}</p>
                )}

                {tabIndex === 1 && (
                    <Box className="specification-cards">
                        {Object.entries(specGroups).map(([groupTitle, keys]) => {
                            const groupData = keys
                                .filter(key => specification[key]) // Only include available keys
                                .map(key => ({ key, value: specification[key] }));

                            if (groupData.length === 0) return null;

                            return (
                                <div className="spec-card" key={groupTitle}>
                                    <h4>{groupTitle}</h4>
                                    <table>
                                        <tbody>
                                            {groupData.map(({ key, value }) => (
                                                <tr key={key}>
                                                    <td className="spec-key">{key}</td>
                                                    <td className="spec-value">{value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })}
                    </Box>
                )}


                {tabIndex === 2 && (
                    <Box className="qna-card">
                        <Typography variant="h6" className="qna-title">
                            Questions about this product (0)
                        </Typography>
                        <input
                            type="search"
                            className="qna-search-input"
                            placeholder="Search Questions & Answers"
                        />
                        <Box className="qna-login-box">
                            <Typography fontWeight="bold" component="span">
                                Don't see the answer you're looking for?
                            </Typography>
                            <button className="qna-login-btn">Login to post your Question</button>
                        </Box>
                    </Box>
                )}


                {tabIndex === 3 && (
                    <Box className="spec-section">
                        {subscription.plan1 && (
                            <div className="spec-card">
                                <h4>{subscription.plan1.title}</h4>
                                <table className='table-spec'>
                                    <thead>
                                        <tr>
                                            <th>Duration</th>
                                            <th>Monthly Subscription</th>
                                            <th>Refundable Security Deposit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subscription.plan1.data.map((row, idx) => (
                                            <tr key={idx}>
                                                <td>{row.duration}</td>
                                                <td>{row.subscription}</td>
                                                <td>{row.deposit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {subscription.plan2 && (
                            <div className="spec-card">
                                <h4>{subscription.plan2.title}</h4>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Duration</th>
                                            <th>Up to 2 yrs</th>
                                            <th>3 to 4 yrs</th>
                                            <th>5 to 6 yrs</th>
                                            <th>Refundable Deposit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subscription.plan2.data.map((row, idx) => (
                                            <tr key={idx}>
                                                <td>{row.duration}</td>
                                                <td>{row.upto2}</td>
                                                <td>{row.y3to4}</td>
                                                <td>{row.y5to6}</td>
                                                <td>{row.deposit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ProductDetails;
