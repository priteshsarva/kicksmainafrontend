import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import ProductGride from './ProductGride'
import ProductFilters from './ProductFilters'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = (products) => {
    const { searchterm, searchcategory } = useParams();

console.log(searchterm, searchcategory);

    const [filteredProducts, setFilteredProducts] = useState(products.products);




    const filterBySize = (product, size) => {

        try {
            const sizes = JSON.parse(product.sizeName); // Convert JSON string to array
            return sizes.includes(size.toString());
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
        console.log(newFilters);

        const filtered = products.products.filter(product => {
            const matchesBrand = newFilters.brands.length === 0 ||
                newFilters.brands.some(brand =>
                    product.productName.toLowerCase().includes(brand.toLowerCase())
                )

            // const matchesCategory = newFilters.categories.length === 0 || 
            //     newFilters.categories.includes(product.catName);

            const matchSize = newFilters.sizes.length === 0 || filterBySize(product, newFilters.sizes)
            const matchesCategory = newFilters.categories.length === 0 || filterByCategory(product, newFilters.categories)


            return matchesBrand
                && matchSize
                && matchesCategory;
        });
        setFilteredProducts(filtered);
    };



    useEffect(() => {
        if (searchterm) {
            const filtered = products.products.filter(product => {

                const matchesBrand = product.productName.toLowerCase().includes(searchterm.toLowerCase());

                return matchesBrand;
            });
            setFilteredProducts(filtered);
        } else {
            // If no search term, reset to all products
            setFilteredProducts(products.products);
        }

        if (searchcategory) {
            const filtered = products.products.filter(product => {

                const matchesBrand = product.catName.toLowerCase().includes(searchcategory.toLowerCase());

                return matchesBrand;
            });
            setFilteredProducts(filtered);
        } else {
            // If no search term, reset to all products
            setFilteredProducts(products.products);
        }

    }, [searchterm])



    return (
        <>
            {/* Products with Filters */}
            <div className="container py-5">

                <div className="row flex-column flex-sm-row">

                    {/* Sidebar for Filters */}
                    <div
                        // className="col-4 col-md-6 col-lg-8 "
                        className="col-sm-3 col-md-3 "
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

                    </div>
                </div>
            </div>

        </>
    )
}

export default AllProducts
