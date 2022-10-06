import coins from './coins';

const getCoins = () => {
  return coins().then((res) => res.coin);
};

export default getCoins;
