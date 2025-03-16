import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import ProductGride from './ProductGride'
import ProductFilters from './ProductFilters'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = (products) => {
    const { searchterm } = useParams();

    const [filteredProducts, setFilteredProducts] = useState(products.products);







    const handleFilterChange = (newFilters) => {

        const filtered = products.products.filter(product => {
            const matchesBrand = newFilters.brands.length === 0 ||
                newFilters.brands.some(brand =>
                    product.productName.toLowerCase().includes(brand.toLowerCase())
                );

            // const matchesCategory = newFilters.categories.length === 0 || 
            //     newFilters.categories.includes(product.catName);

            return matchesBrand
            // && matchesCategory;
        });
        setFilteredProducts(filtered);
    };



    useEffect(() => {
        if (searchterm) {
            const filtered = products.products.filter(product => {
                console.log('from filter');

                const matchesBrand = product.productName.toLowerCase().includes(searchterm.toLowerCase());

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
