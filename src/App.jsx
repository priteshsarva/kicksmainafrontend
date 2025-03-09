import React, { useState } from 'react';
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
import ProductGride from './components/ProductGride';
import ProductFilters from './components/ProductFilters';
import PriivacyPolicy from './components/legal/PriivacyPolicy';

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
  {
    id: 5,
    name: 'Basketball Pro',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
    category: 'sneakers',
    brand: 'Jordan'
  },
  {
    id: 6,
    name: 'Hiking Boots',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4',
    category: 'boots',
    brand: 'Merrell'
  },
  {
    id: 7,
    name: 'Casual Loafers',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
    category: 'loafers',
    brand: 'Clarks'
  },
  {
    id: 8,
    name: 'Trail Runners',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c03829',
    category: 'sneakers',
    brand: 'Salomon'
  },
  {
    id: 9,
    name: 'Formal Oxfords',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1581101767113-1677c9799b0d',
    category: 'dress',
    brand: 'Cole Haan'
  },
  {
    id: 10,
    name: 'Slip-On Canvas',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33',
    category: 'casual',
    brand: 'Vans'
  },
  {
    id: 11,
    name: 'Winter Boots',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b',
    category: 'boots',
    brand: 'Sorel'
  },
  {
    id: 12,
    name: 'Running Trail',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2',
    category: 'sneakers',
    brand: 'Brooks'
  }
];

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(products.slice(0, 10));

  const handleFilterChange = (newFilters) => {
    const filtered = products.filter(product => {
      const matchesBrand = newFilters.brands.length === 0 || newFilters.brands.includes(product.brand);
      const matchesCategory = newFilters.categories.length === 0 || newFilters.categories.includes(product.category);
      return matchesBrand && matchesCategory;
    });
    setFilteredProducts(filtered.slice(0, 10));
  };

  return (
    <>
      <Router>
        <ScrollToTop />
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
                <ProductFilters onFilterChange={handleFilterChange} />
                <ProductGride products={{ products: filteredProducts }} />
              </>
            }
          />
          <Route
            path="/product/:id"
            element={<ProductPage products={products} />}
          />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PriivacyPolicy />} />
          <Route path="/returns" element={<ReturnPolicy />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <FooterOne />
      </Router>
    </>
  );
};

export default App;
