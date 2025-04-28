import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function ProductPage({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.productId === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('');
  // const images = [product.featuredimg + ...product.imageUrl]


  // Parse the imageUrl JSON string into an array
  const imageUrlArray = JSON.parse(product.imageUrl);

  // Create the images array by combining featuredimg and imageUrlArray
  product.image = [product.featuredimg, ...imageUrlArray];



  const [selectedImage, setSelectedImage] = useState(Array.isArray(product.image) ? product.image[0] : product.featuredimg); // Default to the first image

  const sizes = JSON.parse(product.sizeName);
  const brands = ['Nike', 'Adidas', 'Puma', 'New Balance'];
  const categories = ['sneakers', 'boots', 'sandals'];

  if (!product) {
    return <div className="text-center py-5">Product not found</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6 text-center">
          <img
            src={selectedImage}
            alt={product.productName}
            className="img-fluid rounded"
            style={{
              // height: '500px',
              objectFit: 'cover', width: '100%',
              aspectRatio: "1/1"
            }}
          />

          {/* Thumbnail Gallery */}
          <div className="row g-2 py-2">
            {
              Array.isArray(product.image) ? product.image.map((image, index) => (
                <div key={index} className="col-3">
                  <img
                    src={image}
                    alt={`${product.productName} thumbnail ${index + 1}`}
                    className="img-fluid rounded cursor-pointer"
                    style={{
                      height: '100px',
                      objectFit: 'cover',
                      // width: '100%',
                      aspectRatio: "1/1",
                      border: selectedImage === image ? '2px solid #000' : '1px solid #ddd',
                    }}
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
              )) : ""
            }
          </div>
        </div>


        {/* Product Details */}
        <div className="col-md-6">
          <h1 className=" mb-4">{product.productName}</h1>
          {/* <p className="h2 mb-5">${product.price}</p> */}

          {/* Size Selection */}
          <div className="my-5">
            <h5 className="mb-3">Select Size</h5>
            <div className="row row-cols-6 g-2 mb-5">
              {sizes.map(size => (
                <div key={size} className="col">
                  <button
                    onClick={() => setSelectedSize(size)}
                    className={`btn w-100 ${selectedSize === size
                      ? 'btn-dark'
                      : 'btn-outline-dark'
                      } `}
                  >
                    {size}
                  </button>
                </div>
              ))}
            </div>
            {/* Add to Cart Button */}
            <div className="row row-cols-2 g-2">
              <div className="col">
                <button
                  className="btn btn-dark w-100 py-3"
                >
                  Request for size
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-dark  w-100  py-3"
                  disabled={!selectedSize}
                  onClick={(e) => {
                    console.log("hello");
                  }}

                >
                  <a href={`https://api.whatsapp.com/send?phone=919723515869&text=*Product%20Name*%3A%20*${product.productName}*%0A*Size*%3A%20*${selectedSize}*%0A*Product%20URL*%3A%20${window.location.href}`}
                  
                  target='_blank'>Share
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          {/* <button
            className="btn btn-dark w-100 py-3 mb-5"
            disabled={!selectedSize}
          >
            Add to Cart
          </button> */}


        </div>

        {/* Product Details Accordion */}
        {/* <div className="border-top border-bottom pt-4">
          <h3 className="h5 mb-3">Product Details</h3>
          <p className="text-muted">
            Premium quality footwear designed for comfort and style.
            Made with high-quality materials and expert craftsmanship.
          </p>
          <p className="text-muted">
            Premium quality footwear designed for comfort and style.
            Made with high-quality materials and expert craftsmanship.
          </p> <p className="text-muted">
            Premium quality footwear designed for comfort and style.
            Made with high-quality materials and expert craftsmanship.
          </p> <p className="text-muted">
            Premium quality footwear designed for comfort and style.
            Made with high-quality materials and expert craftsmanship.
          </p> <p className="text-muted">
            Premium quality footwear designed for comfort and style.
            Made with high-quality materials and expert craftsmanship.
          </p>
        </div> */}


      </div>

      {/* Similar Products */}
      <div className="mt-5">
        <h2 className="h2 mb-4">Similar Products</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products
            .filter(p =>
              p.productId !== product.productId &&
              // p.productName.slice(0,3) === product.productName.slice(1,3) ||
              p.productName.toLowerCase().includes(product.productName.slice(0, 3).toLowerCase())
            )
            .sort(() => Math.random() - 0.5) // Shuffle the filtered products
            .slice(0, 4)
            .map(similarProduct => (
              <>

                <div key={similarProduct.productId} className="col px-2">
                  <Link to={`/product/${similarProduct.productId}`} className="text-decoration-none" style={{ color: 'black' }}>
                    <div className="card border-1 shadow-sm p-3 text-center m-3 h-100 hover:bg-black group transition-all duration-300 rounded-0">
                      <img
                        src={similarProduct.featuredimg}
                        alt={similarProduct.productName}
                        className="card-img-top img-fluid"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold group-hover:text-white">{similarProduct.productName}</h5>

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
                    </div>
                  </Link>
                </div>


              </>
            ))}
        </div>
      </div>
    </div>
  );
}
