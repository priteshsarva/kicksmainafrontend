import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function ProductPage({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(Array.isArray(product.image) ? product.image[0] : product.image); // Default to the first image

  const sizes = ['6', '7', '8', '9', '10', '11'];
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
            alt={product.name}
            className="img-fluid rounded"
            style={{ height: '500px', objectFit: 'cover', width: '100%' }}
          />

          {/* Thumbnail Gallery */}
          <div className="row g-2 py-2">
            {
              Array.isArray(product.image) ?  product.image.map((image, index) => (
                <div key={index} className="col-3">
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="img-fluid rounded cursor-pointer"
                    style={{
                      height: '100px',
                      objectFit: 'cover',
                      width: '100%',
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
          <h1 className="display-4 mb-4">{product.name}</h1>
          {/* <p className="h2 mb-5">${product.price}</p> */}

          {/* Size Selection */}
          <div className="mb-5">
            <h3 className="h5 mb-3">Select Size</h3>
            <div className="row row-cols-3 g-2">
              {sizes.map(size => (
                <div key={size} className="col">
                  <button
                    onClick={() => setSelectedSize(size)}
                    className={`btn w-100 ${selectedSize === size
                      ? 'btn-dark'
                      : 'btn-outline-dark'
                      }`}
                  >
                    US {size}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="btn btn-dark w-100 py-3 mb-5"
            disabled={!selectedSize}
          >
            Add to Cart
          </button>


        </div>

        {/* Product Details Accordion */}
        <div className="border-top border-bottom pt-4">
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
        </div>


      </div>

      {/* Similar Products */}
      <div className="mt-5">
        <h2 className="h2 mb-4">Similar Products</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products
            .filter(p => p.id !== product.id && p.category === product.category)
            .slice(0, 4)
            .map(similarProduct => (
              <div key={similarProduct.id} className="col">
                <div className="card h-100">
                  <img
                    src={similarProduct.image[0]}
                    alt={similarProduct.name}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{similarProduct.name}</h3>
                    {/* <p className="card-text text-muted">
                      ${similarProduct.price}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
