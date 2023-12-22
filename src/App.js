import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
import Home from './Component/Pages/Home/Home';
import Shop from './Component/Pages/Shop/Shop';
import MenShoes from './Component/Pages/Shop/MenShoes';
import WomenShoes from './Component/Pages/Shop/WomenShoes';
import KidsShoes from './Component/Pages/Shop/KidsShoes';
import ShopContextProvider from './Context/Shop-context';
import Cart from './Component/Pages/Cart/Cart';
import './Server';

function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/cart' element={<Cart />}/>
                <Route path='/menShoes' element={<MenShoes />}/>
                <Route path='/womenShoes' element={<WomenShoes />} />
                <Route path='/kidsShoes' element={<KidsShoes />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
