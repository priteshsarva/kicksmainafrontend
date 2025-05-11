import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import ProductGride from './ProductGride'
import ProductFilters from './ProductFilters'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Loader from './Loader';

const baseUrl = import.meta.env.VITE_BASE_URL;

const AllProducts = () => {
    const { searchterm, searchcategory } = useParams();
    const [products, setproducts] = useState("")
    const [hash, sethash] = useState(window.location.hash)

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
       
        if (products != '') {
            if (searchterm) {
                const filtered = products.filter(product => {

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
        }

        if (products == '') {
            let url = ""
            console.log(hash);

            if (hash.includes('#/category/')) {
                url = `${baseUrl}/product/search?category=${searchcategory}`
            }
            else if (hash.includes('#/search/')) {
                url = `${baseUrl}/product/search?q=${searchterm}`

            } else if (hash.includes('#/product')) {
                url = `${baseUrl}/product/results`
                // const searchQuery = hash.split('#/search/')[1];
                // console.log('Search Query:', decodeURIComponent(searchQuery));
            }

            console.log(url);

            fetch(url, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    setproducts(data.results)
                    // products = data.results
                    console.log(data.results);
                    console.log(products);
                })
                .catch(error => console.error('Error:', error));
        }

    }, [searchterm])



    return (
        <>
            {products == "" ? <Loader /> :
                <>
                    {/* Products with Filters */}
                    < div className="container py-5">

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
                                {/* <ProductGride products={{ products: filteredProducts }} /> */}
                                <ProductGride products={{ products }} />

                            </div>
                        </div>
                    </div >
                </>
            }
        </>
    )
}

export default AllProducts
