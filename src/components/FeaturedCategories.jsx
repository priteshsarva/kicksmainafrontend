import React from 'react'
import { Link } from 'react-router-dom';

const FeaturedCategories = () => {
    const categories = [
        { name: "Men's shoe", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519", url: "Men shoes", },
        { name: "Women's shoe", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f", url: "Women shoes", },
        { name: "Flip-Flop", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306", url: "Flip-Flop", },
        { name: "UA Quality", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306", url: "UA Quality", },
    ];
    return (
        <>
            {/* <div className="container pb-3 px-3">
                <h2 className="text-center text-md-left mb-4">Find by Category</h2>
                <div className="row g-4">
                    {categories.map((category) => (
                        // <div key={category.name} className="col-md-6">
                        <div key={category.name} className="col-6 col-md-3">

                            <div className="position-relative group overflow-hidden rounded-0 shadow-sm cursor-pointer">

                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="img-fluid w-100"
                                    style={{ height: "150px", objectFit: "cover" }}
                                />
                                <Link to={`/category/${category.name.toLowerCase().slice(0, 3)}`} style={{ textDecoration: 'none' }}>
                                    <div className="
                                    position-absolute 

                                    top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center                 
                                ">

                                        <h5 className="text-white fw-bold">{category.name}</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div > */}



            <div className="container pb-3 px-3">
                <h2 className="text-center text-md-left mb-4">Find by Category</h2>
                <div className="row g-4">
                    {categories.map((category) => (
                        // <div key={category.name} className="col-md-6">
                        <div key={category.name} className="col-6 col-md-3">

                            <div className="position-relative group overflow-hidden rounded-0 shadow-sm cursor-pointer">
                                <Link to={`/category/${category.url}`} style={{ textDecoration: 'none' }}>
                                    <div className="top-0 start-0 w-100 h-100 bg-dark  d-flex align-items-center justify-content-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center py-3">
                                        <h5 className="text-white fw-bold">{category.name}</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div >




        </>
    )
}

export default FeaturedCategories
