import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useCart } from '../contexts/CartContext';
import './ShoeCarousel.css'
import { Link } from 'react-router-dom';


export default function ShoeCarousel({ productss }) {
  // const { addToCart } = useCart();

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
    <div className="container py-5 pt-5 ">
      <h2 className="text-center text-md-left mb-4">Our Best Sellers</h2>
      <Slider {...settings} >
        {productss.map((product) => (
          <>
            <div
              className="col-6 col-md-3 col-sm-3 px-2"
              key={product.productId}
              style={{ width: '200px' }}
            >
              <div class="card border-0 h-100 product-card  rounded-0" style={{ overflow: 'hidden' }}>
                <Link to={`/product/${product.productId}`} class="text-decoration-none position-relative" data-discover="true" style={{ color: 'inherit' }}>
                  <div class="card-img-container position-relative ">
                    <img
                      class="card-img-top  top-0 start-0 w-100 object-fit-cover transition-opacity rounded-0"
                      src={Array.isArray(product.image) ? product.image[0] : product.featuredimg}
                      alt={product.productName}
                      loading="lazy"
                      style={{ opacity: 1, transition: 'opacity 0.3s ease', aspectRatio: "1/1" }} />
                  </div>

                  <div class="card-body pt-2 px-2 tex-center">
                    <p class="card-title mb-2 truncate-2-lines" style={{
                      fontWeight: 500,
                      // fontSize: '1.1rem', 
                      color: "#212529"
                    }}>
                      {product.productName}
                    </p>

                    <div class="size-options d-flex flex-wrap gap-1 mb-2">
                      {JSON.parse(product.sizeName).map((size) => (
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
  );
}