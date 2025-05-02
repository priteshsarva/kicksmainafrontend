import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ProductPage({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.productId === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('');
  // const images = [product.featuredimg + ...product.imageUrl]
  const [error, setError] = useState('');

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
  const handleShare = () => {
    if (!selectedSize) {
      setError('Please select a size before sharing.');
      return;
    }

    setError('');
    const content = `*Product Name*: ${product.productName}\n*Size*: ${selectedSize}\n*Product URL*: ${window.location.href}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`;
    window.open(whatsappUrl, '_blank');
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,

    // lazyLoad: true,

    className: "slider variable-width",
    variableWidth: true,
    centerMode: true,
    // Disable swiping globally (optional)
    // swipe: false,
    // touchMove: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          // slidesToShow: 2,
          // slidesToScroll: 1,
          arrows: false,
          // 👇 Disable swipe specifically for mobile
          // swipe: false,
          // touchMove: false,
          // swipeToSlide: false
        }
      }
    ]
  };

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
             

                <button className="btn btn-dark w-100 py-3" onClick={handleShare}>
                  Share
                </button>
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="h2 mb-4">Why Choose Us?</h2>

            <ul style={{ listStyleType: 'disc' }}>
              <li>Premium Quality Only – No Market First Copies </li>
              <li>Comes with Original Box Packaging </li>
              <li>Sourced Directly from Trusted Manufacturers</li>
              <li>10000+ Happy Customers &amp; Counting </li>
              <li>Live Product Videos Before Dispatching also available</li>
              <li>Fast &amp; Secure Shipping All Over India</li>
            </ul>
            <br />
            <p><strong>Trust the Name – KicksMania</strong><br />- Where quality meets affordability<br />- We deliver high-end sneakers at the best price without compromising on look or feel.</p>
            <p>- Want to see it before you buy?<br />- Live videos available on WhatsApp. Just message us.</p>
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
      <div className="mt-5 ">
        <h2 className="h2 mb-4">Similar Products</h2>






        <Slider {...settings} >
        {products
            .filter(p =>
              p.productId !== product.productId &&
              // p.productName.slice(0,3) === product.productName.slice(1,3) ||
              p.productName.toLowerCase().includes(product.productName.slice(0, 3).toLowerCase())
            )
            .sort(() => Math.random() - 0.5) // Shuffle the filtered products
            .slice(0, 6)
            .map(similarProduct => (
          <>
            <div
              className="col-6 col-md-3 col-sm-3 px-2"
              key={product.productId}
              style={{ width: '200px' }}
            >
              <div class="card border-0 h-100 product-card  rounded-0" style={{ overflow: 'hidden' }}>
                <Link to={`/product/${similarProduct.productId}`} class="text-decoration-none position-relative" data-discover="true" style={{ color: 'inherit' }}>
                  <div class="card-img-container position-relative ">
                    <img
                      class="card-img-top  top-0 start-0 w-100 object-fit-cover transition-opacity rounded-0"
                      src={Array.isArray(similarProduct.image) ? similarProduct.image[0] : similarProduct.featuredimg}
                      alt={similarProduct.productName}
                      loading="lazy"
                      style={{ opacity: 1, transition: 'opacity 0.3s ease', aspectRatio: "1/1" }} />
                  </div>

                  <div class="card-body pt-2 px-2 tex-center">
                    <p class="card-title mb-2 truncate-2-lines" style={{
                      fontWeight: 500,
                      // fontSize: '1.1rem', 
                      color: "#212529"
                    }}>
                      {similarProduct.productName}
                    </p>

                    <div class="size-options d-flex flex-wrap gap-1 mb-2">
                      {JSON.parse(similarProduct.sizeName).map((size) => (
                        <label
                          key={size}
                          className="btn btn-sm btn-outline-dark rounded-0"
                          style={{ fontSize: "0.8rem", padding: "0.15rem 0.3rem" }}>
                          <input
                            type="checkbox"
                            className="d-none"
                            checked={true}
                            onChange={() => handleCheckboxChange("sizes", size)} />
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
          </>
        ))}
      </Slider>

      </div>
    </div>
  );
}
