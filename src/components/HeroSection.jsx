import React from 'react'
import { Link } from 'react-router-dom'
import herobanner from '../assets/images/Adidas Samba copy.jpg'


const HeroSection = () => {
    return (
        <>
            {/* Hero Section -1*/}
            {/* <div className="position-relative grayscale" style={{ height: "80vh", marginBottom: "3rem" }}>
                <img
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772"
                    alt="Monochrome Shoes"
                    className="w-100 h-100 object-fit-cover"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50 d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-white fw-bold text-center display-4">
                        Elevate Your Stride
                    </h1>
                    <p className="text-white text-center display-9">Premium Footwear Engineered for Performance </p>
                </div>
            </div> */}
            {/* Hero Section -2*/}
            <section className="position-relative" style={{ height: "80vh", marginBottom: "3rem" }}>
                <img
                    // src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80"
                    // src='https://images.unsplash.com/photo-1518656306295-aa28b28b2504?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    // src='https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    // src='https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    src={herobanner}

                    alt="Hero"
                    className="w-100 h-100 object-fit-cover filter "
                />
              
              {/* <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50 d-flex align-items-end justify-content-center text-center text-white pb-5"> */}
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end justify-content-center text-center text-white pb-5">
                    <div>
                        {/* <h2 className="display-1 fw-bold mb-3">Elevate Your Stride</h2>
                        <p className="fs-4 mb-4">Premium Footwear Engineered for Performance</p> */}
                        {/* <Link to='/' className='text-dark text-decoration-none'>  */}
                        <Link to='/product' className="btn btn-light fw-semibold px-4 py-2 rounded-0">
                            Shop New Arrivals
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HeroSection
