import React from 'react'
import { Link } from 'react-router-dom';

import { Truck, RefreshCcw, ShieldCheck, Instagram, Facebook, MessageCircle, Star, } from 'lucide-react';

const FooterOne = () => {
    const reviews = [
        {
            id: 1,
            name: "Sarah M.",
            rating: 5,
            text: "The most comfortable sneakers I've ever worn. Worth every penny!",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 2,
            name: "John D.",
            rating: 5,
            text: "Exceptional quality and style. These are my go-to shoes now.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 3,
            name: "Emily R.",
            rating: 5,
            text: "Perfect fit and amazing customer service. Highly recommend!",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000"
        }
    ];
    return (
        <>
            {/* Customer Reviews */}
            {/* <section className="py-5">
                <h2 className="text-center fw-bold mb-4">What Our Customers Say</h2>
                <div className="container px-3">
                    <div className="row g-4">
                        {reviews.map((review) => (
                            <div key={review.id} className="col-md-4">
                                <div className="bg-light p-4 rounded">
                                    <div className="d-flex align-items-center mb-3">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="rounded-circle object-fit-cover"
                                            style={{ width: "50px", height: "50px" }}
                                        />
                                        <div className="ms-3">
                                            <h3 className="fw-semibold mb-1">{review.name}</h3>
                                            <div className="d-flex">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} className="text-dark" style={{ width: "16px", height: "16px" }} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-secondary">{review.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* USP Section */}
            {/* <section className="py-5">
                <div className="container px-3 text-center">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center">
                                <Truck className="mb-3" style={{ width: "48px", height: "48px" }} />
                                <h3 className="fw-semibold">Free Shipping</h3>
                                <p className="text-secondary">7 days replace / exchange</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center">
                                <RefreshCcw className="mb-3" style={{ width: "48px", height: "48px" }} />
                                <h3 className="fw-semibold">30-Day Returns</h3>
                                <p className="text-secondary">Hassle-free returns</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center">
                                <ShieldCheck className="mb-3" style={{ width: "48px", height: "48px" }} />
                                <h3 className="fw-semibold">Secure Checkout</h3>
                                <p className="text-secondary">100% protected</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            <section class="py-5">
                <div class="container px-3 text-center">
                    <div class="row row-cols-3 g-4">
                        <div class="col">
                            <div class="d-flex flex-column align-items-center">
                                <Truck className="mb-3 col-4" style={{ width: "48px", height: "48px" }} />
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck mb-3 col-4" viewBox="0 0 24 24">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                                    <path d="M15 18H9"></path>
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                                    <circle cx="17" cy="18" r="2"></circle>
                                    <circle cx="7" cy="18" r="2"></circle>
                                </svg> */}
                                <h5 class="fw-semibold">Free Shipping</h5>
                                {/* <p class="text-secondary">7 days replace/ exchange</p> */}
                            </div>
                        </div>
                        <div class="col">
                            <div class="d-flex flex-column align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw mb-3 col-4" viewBox="0 0 24 24">
                                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                    <path d="M3 3v5h5"></path>
                                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                                    <path d="M16 16h5v5"></path>
                                </svg>
                                <h5 class="fw-semibold">7 days replace/ exchange</h5>
                                {/* <h5 class="fw-semibold">30-Day Returns</h5>
                                <p class="text-secondary">Hassle-free returns</p> */}
                            </div>
                        </div>
                        <div class="col">
                            <div class="d-flex flex-column align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check mb-3 col-4" viewBox="0 0 24 24">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <h5 class="fw-semibold">Secure Checkout</h5>
                                {/* <p class="text-secondary">100% protected</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="bg-dark text-white py-5">
                <div className="container px-3">
                    <div className="row g-4">
                        <div className="col-md-3">
                            <h4 className="fw-bold mb-3">Contact</h4>
                            <a href="mailto:kickzmania.in@gmail.com" style={{ textDecoration: "none", color: 'white' }}>kickzmania.in@gmail.com</a><br />
                            <a href="tel:+919723515869" style={{ textDecoration: "none", color: 'white' }}>+91 97235 15869 </a>
                        </div>
                        <div className="col-md-3">
                            <h4 className="fw-bold mb-3">Customer Service</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/shipping" className="text-light text-decoration-none">Shipping Info</Link></li>
                                <li><Link to="/returns" className="text-light text-decoration-none">Returns</Link></li>
                                <li><Link to="/faq" className="text-light text-decoration-none">FAQ</Link></li>
                            </ul>

                        </div>
                        <div className="col-md-3">
                            <h4 className="fw-bold mb-3">Legal</h4>
                            <ul className="list-unstyled">
                                <li><Link to="/terms" className="text-light text-decoration-none">Terms of Service</Link ></li>
                                <li><Link to="/privacy" className="text-light text-decoration-none">Privacy Policy</Link ></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="fw-bold mb-3">Follow Us</h4>
                            <div className="d-flex gap-3">
                                <a href='https://www.instagram.com/kicks_mania.in/#' target='_blank' style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    background: "none",
                                    border: "none",
                                    padding: 0,
                                    margin: 0,
                                    font: "inherit",
                                    outline: "none"
                                }}><Instagram className="cursor-pointer" style={{ width: "24px", height: "24px" }} /></a>
                                <a href='https://www.instagram.com/kicks_mania.in/#' target='_blank' style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    background: "none",
                                    border: "none",
                                    padding: 0,
                                    margin: 0,
                                    font: "inherit",
                                    outline: "none"
                                }}> <Facebook className="cursor-pointer" style={{ width: "24px", height: "24px" }} /></a>
                                <a href='https://www.instagram.com/kicks_mania.in/#' target='_blank' style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    background: "none",
                                    border: "none",
                                    padding: 0,
                                    margin: 0,
                                    font: "inherit",
                                    outline: "none"
                                }}> <MessageCircle className="cursor-pointer" style={{ width: "24px", height: "24px" }} /></a>
                            </div>
                        </div>
                        {/* <div className="col-md-3">
                            <h4 className="fw-bold mb-3">Newsletter</h4>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-control mb-2 "
                            />
                            <button className="btn btn-light w-100">Subscribe</button>
                            <p className="text-muted mt-2">
                                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                            </p>
                        </div> */}
                    </div>
                </div >
            </footer >

        </>
    )
}

export default FooterOne
