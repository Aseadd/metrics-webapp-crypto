import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const TotalCard = ({ header }) => {
  const { marketCap, volume } = header[0];
  return (
    <Card className="border-0 main-card">
      <Card.Title>
        <h1>Market Cap</h1>
        <span>{marketCap}</span>
      </Card.Title>
      <Card.Body>
        <Card.Text className="d-flex flex-column">
          <h1>Total Volume</h1>
          <span>{volume}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

TotalCard.propTypes = {
  header: PropTypes.arrayOf(
    PropTypes.shape({
      marketCap: PropTypes.string.isRequired,
      volume: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TotalCard;
