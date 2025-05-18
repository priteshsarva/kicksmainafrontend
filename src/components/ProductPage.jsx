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

  const sizeMap = {
        "36": ["36", "36-4.5", "36-m4", "36-4", "36-3.5", "UK 4/EURO 36", "UK4.5/EURO 36", "UK 4 / EURO 36", "UK-4 EUR-36", "UK-3.5 EUR-36", "UK-3 EUR-36", "UK-4.5 EUR-36.5", "4.5", "Euro-36 UK-4", "Uk 4/Euro 36", "4/ Euro 36", "36/4.5", "36/4", "36/4 5", "M4", "Euro 36", "36 4.5", "36-UK4", "36 UK 4", "UK 4", "U.K-3.5 Euro-36", "U.K-3 Euro-36", "EURO 36", "40 - 6", "Euro 40- Uk 6", "36-37"],
        "37": ["37", "37-5", "37-m4", "37-4", "UK 4/EURO 37", "UK5/EURO 37", "UK 4 / EURO 37", "UK-4 EUR-37", "UK-5 EUR-37.5", "UK-4.5 EUR-37.5", "5", "Euro-37 UK-4", "Uk 4/Euro 37", "4/ Euro 37", "37/5", "37/4", "37/4 5", "M4", "Euro 37", "37 5", "37-UK4", "37 UK 4", "UK 4", "U.K-4 Euro-37", "EURO 37", "37-38"],
        "38": ["38", "38-5.5", "38-m5", "38-5", "UK 5/EURO 38", "UK5.5/EURO 38", "UK 5 / EURO 38", "UK-5 EUR-38", "UK-5.5 EUR-38.5", "UK-6 EUR-38.5", "5.5", "Euro-38 UK-5", "Uk 5/Euro 38", "5/ Euro 38", "38/5.5", "38/5", "38/5 5", "M5", "Euro 38", "38 5.5", "38-UK5", "38 UK 5", "UK 5", "U.K-5 Euro-38", "U.K-5.5 Euro-39", "EURO 38", "38-39"],
        "39": ["39", "39-6.5", "39-m6", "39-6", "UK 6/EURO 39", "UK6.5/EURO 39", "UK 6 / EURO 39", "UK-6 EUR-39", "UK-6.5 EUR-39.5", "UK-7 EUR-39.5", "6.5", "Euro-39 UK-6", "Uk 6/Euro 39", "6/ Euro 39", "39/6.5", "39/6", "39/6 5", "M6", "Euro 39", "39 6.5", "39-UK6", "39 UK 6", "UK 6", "U.K-6 Euro-39", "EURO 39", "39-40"],
        "40": ["40", "40-6.5", "40-m6", "40-6", "40-7.5", "UK 6/EURO 40", "UK6.5/EURO 40", "UK 7/EURO 40", "UK7.5/EURO 40", "UK 6 / EURO 40", "UK-6 EUR-40", "UK-7 EUR-40", "UK-6.5 EUR-40.5", "UK-7.5 EUR-40.5", "UK-8 EUR-40.5", "6.5", "7.5", "Euro-40 UK-6", "Euro-40 UK-7", "Uk 6/Euro 40", "Uk 7/Euro 40", "6/ Euro 40", "7/ Euro 40", "40/6.5", "40/6", "40/6 5", "40/7.5", "40/7", "M6", "M7", "Euro 40", "40 6.5", "40 7.5", "40-UK6", "40 UK 6", "40-UK7", "40 UK 7", "UK 6", "UK 7", "UK 6|Euro 40", "UK 6.5|EURO 40", "UK 7|EURO 40", "U.K-6 Euro-40", "UK-6 EURO-40", "EURO 40", "40 - 6", "Euro 40- Uk 6", "40-41"],
        "41": ["41", "41-7.5", "41-m7", "41-7", "41-8.5", "UK 7/EURO 41", "UK7.5/EURO 41", "UK 8/EURO 41", "UK8.5/EURO 41", "UK 7 / EURO 41", "UK-7 EUR-41", "UK-8 EUR-41", "UK-7.5 EUR-41.5", "UK-8.5 EUR-41.5", "UK-9 EUR-41.5", "7.5", "8.5", "Euro-41 UK-7", "Euro-41 UK-8", "Uk 7/Euro 41", "Uk 8/Euro 41", "7/ Euro 41", "8/ Euro 41", "41/7.5", "41/7", "41/7 5", "41/8.5", "41/8", "M7", "M8", "Euro 41", "41 7.5", "41 8.5", "41-UK7", "41 UK 7", "41-UK8", "41 UK 8", "UK 7", "UK 8", "UK 7|EURO 41", "UK 7.5|EURO 41", "UK 8|EURO 41", "U.K-7 Euro-41", "UK-7 EURO-41", "EURO 41", "41 - 7", "Euro 41- Uk 7", "41-42"],
        "42": ["42", "42-9.5", "42-m9", "42-9", "42-8", "42-7.5", "UK 9/EURO 42", "UK9.5/EURO 42", "UK 8/EURO 42", "UK8.5/EURO 42", "UK 7.5/EURO 42", "UK 9 / EURO 42", "UK-9 EUR-42", "UK-8 EUR-42", "UK-7.5 EUR-42", "UK-9.5 EUR-42.5", "UK-8.5 EUR-42.5", "UK-10 EUR-42.5", "9.5", "8.5", "7.5", "Euro-42 UK-9", "Euro-42 UK-8", "Euro-42.5 UK-8", "Euro-42. UK-7.5", "Uk 9/Euro 42", "Uk 8/Euro 42", "9/ Euro 42", "8/ Euro 42", "42/9.5", "42/9", "42/9 5", "42/8.5", "42/8", "42/7.5", "M9", "M8", "Euro 42", "42 9.5", "42 8.5", "42 7.5", "42-UK9", "42 UK 9", "42-UK8", "42 UK 8", "UK 9", "UK 8", "UK 9|EURO 42", "UK 9.5|EURO 42", "UK 8|EURO 42", "UK 8.5|EURO 42", "U.K-9 Euro-42", "UK-9 EURO-42", "EURO 42", "42 - 9", "Euro 42-UK 8", "Euro 42-UK 7.5", "42-43"],
        "43": ["43", "43-10.5", "43-m10", "43-10", "43-8.5", "43-9", "UK 10/EURO 43", "UK10.5/EURO 43", "UK 9/EURO 43", "UK9.5/EURO 43", "UK 8.5/EURO 43", "UK 10 / EURO 43", "UK-10 EUR-43", "UK-9 EUR-43", "UK-8.5 EUR-43", "UK-10.5 EUR-43.5", "UK-9.5 EUR-43.5", "UK-11 EUR-43.5", "10.5", "9.5", "8.5", "Euro-43 UK-10", "Euro-43 UK-9", "Euro-43. Uk-8.5", "Uk 10/Euro 43", "Uk 9/Euro 43", "10/ Euro 43", "9/ Euro 43", "43/10.5", "43/10", "43/10 5", "43/9.5", "43/9", "43/8.5", "M10", "M9", "Euro 43", "43 10.5", "43 9.5", "43 8.5", "43-UK10", "43 UK 10", "43-UK9", "43 UK 9", "UK 10", "UK 9", "UK 10|EURO 43", "UK 10.5|EURO 43", "UK 9|EURO 43", "UK 9.5|EURO 43", "U.K-10 Euro-43", "UK-10 EURO-43", "EURO 43", "43 - 10", "Euro 43-UK 9", "Euro 43-UK 8.5", "43-44", "UK 9/ EURO 43"],
        "44": ["44", "44-11.5", "44-m11", "44-11", "44-9.5", "44-10", "UK 11/EURO 44", "UK11.5/EURO 44", "UK 10/EURO 44", "UK10.5/EURO 44", "UK 9.5/EURO 44", "UK 9/EURO 44", "UK 11 / EURO 44", "UK-11 EUR-44", "UK-10 EUR-44", "UK-9.5 EUR-44", "UK-9 EUR-44", "UK-11.5 EUR-44.5", "UK-10.5 EUR-44.5", "UK-12 EUR-44.5", "11.5", "10.5", "9.5", "Euro-44 UK-11", "Euro-44 UK-10", "Euro-44. Uk-9", "Euro-44. Uk-9.5", "Uk 11/Euro 44", "Uk 10/Euro 44", "11/ Euro 44", "10/ Euro 44", "44/11.5", "44/11", "44/11 5", "44/10.5", "44/10", "44/9.5", "M11", "M10", "Euro 44", "44 11.5", "44 10.5", "44 9.5", "44-UK11", "44 UK 11", "44-UK10", "44 UK 10", "UK 11", "UK 10", "UK 11|EURO 44", "UK 11.5|EURO 44", "UK 10|EURO 44", "UK 10.5|EURO 44", "U.K-11 Euro-44", "UK-11 EURO-44", "EURO 44", "44 - 11", "Euro 44-UK 10", "Euro 44-UK 9.5", "44-45", "UK 10 /EURO 44", "44/9"],
        "45": ["45", "45-12.5", "45-m12", "45-12", "45-10.5", "45-11", "UK 12/EURO 45", "UK12.5/EURO 45", "UK 11/EURO 45", "UK11.5/EURO 45", "UK 10.5/EURO 45", "UK 10/EURO 45", "UK 12 / EURO 45", "UK-12 EUR-45", "UK-11 EUR-45", "UK-10.5 EUR-45", "UK-10 EUR-45", "UK-12.5 EUR-45.5", "UK-11.5 EUR-45.5", "UK-13 EUR-45.5", "12.5", "11.5", "10.5", "Euro-45 UK-12", "Euro-45 UK-11", "Euro-45. Uk-10", "Euro-45. Uk-10.5", "Uk 12/Euro 45", "Uk 11/Euro 45", "12/ Euro 45", "11/ Euro 45", "45/12.5", "45/12", "45/12 5", "45/11.5", "45/11", "45/10.5", "M12", "M11", "Euro 45", "45 12.5", "45 11.5", "45 10.5", "45-UK12", "45 UK 12", "45-UK11", "45 UK 11", "UK 12", "UK 11", "UK 12|EURO 45", "UK 12.5|EURO 45", "UK 11|EURO 45", "UK 11.5|EURO 45", "U.K-12 Euro-45", "UK-12 EURO-45", "EURO 45", "45 - 12", "Euro 45-UK 11", "Euro 45-UK 10.5", "45-46"],
        "46": ["46", "46-13.5", "46-m13", "46-13", "46-11", "46-12", "UK 13/EURO 46", "UK13.5/EURO 46", "UK 12/EURO 46", "UK12.5/EURO 46", "UK 11/EURO 46", "UK 10.5/EURO 46", "UK 13 / EURO 46", "UK-13 EUR-46", "UK-12 EUR-46", "UK-11 EUR-46", "UK-10.5 EUR-46", "UK-13.5 EUR-46.5", "UK-12.5 EUR-46.5", "UK-14 EUR-46.5", "13.5", "12.5", "11", "Euro-46 UK-13", "Euro-46 UK-12", "Euro-46. Uk-11", "Uk 13/Euro 46", "Uk 12/Euro 46", "13/ Euro 46", "12/ Euro 46", "46/13.5", "46/13", "46/13 5", "46/12.5", "46/12", "46/11", "M13", "M12", "Euro 46", "46 13.5", "46 12.5", "46 11", "46-UK13", "46 UK 13", "46-UK12", "46 UK 12", "46-UK 12", "UK 13", "UK 12", "UK 11", "UK 13|EURO 46", "UK 13.5|EURO 46", "UK 12|EURO 46", "UK 12.5|EURO 46", "U.K-13 Euro-46", "UK-13 EURO-46", "EURO 46", "46 - 13", "Euro 46-UK 12", "46-47"],
        "47": ["47", "47-14.5", "47-m14", "47-14", "47/12", "UK 14/EURO 47", "UK14.5/EURO 47", "UK 12/EURO 47", "UK12.5/EURO 47", "UK 14 / EURO 47", "UK-14 EUR-47", "UK-12 EUR-47", "UK-14.5 EUR-47.5", "UK-12.5 EUR-47.5", "UK-15 EUR-47.5", "14.5", "12.5", "Euro-47 UK-14", "Euro-47 UK-12", "Uk 14/Euro 47", "Uk 12/Euro 47", "14/ Euro 47", "12/ Euro 47", "47/14.5", "47/14", "47/14 5", "47/12.5", "47/12", "M14", "M12", "Euro 47", "47 14.5", "47 12.5", "47-UK14", "47 UK 14", "47-UK12", "47 UK 12", "UK 14", "UK 12", "UK 14|EURO 47", "UK 14.5|EURO 47", "UK 12|EURO 47", "UK 12.5|EURO 47", "U.K-14 Euro-47", "UK-14 EURO-47", "EURO 47", "47 - 14", "47-48"],
        "48": ["48", "48-15.5", "48-m15", "48-15", "UK 15/EURO 48", "UK15.5/EURO 48", "UK 15 / EURO 48", "UK-15 EUR-48", "UK-15.5 EUR-48.5", "UK-16 EUR-48.5", "15.5", "Euro-48 UK-15", "Uk 15/Euro 48", "15/ Euro 48", "48/15.5", "48/15", "48/15 5", "M15", "Euro 48", "48 15.5", "48-UK15", "48 UK 15", "UK 15", "UK 15|EURO 48", "UK 15.5|EURO 48", "U.K-15 Euro-48", "UK-15 EURO-48", "EURO 48", "48 - 15", "48-49"]
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
                      sizes.map((size) => {
                        const normalized = normalizeSize(size);
                        return (
                          <div key={size} className="col">

                            <button
                              onClick={() => setSelectedSize(size)}
                              className={`btn w-100 ${selectedSize === size
                                ? 'btn-dark'
                                : 'btn-outline-dark'
                                } `}
                            >
                              {/* {size} */}
                              {normalized}
                            </button>
                          </div>

                        );
                      }
                      )
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
