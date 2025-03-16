import React from 'react'
import ProductGride from './ProductGride'
import ProductFilters from './ProductFilters'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SingleCollection = (products) => {
  // old code
  // const [filteredProducts, setFilteredProducts] = useState([]);


  // const handleFilterChange = (filters) => {
  //   let filtered = [...products];

  //   // Apply brand filter
  //   if (filters.brands.length > 0) {
  //     filtered = filtered.filter(product => filters.brands.includes(product.brand));
  //   }

  //   // Apply category filter
  //   if (filters.categories.length > 0) {
  //     filtered = filtered.filter(product => filters.categories.includes(product.category));
  //   }

  //   // Apply price filter
  //   filtered = filtered.filter(product => product.price <= filters.priceRange[1]);

  //   // Apply search filter
  //   if (searchQuery) {
  //     filtered = filtered.filter(product =>
  //       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       product.category.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //   }

  //   setFilteredProducts(filtered);
  // };


  // new code


  const [filteredProducts, setFilteredProducts] = useState(products.products.slice(0, 9));


  const filterBySize = (product, size) => {

    try {
      const sizes = JSON.parse(product.sizeName); // Convert JSON string to array
      return sizes.includes(size.toString());
      // console.log(JSON.parse(product.sizeName));

    } catch (error) {
      console.error("Error parsing sizeName for product:", product.productId, error);
      return false;
    }

  };
  const filterByCategory = (product, category) => {
    try {
      const categories = product.catName.toLowerCase(); // Convert JSON string to array
      console.log(categories.includes(category));
      return categories.includes(category.toString().toLowerCase());
    } catch (error) {
      console.error("Error parsing sizeName for product:", product.productId, error);
      return false;
    }
  };

  const handleFilterChange = (newFilters) => {

    const filtered = products.products.filter(product => {
      const matchesBrand = newFilters.brands.length === 0 ||
        newFilters.brands.some(brand =>
          product.productName.toLowerCase().includes(brand.toLowerCase())
        );

      const matchSize = newFilters.sizes.length === 0 || filterBySize(product, newFilters.sizes)
      const matchesCategory = newFilters.categories.length === 0 || filterByCategory(product, newFilters.categories)


      return matchesBrand
        && matchSize
        && matchesCategory;
    });

    // const filtered = products.products.filter(product => {
    //   const matchesBrand = newFilters.brands.length === 0 || newFilters.brands.includes(product.productBrand);
    //   const matchesCategory = newFilters.categories.length === 0 || newFilters.categories.includes(product.catName);
    //   return matchesBrand && matchesCategory;
    // });

    setFilteredProducts(filtered.slice(0, 9));
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
            <ProductGride products={{ products: filteredProducts }} />

            <Link to='/product' className='w-100 d-flex justify-content-center text-dark mt-4 btn btn-light fw-semibold px-4 py-2 rounded-0'><h5>View All Products</h5></Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default SingleCollection
