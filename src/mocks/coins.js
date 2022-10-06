const coins = () => Promise.resolve({
  coin: [
    {
      id: 'bitcoin',
      symbol: 'btc',
      name: 'Bitcoin',
    },
    {
      id: 'ethereum',
      symbol: 'eth',
      name: 'Ethereum',
    },
  ],
});

export default coins;
