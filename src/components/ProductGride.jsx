import React from 'react'
import { Link } from 'react-router-dom';
import './ProductCard.css'


const ProductGride = (products) => {
    const listproduct = products.products.products
    const sizeMap = {
        "40": ["40", "40-m6", "40-6.5", "40-6", "UK 6/EURO 40", "UK 6.5/EURO 40", "UK 6 / EURO 40", "UK-6 EUR-40", "M-6", "m-6", "UK 6|Euro 40", "UK 6.5|EURO 40", "U.K-6 Euro-40", "UK-6 EURO-40", "40-UK 6", "40 UK 6", "EURO 40", "40 - 6", "Euro 40- Uk 6"],
        "41": ["41", "41-7.5", "41-m7", "41-7", "UK 7/EURO 41", "UK7.5/EURO 41", "UK 7 / EURO 41", "UK-7 EUR-41", "7.5", "Euro-41. UK-7", "UK-7.5 EUR-41.5", "Uk 7/Euro 41", "7/ Euro 41", "41/7.5", "41/7", "41/7 5", "M7", "Euro 41", "41 7.5", "41-UK7", "41 UK 7", "UK 7", "41-42"],
        "42": ["42", "42-8", "42-7.5", "42-m8", "UK 7.5/EURO 42", "UK 8/EURO 42", "UK 8 / EURO 42", "UK-7.5 EUR-42", "m-8", "Euro-42.5 UK-8", "Euro-42. UK-7.5", "UK 8|EURO 42", "UK 8.5|EURO 42", "UK-8 EUR-42", "42-UK 8", "42 UK 8", "EURO 42", "Euro 42-UK 8", "Euro 42-UK 7.5"],
        "43": ["43", "43-8.5", "43-9", "43-m9", "UK 8.5/EURO 43", "UK 9/EURO 43", "UK 9 / EURO 43", "UK-8.5 EUR-43", "m-9", "Euro-43. Uk-8.5", "UK 9|EURO 43", "UK 9.5|EURO 43", "UK-9 EUR-43", "43-UK 9", "43 UK 9", "EURO 43", "Euro 43-UK 9", "Euro 43-UK 8.5"],
        "44": ["44", "44-9.5", "44-9", "44-m10", "UK 9.5/EURO 44", "UK 10/EURO 44", "UK 10 / EURO 44", "UK-9.5 EUR-44", "m-10", "Euro-44. Uk-9", "UK 10|EURO 44", "UK-10 EUR-44", "44-UK 10", "44 UK 10", "EURO 44", "Euro 44-UK 9", "Euro 44-UK 9.5","UK-9 EUR-44"],
        "45": ["45", "45-10.5", "45-10", "45-m11", "UK 10.5/EURO 45", "UK 11/EURO 45", "UK 11 / EURO 45", "UK-10.5 EUR-45", "m-11", "Euro-45. Uk-10", "UK 10.5|EURO 45", "UK-11 EUR-45", "45-UK 11", "45 UK 11", "EURO 45", "Euro 45-UK 10", "Euro 45-UK 10.5","UK-10 EUR-45"],
        "46": ["46", "46-11", "46-UK 12", "UK 11/EURO 46", "UK-11 EUR-46", "UK-10.5 EUR-46", "EURO 46", "Euro-46. Uk-11"],
        "36": ["36", "36-3.5", "U.K-3.5 Euro-36", "U.K-3 Euro-36", "EURO 36"],
        "37": ["37", "37-4", "U.K-4 Euro-37", "EURO 37"],
        "38": ["38", "38-5", "U.K-5 Euro-38", "U.K-5.5 Euro-39", "EURO 38"],
        "39": ["39", "39-6", "U.K-6 Euro-39", "EURO 39"],
        "47": ["47", "47/12", "UK 12 / EURO 47", "EURO 47"],
        "48": ["48"],
        // "nill": ["MONOGRAM", "CHECKED BROWN", "Black", "Brown", "Gold", "Silver", "Purple", "Regular", "Pcs", "S", "XXL", "M", "L", "XL"]
    };

    const normalizeSize = (inputSize) => {
        console.log("normalized");

        for (const [baseSize, variants] of Object.entries(sizeMap)) {
            if (variants.includes(inputSize)) {
                return baseSize;
            }
        }
        return inputSize; // fallback if not found
    };

    return (
        <>
            <div className="container">

                <div className="row g-2">
                    {listproduct.length === 0 ? "No Porducts found" : ""}
                    {listproduct
                        .map((product) => (

                            <div className="col-6 col-md-3 col-sm-3" key={product.productId}>
                                <div class="card border-0  h-100 product-card rounded-0" style={{ overflow: 'hidden' }}>
                                    <Link to={`/product/${product.productId}`} class="text-decoration-none position-relative" data-discover="true" style={{ color: 'inherit' }}>
                                        <div class="card-img-container position-relative" >
                                            <img
                                                class="card-img-top top-0 start-0 w-100 object-fit-cover transition-opacity rounded-0"
                                                src={Array.isArray(product.image) ? product.image[0] : product.featuredimg}
                                                alt={product.productName}
                                                loading="lazy"
                                                style={{ opacity: 1, transition: 'opacity 0.3s ease', aspectRatio: "1/1" }} />
                                        </div>

                                        <div class="card-body pt-2 px-2 tex-center">
                                            <p class="card-title mb-2 truncate-2-lines" style={{ fontWeight: 500, color: "#212529" }}>
                                                {product.productName}
                                            </p>



                                            <div class="size-options d-flex flex-wrap gap-1 mb-2">
                                                {JSON.parse(product.sizeName).map((size) => {
                                                    const normalized = normalizeSize(size);
                                                    return (
                                                        <label
                                                            key={size}
                                                            className="btn btn-sm btn-outline-dark rounded-0"
                                                            style={{ fontSize: "0.8rem", padding: "0.15rem 0.3rem" }}
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="d-none"
                                                                checked={true}
                                                                onChange={() => handleCheckboxChange("sizes", size)}
                                                            />
                                                            {/* {size} */}
                                                            {normalized}
                                                        </label>
                                                    );
                                                })}

                                                {/* {JSON.parse(product.sizeName).map((size) => (
                                                    <label
                                                        key={size}
                                                        className="btn btn-sm btn-outline-dark rounded-0"
                                                        style={{ fontSize: "0.8rem", padding: "0.15rem 0.3rem" }}>
                                                        <input
                                                            type="checkbox"
                                                            className="d-none"
                                                            checked={true}
                                                            onChange={() => handleCheckboxChange("sizes", size)}
                                                        />
                                                        {size}
                                                    </label>
                                                ))} */}
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
