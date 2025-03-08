import React from 'react'
import ProductGride from './ProductGride'
import ProductFilters from './ProductFilters'
import { useState } from 'react';


const SingleCollection = (products) => {
  const [filteredProducts, setFilteredProducts] = useState([]);


  const handleFilterChange = (filters) => {
    let filtered = [...products];

    // Apply brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => filters.brands.includes(product.brand));
    }

    // Apply category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.includes(product.category));
    }

    // Apply price filter
    filtered = filtered.filter(product => product.price <= filters.priceRange[1]);

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };



  return (
    <>
      {/* Products with Filters */}
      <div className="container py-5">

        <div className="row flex-column flex-sm-row">

          {/* Sidebar for Filters */}
          <div
            // className="col-4 col-md-6 col-lg-8 "
            className="col-sm-4 col-md-4"
            style={{
              // maxWidth:"16rem",
              padding: "1rem"
            }}
          >
            <ProductFilters onFilterChange={handleFilterChange} />

          </div>

          {/* Product Grid Section */}
          <div
            className="col"
          >
            <ProductGride products={filteredProducts.length > 0 ? filteredProducts : products} />

          </div>
        </div>
      </div>

    </>
  )
}

export default SingleCollection
