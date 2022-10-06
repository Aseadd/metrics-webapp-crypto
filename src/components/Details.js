import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import Navbar from './Navbar';

function Details() {
  const { id } = useParams();
  const coins = useSelector((state) => state.coinsReducer.coins);
  const coin = coins.find((coin) => coin.id === id);
  return (
    <div>
      <Navbar Title={<IoChevronBackCircleOutline />} />

      <div className="coin-details">
        <div className="coinImg">
          <div className="coinIcons">
            <p>💰</p>
            <p>₿ </p>
            <p>🪙</p>
          </div>
        </div>
        <div className="coin-details__header">
          <img src={coin.icon} alt="coin" />
          <div className="coin-info">
            <h1>{coin.name}</h1>
            <p>
              #
              {coin.rank}
            </p>
          </div>
        </div>
        <div className="coin-name">
          <p>Coin Name</p>
          <p>{coin.name}</p>
        </div>
        <div className="coin-name">
          <p>Coin Symbol</p>
          <p>{coin.symbol}</p>
        </div>
        <div className="coin-name">
          <p>Coin Price</p>
          <p>{coin.price}</p>
        </div>
        <div className="coin-name">
          <p>Coin Volume</p>
          <p>{coin.volume}</p>
        </div>
        <div className="coin-name">
          <p>Coin Market Cap</p>
          <p>{coin.marketCap}</p>
        </div>
        <div className="coin-name">
          <p>Coin Total Supply</p>
          <p>{coin.totalSupply}</p>
        </div>
        <div className="coin-name">
          <p>Coin Price Change in Hour</p>
          <p>{coin.priceChange1h}</p>
        </div>
        <div className="coin-name">
          <p>Coin Price Change in Day</p>
          <p>{coin.priceChange1d}</p>
        </div>
        <div className="coin-name">
          <p>Coin Price Change in Week</p>
          <p>{coin.priceChange1w}</p>
        </div>
        <div className="coin-name">
          <p>Website Link</p>
          <p>{coin.websiteUrl}</p>
        </div>
        <div className="coin-name">
          <p>Twitter Link</p>
          <p>{coin.twitterUrl}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
