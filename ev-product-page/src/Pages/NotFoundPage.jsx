import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-5">
      <div className="justify-content-center">
        <div md={8}>
          <img
            src="/assets/404.png"
            alt="404 Not Found"
            style={{ maxWidth: '200px' }}
            className="mb-4"
          />
          <h1 className="display-4">404</h1>
          <h3 className="mb-3">Oops! The page you're looking for doesn't exist.</h3>
          <p className="text-muted mb-4">
            Maybe the link is broken or the product has been removed.
          </p>
          <Button variant="primary" style={{width: "180px"}} onClick={() => navigate('/')}>
            Go to Home Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
