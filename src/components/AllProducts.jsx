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
    const [noproductFound, setnoproductFound] = useState(false)
    const [totalPage, settotalPage] = useState()
    const [curentPage, setcurentPage] = useState()
    // console.log(searchterm, searchcategory);

    const [catViseProductsearch, setcatViseProductsearch] = useState(false)

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
            // console.log(categories.includes(category));
            return categories.includes(category.toString().toLowerCase());
        } catch (error) {
            console.error("Error parsing sizeName for product:", product.productId, error);
            return false;
        }
    };

    //old with error of duplicate q parameters

    const handleFilterChange = (newFilters) => {
        // console.log(newFilters);

        let urls = `${baseUrl}/product/search?`;


        if (newFilters.brands.length > 0) {
            // console.log("brand filter applied");
            // console.log(newFilters.brands[0]);

            if (newFilters.brands[0] === "Crocs Slide") {
                urls += `q=${encodeURIComponent("croc")}&`;

            } else if (newFilters.brands[0] === "Airforce") {
                urls += `q=${encodeURIComponent("force")}&`;

            } else if (newFilters.brands[0] === "Louis Vuitton") {
                urls += `q=${encodeURIComponent("Vuitton")}&`;

            } else if (newFilters.brands[0] === "Converse") {
                urls += `q=${encodeURIComponent("conver")}&`;

            } else {
                urls += `q=${encodeURIComponent(newFilters.brands[0])}&`;
            }
        }

        if (newFilters.categories.length > 0) {
            // console.log("category filter applied");
            urls += `category=${encodeURIComponent(newFilters.categories[0])}&`;
        }

        if (newFilters.sizes.length > 0) {
            // console.log("size filter applied");
            urls += `size=${encodeURIComponent(newFilters.sizes[0])}&`;
        }

        // console.log(newFilters);


        if (newFilters.searchIncategoryByName && newFilters.searchIncategoryByName.length > 0) {

            // console.log("searchIncategoryByNamesize filter name");
            urls += `category=${encodeURIComponent(searchcategory)}&q=${encodeURIComponent(newFilters.searchIncategoryByName)}&`;           

        }




        // console.log(urls);
        let page = curentPage + 1
        seturl(`${urls}&result=20&page=?`)

        urls += `result=20&page=1`;

        // console.log("Constructed URL:", urls);


        fetch(urls, {
            method: 'GET',
        }).then(response => response.json()).then(data => {
            if (data.results != "") {
                setproducts(data.results)
                setnoproductFound(false)
                settotalPage(data.totalPages)
                setcurentPage(1)

            } else {
                setnoproductFound(true)

            }

        }).catch(error => console.error('Error:', error));



    };


    const handleloadmore = () => {
        const nextPage = curentPage + 1;
        // console.log(totalPage);
        // console.log(curentPage);


        // Update the page number in the existing URL
        const updatedUrl = url.replace("page=?", `page=${nextPage}`);
        // console.log("Loading from URL:", updatedUrl);

        fetch(updatedUrl, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    setproducts([...(products || []), ...data.results]);
                    
                    setnoproductFound(false);
                    settotalPage(data.totalPages);
                    setcurentPage(nextPage);
                } else {
                    setnoproductFound(true);
                }
            })
            .catch(error => console.error('Error:', error));
    };





    useEffect(() => {
        sethash(window.location.hash)

        // console.log(filteredProducts);

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
            setcatViseProductsearch(true)
            urls = `${baseUrl}/product/search?category=${searchcategory}`
        }
        else if (hash.includes('#/search/')) {
            urls = `${baseUrl}/product/search?q=${searchterm}`

        } else if (hash.includes('#/product')) {
            urls = `${baseUrl}/product/results?`
            // const searchQuery = hash.split('#/search/')[1];
            // console.log('Search Query:', decodeURIComponent(searchQuery));
        }
        // seturl(`${urls}&result=20&page=${curentPage+1}`)
        let page = curentPage + 1
        seturl(`${urls}&result=20&page=?`)




        fetch(urls, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setproducts(data.results)
                settotalPage(data.totalPages)
                setcurentPage(1)


            })
            .catch(error => console.error('Error:', error));





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
                                <ProductFilters onFilterChange={handleFilterChange} catViseProductsearch={catViseProductsearch} />

                            </div>

                            {/* Product Grid Section */}
                            <div
                                className="col"
                            >
                                {noproductFound ? <p>No Result Found</p> :
                                    <>
                                        <ProductGride products={{ products, url }} />
                                        {totalPage == curentPage ? "" :
                                            <Link
                                                // to='/product'
                                                onClick={handleloadmore}
                                                className='w-100 d-flex justify-content-center text-dark mt-4 btn bg-dark bg-opacity-25 fw-semibold px-4 rounded-0 hover:bg-opacity-50'>
                                                <h6>View All Products
                                                    <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
                                                    </svg>
                                                </h6>
                                            </Link>
                                        }
                                    </>
                                }
                            </div>
                        </div>
                    </div >
                </>
            }
        </>
    )
}

export default AllProducts
