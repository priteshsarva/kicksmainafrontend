import React from 'react'
import { Link } from 'react-router-dom';


const ProductGride = (products) => {
    const listproduct = products.products.products
    console.log(listproduct);

    return (
        <>
            <div className="container">

                <div 
                // className="row g-4"
                className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {listproduct.map((product) => (
                        <div key={product.id} 
                        className="col"                                         
                        >
                            <div className="card border-1 shadow-sm p-3 text-center h-100 hover:bg-black group transition-all duration-300 rounded-0 ">
                                <Link to={`/product`} className="text-decoration-none" style={{color:'black'}}>
                                {/* <a href={`/product/${product.id}`} className="text-decoration-none" style={{color:'black'}}> */}

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold group-hover:text-white">{product.name}</h5>
                                       
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
