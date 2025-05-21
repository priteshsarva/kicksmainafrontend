import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBaar from './components/Navbar';
import './index.css';
import HeroSection from './components/HeroSection';
import ShopBrand from './components/shopBrand';
import FooterOne from './components/FooterOne';
import './custombootstrap.css';
import ShoeCarousel from './components/ShoeCarousel';
import FeaturedCategories from './components/FeaturedCategories';
import SingleCollection from './components/SingleCollection';
import ProductPage from './components/ProductPage';
import TermsOfService from './components/legal/TermsOfService';
import ReturnPolicy from './components/legal/ReturnPolicy';
import ShippingPolicy from './components/legal/ShippingPolicy';
import Faq from './components/legal/Faq';

import PriivacyPolicy from './components/legal/PriivacyPolicy';
import ProductPageWithPrive from './components/ProductPageWithPrive';
import Loader from './components/Loader';
import AllProducts from './components/AllProducts';
import { Navigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;

const App = () => {

  const [products, setproducts] = useState('')


  useEffect(() => {
    if (products == '') {
      fetch(`${baseUrl}/product/firstdata`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          setproducts(data.results)
        })
        .catch(error => console.error('Error:', error));
    }

  }, [products])




  return (
    <>
      {products == "" ?
        <Loader />
        :
        <Router>
          <ScrollToTop />
          <NavBaar productss={products} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ShopBrand />
                  <ShoeCarousel productss={products} />
                  <FeaturedCategories />
                  <SingleCollection products={products} />
                </>
              }
            />
            <Route
              path="/product/:id"
              element={<ProductPage products={products} />}
            />
            <Route
              path="/product/:id/fkp"
              element={<ProductPageWithPrive products={products} />}
            />
            <Route
              path="/product/"
              element={<AllProducts products={products} />}
            />
            <Route
              path="/search/:searchterm"
              element={<AllProducts
              //  products={products}
              />}
            />
            <Route
              path="/category/:searchcategory"
              element={<AllProducts products={products} />}
            />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PriivacyPolicy />} />
            <Route path="/returns" element={<ReturnPolicy />} />
            <Route path="/shipping" element={<ShippingPolicy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <FooterOne />
        </Router>
      }
    </>
  );
};

export default App;
