import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from './Loader';
import { useLocation } from 'react-router-dom';
const baseUrl = import.meta.env.VITE_BASE_URL;


export default function ProductPage({ }) {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState('');
  const [product, setproduct] = useState('')
  const [simillarproducts, setsimillarproducts] = useState("")
  const [selectedImage, setSelectedImage] = useState(""); // Default to the first image
  const [imageUrlArray, setimageUrlArray] = useState("")
  const [hash, sethash] = useState(window.location.hash)
  const { pathname } = useLocation();



  const [sizes, setsizes] = useState("")



  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    size: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.contact.trim()) {
      errors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact.trim())) {
      errors.contact = "Contact must be a valid 10-digit number";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email.trim())
    ) {
      errors.email = "Enter a valid email";
    }

    if (!formData.size.trim()) errors.size = "Size is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };



  const handleToggle = (e) => {
    if (!selectedSize) {
      e.preventDefault();
      setError("Please select a size before sharing.");
    } else {
      setError("");
    }
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



  useEffect(() => {
    console.log(baseUrl);
    sethash(window.location.hash);

    // Fetch product details
    fetch(`${baseUrl}/product/${id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setproduct(data.results[0]);
        setSelectedImage(Array.isArray(data.results[0].image) ? data.results.image[0] : data.results[0].featuredimg);
        setimageUrlArray(JSON.parse(data.results[0].imageUrl));
        setsizes(JSON.parse(data.results[0].sizeName));
        console.log("data", data);
      })
      .catch(error => console.error('Error:', error));

  }, [id]); // Add id as dependency

  useEffect(() => {
    // Fetch similar products only when product is available
    if (product) {
      fetch(`${baseUrl}/product/search?q=${product.productName.slice(0, 3)}&category=${product.catName}&result={30}&page={1}`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          setsimillarproducts(data.results);
          console.log(data.results);
        })
        .catch(error => console.error('Error in Similar:', error));
    }
  }, [product]); // This remains unchanged



  return (
    <>
      {product == "" ? <Loader /> :

        <>
          <div className="container py-5">
            <div className="row g-5">
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
                    Array.isArray(imageUrlArray) ? imageUrlArray.map((image, index) => (
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
              <div className="col-md-6 my-2">
                <h1 className=" mb-4">{product.productName}</h1>
                {/* <p className="h2 mb-5">${product.productOriginalPrice}</p> */}

                {/* Size Selection */}
                <div className="my-5">
                  <h5 className="mb-3">Select Size</h5>
                  <div className="row row-cols-5 g-2 mb-5">
                    {
                      sizes.map(size => (
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
                      ))
                    }
                  </div>

                  {/* Add to Cart Button */}
                  <div className="row row-cols-2 g-2">


                    <div className="col">
                      <button
                        className="btn btn-dark w-100 py-3"
                        onClick={() => setShowModal(true)}
                      >
                        Request for size
                      </button>
                    </div>




                    <div className="dropdown">
                      <button
                        className="btn btn-dark w-100 py-3 dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={handleToggle}
                      >
                        <i className="fas fa-share-alt me-2"></i> Share
                      </button>

                      {error && <p className="text-danger mt-2">{error}</p>}

                      {selectedSize && (
                        <ul className="dropdown-menu w-100 p-2 mt-2 show" style={{ position: 'absolute' }}>
                          <li className="mb-2">
                            <a
                              className="dropdown-item d-flex align-items-center bg-success text-white rounded"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                                `📦 *Product*\n\n 🛍️ product: ${product.productName}\n👟 Size: ${selectedSize}\n 🔗 URL: ${window.location.href}`
                              )}`}
                            >
                              <i className="fab fa-whatsapp me-2"></i> WhatsApp
                            </a>
                          </li>
                          <li className="mb-2">
                            <a
                              className="dropdown-item d-flex align-items-center bg-primary text-white rounded"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                window.location.href
                              )}`}
                            >
                              <i className="fab fa-facebook-f me-2"></i> Facebook
                            </a>
                          </li>
                          <li className="mb-2">
                            <a
                              className="dropdown-item d-flex align-items-center bg-info text-white rounded"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                                `📦 *Product*\n\n 🛍️ product: ${product.productName}\n👟 Size: ${selectedSize}\n 🔗 URL: ${window.location.href}`
                              )}`}
                            >
                              <i className="fab fa-twitter me-2"></i> Twitter
                            </a>
                          </li>
                          <li className="mb-2">
                            <a
                              className="dropdown-item d-flex align-items-center bg-danger text-white rounded"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`mailto:?subject=Check this out&body=${encodeURIComponent(
                                `📦 *Product*\n\n 🛍️ product: ${product.productName}\n👟 Size: ${selectedSize}\n 🔗 URL: ${window.location.href}`
                              )}`}
                            >
                              <i className="fas fa-envelope me-2"></i> Email
                            </a>
                          </li>
                          {/* <li>
                      <a
                        className="dropdown-item d-flex align-items-center bg-gradient text-white rounded"
                        style={{ backgroundColor: "#C13584" }} // Instagram pink
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `Check out this product: ${product.productName}\nSize: ${selectedSize}\n${window.location.href}`
                          );
                          window.open("https://www.instagram.com", "_blank");
                          alert("Product link copied! You can now paste it in your Instagram story or message.");
                        }}
                      >
                        <i className="fab fa-instagram me-2"></i> Instagram
                      </a>
                    </li> */}
                        </ul>
                      )}
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

              {simillarproducts != "" ? <Slider {...settings} >
                {simillarproducts
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
                : " no results found"}










            </div>
            {showModal && (
              <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Request Size for Product</h5>
                      <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="form-label">Your Name</label>
                        <input
                          type="text"
                          className={`form-control ${formErrors.name ? "is-invalid" : ""}`}

                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {formErrors.name && (
                          <div className="invalid-feedback">{formErrors.name}</div>
                        )}

                      </div>
                      <div className="mb-3">
                        <label className="form-label">Contact Number</label>
                        <input
                          type="tel"
                          className={`form-control ${formErrors.contact ? "is-invalid" : ""
                            }`}
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        />
                        {formErrors.contact && (
                          <div className="invalid-feedback">{formErrors.contact}</div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {formErrors.email && (
                          <div className="invalid-feedback">{formErrors.email}</div>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={product.productName}
                          disabled
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Preferred Size</label>
                        <input
                          type="text"
                          className="form-control"
                          value={formData.size || ""}
                          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        />
                        {formErrors.size && (
                          <div className="invalid-feedback">{formErrors.size}</div>
                        )}
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>

                      <button
                        type="button"
                        className="btn btn-success"
                        disabled={
                          !formData.name.trim() ||
                          !formData.contact.trim() ||
                          !formData.email.trim() ||
                          !formData.size.trim()
                        }
                        onClick={() => {
                          if (validateForm()) {

                            const message = `📦 *Product Request*\n\n👤 Name: ${formData.name}\n📱 Contact: ${formData.contact}\n📧 Email: ${formData.email}\n🛍️ Product: ${product.productName}\n👟 Requested Size: ${formData.size}\n🔗 URL: ${window.location.href}`;
                            const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
                            window.open(whatsappUrl, '_blank');
                            setShowModal(false);
                          }
                        }}
                      >
                        Send via WhatsApp
                      </button>


                    </div>
                  </div>
                </div>
              </div>
            )}


          </div>
        </>


      }
    </>
  );
}
