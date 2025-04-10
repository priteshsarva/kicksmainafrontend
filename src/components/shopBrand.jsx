import React from 'react'
import nike from '../assets/images/brandsnike.jpg'
import brandsadidas from '../assets/images/brandsadidas.jpg'
import brandscrocsslide from '../assets/images/brandscrocs-slide .jpg'
import brandsjordan from '../assets/images/brandsjordan.jpg'
import brandsnewbalenciaga from '../assets/images/brandsnew balenciaga .jpg'
import brandsothers from '../assets/images/brandsothers.jpg'
import { Link } from 'react-router-dom'



const ShopBrand = () => {
    const categories = [
        {
            title: "Nike",
            image: nike,
            description: "Athletic & Casual Sneakers"
        },
        {
            title: "Adidas",
            image: brandsadidas,
            description: "Classic & Combat Boots"
        },
        {
            title: "Jordan",
            image: brandsjordan,
            description: "Comfort & Style Sandals"
        },
        {
            title: "New Balenciaga ",
            image: brandsnewbalenciaga,
            description: "Comfort & Style Sandals"
        },
        {
            title: "Crocs/slide ",
            image: brandscrocsslide,
            description: "Athletic & Casual Sneakers"
        },
        {
            title: "Others",
            image: brandsothers,
            description: "Classic & Combat Boots"
        },

    ];
    return (
        <>
            <section className="py-5 px-3">
                <h2 className="text-center mb-4 fw-bold">Shop by Brands</h2>
                

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
