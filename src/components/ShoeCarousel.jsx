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
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    swipeToSlide: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          // 👇 Disable swipe specifically for mobile
          // swipe: false,
          // touchMove: false,
          // swipeToSlide: false
        }
      }
    ]
  };

  return (
    <div className="container py-5 px-5">
      <h2 className="text-center mb-4 fw-bold">Bestsellers</h2>
      <Slider {...settings}>
        {productss.map((product) => (
          <>
          


            <div key={product.productId} className="px-2">
              <div className={`card border-1 shadow-sm p-3 text-center h-100 hover:bg-black group transition-all duration-300 rounded-0`}>
                <Link to={`/product/${product.productId}`} className="text-decoration-none" style={{ color: 'black' }}>
                  <img
                    src={
                      Array.isArray(product.image) ? product.image[0] : product.featuredimg
                    }
                    alt={product.productName}
                    className="card-img-top img-fluid"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title group-hover:text-white">{product.productName}</h5>
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
                    {/* <p className="text-muted">${product.price}</p> */}
                    {/* <button
                  onClick={() => addToCart(product)}
                  className="btn btn-dark w-100"
                >
                  Add to Cart
                </button> */}
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