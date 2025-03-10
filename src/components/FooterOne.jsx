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
            <section className="py-5">
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
            </section>

            {/* USP Section */}
            <section className="py-5">
                <div className="container px-3 text-center">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center">
                                <Truck className="mb-3" style={{ width: "48px", height: "48px" }} />
                                <h3 className="fw-semibold">Free Shipping</h3>
                                <p className="text-secondary">On all orders over $100</p>
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
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white py-5">
                <div className="container px-3">
                    <div className="row g-4">
                        <div className="col-md-3">
                            <h4 className="fw-bold mb-3">Contact</h4>
                            <p>support@kicksmania.com</p>
                            <p>+91 97235 15869</p>
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
