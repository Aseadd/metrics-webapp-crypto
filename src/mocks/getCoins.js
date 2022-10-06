import coins from './coins';

const getCoins = () => coins().then((res) => res.coin);

export default getCoins;
