import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import CoinDetails from './components/CoinDetails';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/coins', element: <Coins /> },
  { path: '/exchanges', element: <Exchanges /> },
  { path: '/coin/:id', element: <CoinDetails /> },
];

export default routes;
