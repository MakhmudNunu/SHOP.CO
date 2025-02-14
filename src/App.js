import Homepage from './components/Homepage/Homepage';
import Cart from './components/Cart/Cart';
import Detail from './components/Detail/Detail';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
