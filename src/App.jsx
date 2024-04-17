// Base
import { Outlet } from 'react-router-dom';

// Components
// import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
