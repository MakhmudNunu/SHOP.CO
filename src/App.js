import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cart/Cart';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
