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
    const [url, seturl] = useState('')

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

        let urls = `${baseUrl}/product/search?`;

        if (newFilters.brands.length > 0) {
            console.log("brand filter applied");
            urls += `q=${encodeURIComponent(newFilters.brands[0])}&`;
        }

        if (newFilters.categories.length > 0) {
            console.log("category filter applied");
            urls += `category=${encodeURIComponent(newFilters.categories[0])}&`;
        }

        if (newFilters.sizes.length > 0) {
            console.log("size filter applied");
            urls += `size=${encodeURIComponent(newFilters.sizes[0])}&`;
        }

        // Remove trailing '&' if it exists
        // if (urls.endsWith('&')) {
        //     urls = urls.slice(0, -1);
        // }
        // product / search ? q = { jor } & size={ 42 }& category={ men }& result={ 2 }& page={ 2 }
        urls += `result=20&page=1`;


        console.log("Constructed URL:", urls);

        seturl(urls)

        fetch(urls, {
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







        // const filtered = products.filter(product => {
        //     const matchesBrand = newFilters.brands.length === 0 ||
        //         newFilters.brands.some(brand =>
        //             product.productName.toLowerCase().includes(brand.toLowerCase())
        //         )

        //     // const matchesCategory = newFilters.categories.length === 0 || 
        //     //     newFilters.categories.includes(product.catName);

        //     const matchSize = newFilters.sizes.length === 0 || filterBySize(product, newFilters.sizes)
        //     const matchesCategory = newFilters.categories.length === 0 || filterByCategory(product, newFilters.categories)


        //     return matchesBrand
        //         && matchSize
        //         && matchesCategory;
        // });
        // setFilteredProducts(filtered);
        // console.log(filteredProducts);


    };




    useEffect(() => {
        sethash(window.location.hash)

        console.log(filteredProducts);

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


        let urls = ""

        if (hash.includes('#/category/')) {
            urls = `${baseUrl}/product/search?category=${searchcategory}`
        }
        else if (hash.includes('#/search/')) {
            urls = `${baseUrl}/product/search?q=${searchterm}`

        } else if (hash.includes('#/product')) {
            urls = `${baseUrl}/product/results`
            // const searchQuery = hash.split('#/search/')[1];
            // console.log('Search Query:', decodeURIComponent(searchQuery));
        }

        console.log(urls);

        seturl(urls)

        fetch(urls, {
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





    }, [searchterm, window.location.hash])



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
