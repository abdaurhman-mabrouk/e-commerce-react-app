import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import NotFound from './pages/NotFound/NotFound';
import ProductsList from './components/product/ProductsList/ProductsList';
import About from './pages/About/About';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CategoriesList from './components/categories/CategoriesList/CategoriesList';
import Offers from './pages/Offers/Offers';
import OfferDetails from './components/offers/OfferDetails/OfferDetails';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories_list" element={<CategoriesList />} />
    <Route path="/products_list" element={<ProductsList />} />
    <Route path="/offers" element={<Offers />} />
    <Route path="/offer/:id" element={<OfferDetails />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/about" element={<About />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
