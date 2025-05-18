import React, { useState } from 'react';
import './Calculator.css'; // Importing the CSS file

const Calculator = () => {
    const [km, setKm] = useState(1000);

    // Constants
    const petrolCostPerLiter = 105;
    const petrolKmPerLiter = 45;
    const evCostPerCharge = 20;
    const evKmPerCharge = 150;

    // Calculate monthly costs
    const petrolMonthlyCost = (km / petrolKmPerLiter) * petrolCostPerLiter;
    const evMonthlyCost = (km / evKmPerCharge) * evCostPerCharge;

    // Calculate savings
    const monthlySavings = petrolMonthlyCost - evMonthlyCost;
    const savings3Years = monthlySavings * 12 * 3;
    const savings5Years = monthlySavings * 12 * 5;

    return (
        <div className="calculator-container">
            <div className="cal-cont">
                <div className="calculator-header">
                    <h2>Petrol Prices? Nah, EV’s Got This.</h2>
                    <p className='calculator-sub-header'> Your average monthly usage</p>
                </div>
                <div className="slider-container">
                    <label htmlFor="usageSlider" className="slider-label">{km} KM</label>
                    <input
                        type="range"
                        id="usageSlider"
                        min="15"
                        max="3000"
                        value={km}
                        onChange={(e) => setKm(Number(e.target.value))}
                        className="slider"
                        style={{
                            width: '100%',
                            height: '6px',
                            borderRadius: '5px',
                            background: `linear-gradient(to right, #39B54A 0%, #39B54A ${(km / 3000) * 100}%, #ddd ${(km / 3000) * 100}%, #ddd 100%)`,
                            outline: 'none',
                            appearance: 'none',
                            WebkitAppearance: 'none',
                        }}
                    />
                    <span className="max-value">3000 KM</span>
                </div>
            </div>

            <div className="savings-box">
                <h3>Total Savings</h3>
                <div className="savings-details">
                    <p className="years">3 Years <span>₹{savings3Years.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span></p>
                    <p>5 Years <span>₹{savings5Years.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
