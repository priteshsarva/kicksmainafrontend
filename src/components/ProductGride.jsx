import React from 'react'
import { Link } from 'react-router-dom';


const ProductGride = (products) => {
    const listproduct = products.products.products

    return (
        <>
            <div className="container">

                <div
                    // className="row g-4"
                    className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {listproduct.length === 0 ? "No Porducts found" : ""}
                    {listproduct
                        // .slice(0, 10)
                        .map((product) => (
                            <div key={product.productId}
                                className="col"
                            >
                                <div className="card border-1 shadow-sm p-3 text-center h-100 hover:bg-black group transition-all duration-300 rounded-0 ">
                                    <Link to={`/product/${product.productId}`} className="text-decoration-none" style={{ color: 'black' }}>
                                        {/* <Link to={`/product/`} className="text-decoration-none" style={{color:'black'}}> */}
                                        {/* <a href={`/product/${product.id}`} className="text-decoration-none" style={{color:'black'}}> */}

                                        <img
                                            src={Array.isArray(product.image) ? product.image[0] : product.featuredimg}
                                            alt={product.productName}
                                            className="card-img-top"
                                            style={{ height: "250px", objectFit: "cover" }}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold group-hover:text-white">{product.productName}</h5>
                                            <div className="d-flex flex-wrap gap-1">
                                                
                                                {JSON.parse(product.sizeName).map((size) => (
                                                    <label
                                                        key={size}
                                                        className={`btn btn-outline-dark group-hover:btn-outline-white`}
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
                                        </div>
                                        {/* </a> */}
                                    </Link>
                                    {/* <div className="card-footer bg-white border-0">
                                    <button
                                        // onClick={() => addToCart(product)}
                                        className="btn btn-dark w-100"
                                    >
                                        Add to Cart
                                    </button>
                                </div> */}
                                </div>
                            </div>
                        ))}
                </div>
            </div>

        </>
    )
}

export default ProductGride
