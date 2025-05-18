import React, { useState } from 'react';
import './Header.css'; // Import the external CSS

const Header = () => {
  // Arrays for dropdown options
  const evScootersOptions = ['OLA', 'Ather', 'Chetak', 'TVS', 'Savings Calculator'];
  const rooftopSolarOptions = ['Tata Power', 'Australian Premium ', 'Waree', 'Adani Solar', 'Pahal Solar', 'Solar Calculator'];

  // State to manage dropdown visibility
  const [showEvScootersDropdown, setShowEvScootersDropdown] = useState(false);
  const [showRooftopSolarDropdown, setShowRooftopSolarDropdown] = useState(false);

  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="container">
          {/* Logo and Tagline */}
          <div className="logo-section">
            <img src="/assets/Logo.png" alt="ecZAAR Logo" />
          </div>

          {/* Right Section: Search Bar, Icons, and Login */}
          <div className="right-section">
            {/* Search Bar */}
            <div className="search-bar">
              <input type="text" placeholder="Search Product, type or brand" />
            </div>

            {/* Icons and Login */}
            <div className="icons-login">
              {/* Heart Icon (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#28A745" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>

              {/* Cart Icon (SVG) with Badge */}
              <div className="cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#28A745" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                <span className="cart-badge">0</span>
              </div>

              {/* Login Button */}
              <button className="login-btn">
                Login <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Subheader Section */}
      <nav>
        <div className="nav-container">
          <ul className="nav-list">
            {/* EV Scooters Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">EV Scooters </a>
              <svg style={{ marginLeft: '6px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
              <ul className="dropdown-menu">
                {evScootersOptions.map((option, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">{option}</a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Rooftop Solar Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">Rooftop Solar </a>
               <svg style={{ marginLeft: '6px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
              <ul className="dropdown-menu">
                {rooftopSolarOptions.map((option, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">{option}</a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Static Links */}
            <li className="nav-item"><a className="nav-link" href="#">Comparisons</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Exchange</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Check Loan Eligibility</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Subscription</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Calculators</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Blogs</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;