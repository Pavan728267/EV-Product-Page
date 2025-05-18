import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './Pages/PorductPage';
import NotFoundPage from './Pages/NotFoundPage';
import Header from './Components/Header';
import Footer from './Components/Foorter';
// In App.js or index.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <>         
    <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer/>
    </>

  );
}

export default App;