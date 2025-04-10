import React from 'react'
import { Link } from 'react-router-dom';
import './ProductCard.css'


const ProductGride = (products) => {
    const listproduct = products.products.products

    return (
        <>
            <div className="container">

                <div className="row g-2">
                    {listproduct.length === 0 ? "No Porducts found" : ""}
                    {listproduct
                        .map((product) => (

                            <div className="col-6 col-md-3 col-sm-3" key={product.productId}>
                                <div class="card border-0  h-100 product-card" style={{ overflow: 'hidden' }}>
                                    <Link to={`/product/${product.productId}`} class="text-decoration-none position-relative" data-discover="true" style={{ color: 'inherit' }}>
                                        <div class="card-img-container position-relative" style={{ paddingTop: "133.5%" }}>
                                            <img
                                                class="card-img-top position-absolute top-0 start-0 w-100 h-100 object-fit-cover transition-opacity"
                                                src={Array.isArray(product.image) ? product.image[0] : product.featuredimg}
                                                alt={product.productName}
                                                loading="lazy"
                                                style={{ opacity: 1, transition: 'opacity 0.3s ease', aspectRatio: "1/1" }} />
                                        </div>

                                        <div class="card-body pt-2 px-2 tex-center">
                                            <h5 class="card-title mb-2" style={{ fontWeight: 600, fontSize: '1.1rem', color: "#212529" }}>
                                                {product.productName}
                                            </h5>



                                            <div class="size-options d-flex flex-wrap gap-1 mb-2">
                                                {JSON.parse(product.sizeName).map((size) => (
                                                    <label
                                                    key={size}   
                                                    className="variant-btn btn btn-sm btn-outline-dark"
                                                     >
                                                    <input
                                                            type="checkbox"
                                                            className="d-none"
                                                            checked={true}
                                                            onChange={() => handleCheckboxChange("sizes", size)}
                                                        />
                                                         {size}
                                                    </label>
                                                ))}
                                            </div>

                                            {/* <div class="price-container">
                                                <div class="price__sale">
                                                    <span class="price-item price-item--sale fw-bold" style="font-size: 1.1rem;">
                                                        Rs. 12,999.00
                                                    </span>
                                                </div>
                                            </div>

                                            <div class="promo-badge mt-2">
                                                <span class="badge bg-light text-dark border" style="font-size: 0.75rem;">
                                                    Extra ₹500 Off on Prepaid Orders
                                                </span>
                                            </div> */}
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        ))}
                </div>

               
            </div>

        </>
    )
}

export default ProductGride
