// Base
import { Outlet } from 'react-router-dom';

// Components
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
