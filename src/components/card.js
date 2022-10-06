import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CryptoCard({ coin }) {
  return (
    <Card
      border="primary"
      className="card border-0 p-2 justify-content-center align-items-center"
    >
      <Card.Img variant="top" src={coin.icon} className="p-5 coin-img" />
      <Card.Body className="card-detail">
        <Card.Title>
          <h1>{coin.name}</h1>
        </Card.Title>
        <Card.Text className="card-detail">
          <span>{coin.symbol}</span>
          <span className="volume">{coin.volume}</span>
          <Link to={coin.id} style={{ textDecoration: 'none' }}>
            <div className="link-arrow">
              <p className="arrow-icon">➡</p>
            </div>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

CryptoCard.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
  }).isRequired,
};

export default CryptoCard;
