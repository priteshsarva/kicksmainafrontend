import React from 'react'
import { Link } from 'react-router-dom';

const FeaturedCategories = () => {
    const categories = [
        { name: "Men's shoe", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519" },
        { name: "Women's shoe", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f" },
        { name: "Flip-Flop", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306" },
        { name: "UA Quality", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306" },
    ];
    return (
        <>
            <div className="container py-5 px-3">
                <h2 className="text-center mb-4 fw-bold">Featured Categories</h2>
                <div className="row g-4">
                    {categories.map((category) => (
                        // <div key={category.name} className="col-md-6">
                        <div key={category.name} className="col-6 col-md-3">

                            <div className="position-relative group overflow-hidden rounded shadow-sm cursor-pointer">

                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="img-fluid w-100"
                                    style={{ height: "150px", objectFit: "cover" }}
                                />
                                <Link to={`/category/${category.name.toLowerCase().slice(0, 3)}`}>
                                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center                  
                                ">

                                        <h3 className="text-white fw-bold">{category.name}</h3>
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
