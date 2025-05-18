import React from 'react'
// import nike from '../assets/images/brandsnike.jpg'
// import brandsadidas from '../assets/images/brandsadidas.jpg'
// import brandscrocsslide from '../assets/images/brandscrocs-slide .jpg'
// import brandsjordan from '../assets/images/brandsjordan.jpg'
// import yeezy from '../assets/images/yeezy.jpg'
// import brandsothers from '../assets/images/brandsothers.jpg'


import nike from '../assets/images/brand-nike.jpg'
import brandsadidas from '../assets/images/adidas.png'
import brandscrocsslide from '../assets/images/crocs.png'
import brandsjordan from '../assets/images/brand-jordan.jpg'
import yeezy from '../assets/images/brand-yeezy.jpg'
import brandsothers from '../assets/images/other.jpg'



import { Link } from 'react-router-dom'



const ShopBrand = () => {
    const categories = [
        {
            title: "Nike",
            image: nike,
            description: "Athletic & Casual Sneakers",
            url: "Nik",
        },
        {
            title: "Adidas",
            image: brandsadidas,
            description: "Classic & Combat Boots",
            url: "Adi",
        },
        {
            title: "Jordan",
            image: brandsjordan,
            description: "Comfort & Style Sandals",
            url: "Jor",
        },
        {
            title: "Yeezy ",
            image: yeezy,
            description: "Comfort & Style Sandals",
            url: "Yee",
        },
        {
            title: "Crocs/slide ",
            image: brandscrocsslide,
            description: "Athletic & Casual Sneakers",
            url: "Croc",
        },
        {
            title: "Others",
            image: brandsothers,
            description: "Classic & Combat Boots",
            url: "",
        },

    ];
    return (
        <>

            <section class="py-3 py-md-4 ">
                <div class="container">
                    <div class="row mb-4">
                        <div class="col-12">
                            <h2 class="text-center text-md-left mb-0">Discover Brands You Love</h2>
                        </div>
                    </div>

                    <div class="row">
                        {categories.map((category, index) => (
                            <div key={index} class="col-6 col-md-4 col-lg-4 mb-2 group">
                                <Link to={`${category.title === 'Others' ? '/product' : `/search/` + category.url}`}
                                    style={{ textDecoration: "none" }}>
                                    <div class="card h-100 border-0  rounded-0 ">
                                        <div class="card-img-top position-relative overflow-hidden rounded-0 " style={{ paddingTop: "60%" }}>
                                            <img src={category.image}
                                                alt={category.title}
                                                class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover  filter grayscale transition group-hover:grayscale-0 transition-all duration-300 grayscale-sm-0 "
                                                loading="lazy" />
                                        </div>
                                        <div class="text-center " style={{ padding: ".5rem .5rem" }}>
                                            <h3 class="h5 card-title mb-0">
                                                <span href="/collections/air-jordan" class="stretched-link text-decoration-none text-dark">
                                                    {category.title}
                                                    <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*             
            Old Code
             <section className="py-5 px-3">
                <h2 className="text-center mb-4 fw-bold">Shop by Brands</h2>
                <div className="container">
                    <div className="row g-4">
                        {categories.map((category, index) => (
                            <div key={index} className="col-6 col-md-3 col-sm-3">
                                <div key={index} className="group relative">
                                    <Link to={`/search/${category.title === 'Others' ? '' : category.title.slice(0, 3)}`}>
                                        <div className="position-relative overflow-hidden text-center" style={{ paddingBottom: "60%" }}>
                                            <img
                                                src={category.image}
                                                alt={category.title}
                                                className="position-absolute  top-0 start-0 w-100 h-100 object-fit-cover filter grayscale transition group-hover:grayscale-0 transition-all duration-300 grayscale-sm-0"
                                            />
                                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50 d-flex flex-column align-items-center justify-content-center text-white opacity-0 group-hover:opacity-100 transition-opacity opacity-sm-100">
                                                <h3 className="h6 h4-md fw-bold mb-2">{category.title}</h3>
                                                <Link to={`/search/${category.title === 'Others' ? '' : category.title.slice(0, 3)}`} className="btn btn-light text-dark px-1 py-1 fw-semibold rounded-0">Shop Now</Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section > */}
        </>
    )
}

export default ShopBrand
