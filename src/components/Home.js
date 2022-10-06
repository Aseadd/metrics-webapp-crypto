import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CryptoCard from './card';
import TotalCard from './totalCard';
import crypto from '../assets/bitcoin-logo.png';
import Navbar from './Navbar';
import './App.css';

function Home() {
  const coins = useSelector((state) => state.coinsReducer.coins);
  const [name, setName] = useState('');
  const handleSearch = (e) => {
    setName(e.target.value);
  };
  const filteredCoins = coins
    ? coins.filter(
      (coin) => coin.name
        .toLowerCase()
        .includes(
          name.toLowerCase()
                || coin.symbol.toLowerCase().includes(name.toLowerCase()),
        ) || coin.rank.toString().includes(name.toString()),
    )
    : [];
  if (coins === undefined) {
    return (
      <div className="d-flex justify-content-center align-items-center ring">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <Navbar Title="Crypto Tracker" />

      <div className="container">
        <div className="d-flex align-items-center justify-content-around total-card-container">
          <div className="d-flex align-items-center justify-content-around total-card">
            <img src={crypto} alt="Crypto Logo" className="logo-img" />
            <TotalCard header={coins} />
          </div>
          <div className="coinImg">
            <div className="coinIcons">
              <p>💰</p>
              <p>₿ </p>
              <p>🪙</p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center search-input">
            <input
              type="text"
              placeholder="Search Crypto by name, symbol or rank"
              className="search"
              onChange={handleSearch}
              value={name}
            />
          </div>
        </div>
        <div className="coins">
          {filteredCoins?.map((coin) => (
            <CryptoCard key={coin.id} coin={coin} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
