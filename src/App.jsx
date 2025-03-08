import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBaar from './components/Navbar';
import './index.css'
import HeroSection from './components/HeroSection';
import ShopBrand from './components/shopBrand';
import FooterOne from './components/FooterOne';
import './custombootstrap.css';
import ShoeCarousel from './components/ShoeCarousel';
import FeaturedCategories from './components/FeaturedCategories';
import SingleCollection from './components/singleCollection';
import ProductPage from './components/ProductPage';

import ProductGride from './components/ProductGride';

const App = () => {



  // Mock data for products
  const products = [
    {
      id: 1,
      name: 'Classic Black Sneaker',
      price: 99.99,
      image: [
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f",
        "https://images.unsplash.com/photo-1603487742131-4160ec999306",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
      ],
      category: 'sneakers',
      brand: 'Nike'
    },
    {
      id: 2,
      name: 'Urban Combat Boots',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f',
      category: 'boots',
      brand: 'Adidas'
    },
    {
      id: 3,
      name: 'Minimal Sandals',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306',
      category: 'sandals',
      brand: 'Puma'
    },
    {
      id: 4,
      name: 'Running Performance',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
      category: 'sneakers',
      brand: 'New Balance'
    },
  ];





  return (
    <>
      <Router>

        <NavBaar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ShopBrand />
                <FeaturedCategories />
                <ShoeCarousel productss={products} />
                <SingleCollection products={products} />
                {/* <ProductGride products={products}/> */}
              </>
            } />
          <Route
            path="/product/:id"
            element={<ProductPage products={products} />}
          />

        </Routes>
        <FooterOne />
      </ Router>
    </>
  )
}

export default App
