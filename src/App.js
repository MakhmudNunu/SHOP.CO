import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cart/Cart';
import Detail from './components/Detail/Detail';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
