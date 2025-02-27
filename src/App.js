import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import LoadingSpinner from './components/common/LoadingSpinner/LoadingSpinner';
import ProductsList from './components/product/ProductsList/ProductsList';
import OffersList from './components/offers/OffersList/OffersList';
import CategoriesList from './components/categories/CategoriesList/CategoriesList';
import './assets/styles/global.css';

// Lazy Loading
const Home = lazy(() => import('./pages/Home/Home'));
const ProductDetails = lazy(() =>
  import('./pages/ProductDetails/ProductDetails')
);
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const About = lazy(() => import('./pages/About/About'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Offers = lazy(() => import('./pages/offers/Offers/Offers'));
const OfferDetails = lazy(() =>
  import('./pages/offers/OfferDetails/OfferDetails')
);
const Signup = lazy(() => import('./pages/Signup/Signup'));
const Login = lazy(() => import('./pages/Login/Login'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const EditProfile = lazy(() => import('./pages/EditProfile/EditProfile'));

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories_list" element={<CategoriesList />} />
              <Route path="/products_list" element={<ProductsList />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/offer/:id" element={<OfferDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/edit_profile" element={<EditProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
