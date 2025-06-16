import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button, Form } from 'react-bootstrap';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const baseUrl = import.meta.env.VITE_BASE_URL;

const NavBaar = (products) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchproducts = products.productss

  const sizeMap = {
    "35": ["35", "35-3", "35 UK-5", "UK-5", "Size 35"], // Added size 35 based on the pattern
    "36": ["36", "36-3.5", "36-3", "36/3.5", "36/3", "UK-3.5", "U.K-3.5 Euro-36", "EURO 36", "Euro 36", "Size 36", "36-UK4", "36 UK 4", "UK 4"],
    "37": ["37", "37/4", "37/4.5", "37-4", "37-4.5", "UK-4", "U.K-4 Euro-37", "EURO 37", "Euro 37", "M-4", "m-4", "M4", "Size 37", "37 UK-4"],
    "38": ["38", "38/4.5", "38/5", "38-4.5", "38-5", "UK-5", "U.K-5 Euro-38", "EURO 38", "Euro 38", "M-5", "m-5", "M5", "Size 38"],
    "39": ["39", "39/5.5", "39/6", "39-5.5", "39-6", "UK-5.5", "U.K-5.5 Euro-39", "EURO 39", "Euro 39", "M-6", "m-6", "Size 39"],
    "40": ["40", "40/6", "40/6.5", "40/7", "40-6", "40-6.5", "40-7", "40-uk 6.5", "40-uk6", "UK 6", "UK6", "UK-6", "UK 6 / EURO 40", "UK 6|Euro 40", "UK-6 EUR-40", "UK-6 EURO-40", "EURO 40", "Euro 40", "M-6", "m-6", "M6", "Size 40", "6", "6.5", "uk6-m6", "40/uk6/m6", "40 UK 6", "40-UK 6", "40-UK6", "UK 6/EURO 40", "UK 6.5|EURO 40", "UK 6.5/EURO 40"],
    "41": ["41", "41/7", "41/7.5", "41-7", "41-7.5", "41-m7", "UK 7", "UK7", "UK-7", "UK 7 / EURO 41", "UK 7|EURO 41", "UK 7.5|EURO 41", "UK-7 EUR-41", "EURO 41", "Euro 41", "M-7", "m-7", "M7", "Size 41", "7", "7.5", "UK 7/EURO 41", "UK 7.5/EURO 41", "UK7.5/EURO 41", "41/uk7/m7", "41 UK 7", "41-UK 7", "41-UK7", "Euro-41. UK-7", "M7-41"],
    "42": ["42", "42/7.5", "42/8", "42-7.5", "42-8", "42-m8", "UK 8", "UK8", "UK-8", "UK 8 / EURO 42", "UK 8|EURO 42", "UK-8 EUR-42", "EURO 42", "Euro 42", "M-8", "m-8", "M8", "Size 42", "8", "8.5", "UK 8/EURO 42", "42/uk8/m8", "42 UK 8", "42-UK 8", "42-UK8", "Euro-42. UK-7.5", "Euro-42.5 UK-8", "42 UK 7.5"],
    "43": ["43", "43/8.5", "43/9", "43-8.5", "43-9", "43-m9", "UK 9", "UK9", "UK-9", "UK 9 / EURO 43", "UK 9|EURO 43", "UK-9 EUR-43", "EURO 43", "Euro 43", "M-9", "m-9", "M9", "Size 43", "9", "UK 9/EURO 43", "43/uk9/m9", "43 UK 9", "43-UK 9", "43-UK9", "Euro-43. Uk-8.5", "M9-43"],
    "44": ["44", "44/9", "44/9.5", "44/10", "44-9", "44-9.5", "44-10", "44-m10", "UK 10", "UK10", "UK-10", "UK 10 / EURO 44", "UK 10|EURO 44", "UK-10 EUR-44", "EURO 44", "Euro 44", "M-10", "m-10", "M10", "Size 44", "10", "9.5", "UK 10/EURO 44", "44/uk10/m10", "44 UK 10", "44-UK 10", "44-UK10", "Euro-44. Uk-9", "M10-44"],
    "45": ["45", "45/10", "45/10.5", "45/11", "45-10", "45-10.5", "45-11", "45-m11", "UK 11", "UK11", "UK-11", "UK 11 / EURO 45", "UK 11|EURO 45", "UK-11 EUR-45", "EURO 45", "Euro 45", "M-11", "m-11", "M11", "Size 45", "11", "10.5", "UK 11/EURO 45", "45/uk11/m11", "45 UK 11", "45-UK 11", "45-UK11", "Euro-45. Uk-10", "M11-45"],
    "46": ["46", "46/11", "46-11", "46-m12", "UK 12", "UK12", "UK-12", "UK 12 / EURO 47", "EURO 46", "Euro 46", "Size 46", "UK-11 EUR-46"],
    "47": ["47", "47/12", "UK 12 / EURO 47", "Size 47"]
};

  // const sizeMap = {
  //   "40": ["40", "40-m6", "40-6.5", "40-6", "UK 6/EURO 40", "UK 6.5/EURO 40", "UK 6 / EURO 40", "UK-6 EUR-40", "M-6", "m-6", "UK 6|Euro 40", "UK 6.5|EURO 40", "U.K-6 Euro-40", "UK-6 EURO-40", "40-UK 6", "40 UK 6", "EURO 40", "40 - 6", "Euro 40- Uk 6"],
  //   "41": ["41", "41-7.5", "41-m7", "41-7", "UK 7/EURO 41", "UK7.5/EURO 41", "UK 7 / EURO 41", "UK-7 EUR-41", "7.5", "Euro-41. UK-7", "UK-7.5 EUR-41.5", "Uk 7/Euro 41", "7/ Euro 41", "41/7.5", "41/7", "41/7 5", "M7", "Euro 41", "41 7.5", "41-UK7", "41 UK 7", "UK 7", "41-42"],
  //   "42": ["42", "42-8", "42-7.5", "42-m8", "UK 7.5/EURO 42", "UK 8/EURO 42", "UK 8 / EURO 42", "UK-7.5 EUR-42", "m-8", "Euro-42.5 UK-8", "Euro-42. UK-7.5", "UK 8|EURO 42", "UK 8.5|EURO 42", "UK-8 EUR-42", "42-UK 8", "42 UK 8", "EURO 42", "Euro 42-UK 8", "Euro 42-UK 7.5"],
  //   "43": ["43", "43-8.5", "43-9", "43-m9", "UK 8.5/EURO 43", "UK 9/EURO 43", "UK 9 / EURO 43", "UK-8.5 EUR-43", "m-9", "Euro-43. Uk-8.5", "UK 9|EURO 43", "UK 9.5|EURO 43", "UK-9 EUR-43", "43-UK 9", "43 UK 9", "EURO 43", "Euro 43-UK 9", "Euro 43-UK 8.5"],
  //   "44": ["44", "44-9.5", "44-9", "44-m10", "UK 9.5/EURO 44", "UK 10/EURO 44", "UK 10 / EURO 44", "UK-9.5 EUR-44", "m-10", "Euro-44. Uk-9", "UK 10|EURO 44", "UK-10 EUR-44", "44-UK 10", "44 UK 10", "EURO 44", "Euro 44-UK 9", "Euro 44-UK 9.5", "UK-9 EUR-44"],
  //   "45": ["45", "45-10.5", "45-10", "45-m11", "UK 10.5/EURO 45", "UK 11/EURO 45", "UK 11 / EURO 45", "UK-10.5 EUR-45", "m-11", "Euro-45. Uk-10", "UK 10.5|EURO 45", "UK-11 EUR-45", "45-UK 11", "45 UK 11", "EURO 45", "Euro 45-UK 10", "Euro 45-UK 10.5", "UK-10 EUR-45"],
  //   "46": ["46", "46-11", "46-UK 12", "UK 11/EURO 46", "UK-11 EUR-46", "UK-10.5 EUR-46", "EURO 46", "Euro-46. Uk-11"],
  //   "36": ["36", "36-3.5", "U.K-3.5 Euro-36", "U.K-3 Euro-36", "EURO 36"],
  //   "37": ["37", "37-4", "U.K-4 Euro-37", "EURO 37"],
  //   "38": ["38", "38-5", "U.K-5 Euro-38", "U.K-5.5 Euro-39", "EURO 38"],
  //   "39": ["39", "39-6", "U.K-6 Euro-39", "EURO 39"],
  //   "47": ["47", "47/12", "UK 12 / EURO 47", "EURO 47"],
  //   "48": ["48"],
  //   // "nill": ["MONOGRAM", "CHECKED BROWN", "Black", "Brown", "Gold", "Silver", "Purple", "Regular", "Pcs", "S", "XXL", "M", "L", "XL"]
  // };

  const normalizeSize = (inputSize) => {
    console.log("normalized");

    for (const [baseSize, variants] of Object.entries(sizeMap)) {
      if (variants.includes(inputSize)) {
        return baseSize;
      }
    }
    return inputSize; // fallback if not found
  };
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    console.log(term);
    let urls = `${baseUrl}/product/search?q=${term}`;
    fetch(urls, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        setSearchResults(data.results);

      })
      .catch(error => console.error('Error:', error));
  };


  const handleCloseSearch = () => {
    setShowSearch(false);
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <>
      {/* First Line Header */}
      <Navbar bg="white" className="py-1">
        <Container fluid>
          {/* Mobile View */}
          <div className="d-flex justify-content-between w-100 d-md-none align-items-center">
            <div className="d-flex gap-2">
              <Button
                variant="link"
                onClick={() => setShowMenu(true)}
                className="text-dark p-1"
              >
                <FaBars size={20} />
              </Button>
              {/* <Button
                variant="link"
                onClick={() => setShowSearch(true)}
                className="text-dark p-1"
              >
                <FaSearch size={20} />
              </Button> */}

            </div>
            <Nav.Link className="m-0">
              <Link to='/' className="h3 text-dark text-decoration-none">Kicks Mania</Link>
            </Nav.Link>
            <div className="d-flex gap-2">
              <Button
                variant="link"
                onClick={() => setShowSearch(true)}
                className="text-dark p-1"
              >
                <FaSearch size={20} />
              </Button>

            </div>
          </div>

          {/* Desktop View */}
          <div className="d-none d-md-flex justify-content-center w-100">
            <Nav.Link><Link to='/' className="h3  text-dark text-decoration-none">Kicks Mania</Link></Nav.Link>
          </div>
        </Container>
      </Navbar>

      {/* Second Line Header */}
      <Navbar expand="md" className="border-bottom py-1 d-none d-md-block bg-white">
        <Container fluid className="justify-content-center">
          <Nav className="gap-4 text-center"> 
            <Nav.Link ><Link to={`/search/nik`} className="text-dark text-decoration-none "> Nike</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/Jor`} className="text-dark text-decoration-none"> Jordan</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/Yee`} className="text-dark text-decoration-none"> Yeezy</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/force`} className="text-dark text-decoration-none"> Airforce</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/dun`} className="text-dark text-decoration-none"> Dunks</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/adi`} className="text-dark text-decoration-none"> Adidas</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/bal`} className="text-dark text-decoration-none"> New balance</Link> </Nav.Link>
            <Nav.Link ><Link to={`/search/Vuitton`} className="text-dark text-decoration-none"> Louis Vuitton</Link> </Nav.Link>
            <Nav.Link ><Link to={`/search/croc`} className="text-dark text-decoration-none"> Corcs slide </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/pum`} className="text-dark text-decoration-none"> Puma</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/oni`} className="text-dark text-decoration-none"> Onitsuka</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/asi`} className="text-dark text-decoration-none"> Asics</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/van`} className="text-dark text-decoration-none"> Vans</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/conver`} className="text-dark text-decoration-none"> Converse</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/qua`} className="text-dark text-decoration-none"> UA QUALITY </Link></Nav.Link>


            {/* <Nav.Link className="text-dark"><Link to={`/search/${searchTerm}`}> Home</Link></Nav.Link>
            <Nav.Link className="text-dark"><Link to={`/search/${searchTerm}`}> About</Link></Nav.Link>
            <Nav.Link className="text-dark"><Link to={`/search/${searchTerm}`}> Services</Link></Nav.Link>
            <Nav.Link className="text-dark"><Link to={`/search/${searchTerm}`}> Contact</Link></Nav.Link> */}
          </Nav>
          <Button
            variant="link"
            className="ms-4 text-dark p-1"
            onClick={() => setShowSearch(true)}
          >
            <FaSearch size={20} />
          </Button>
        </Container>
      </Navbar>

      {/* Search Offcanvas */}
      <Offcanvas
        show={showSearch}
        onHide={handleCloseSearch}
        placement="top"
        className="h-75"
      >
        <Offcanvas.Header className="border-bottom">
          <div className="w-100 me-3">
            <Form.Group controlId="searchInput">
              <div className="input-group">
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  autoFocus
                />
                <Button variant="outline-secondary" onClick={console.log({ products })
                }>
                  <FaSearch />
                </Button>
              </div>
            </Form.Group>
          </div>
          <Button
            variant="link"
            onClick={handleCloseSearch}
            className="text-dark"
          >
            <FaTimes size={20} />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body className="overflow-auto">







          <div className="row g-2">
            {searchResults
              .slice(0, 6)
              .map((product, index) => (
                <div className="col-6 col-md-2 col-sm-3" key={product.productId}>
                  <div class="card border-0  h-100 product-card rounded-0" style={{ overflow: 'hidden' }}>
                    <Link to={`/product/${product.productId}`} class="text-decoration-none position-relative" data-discover="true" style={{ color: 'inherit' }}
                      onClick={handleCloseSearch}
                    >
                      <div class="card-img-container position-relative">
                        <img
                          class="card-img-top  top-0 start-0 w-100 object-fit-cover transition-opacity rounded-0"
                          src={Array.isArray(product.image) ? product.image[0] : product.featuredimg}
                          alt={product.productName}
                          loading="lazy"
                          style={{ opacity: 1, transition: 'opacity 0.3s ease', aspectRatio: "1/1" }}
                        />
                      </div>

                      <div class="card-body pt-2 px-2 tex-center">
                        <p class="card-title mb-2 truncate-2-lines" style={{
                          fontWeight: 500,
                          //  fontSize: '1.1rem', 
                          color: "#212529"
                        }}>
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
                              style={{ fontSize: "0.8rem", padding: "0.15rem 0.3rem" }}
                            >
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
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          {searchResults.length !== 0 ? <>
            <Link to={`/search/${searchTerm}`} className='w-100 d-flex justify-content-center text-dark mt-4 btn  fw-semibold px-4 rounded-0' onClick={handleCloseSearch}>
              <h6>View All Products
                <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
                </svg>
              </h6></Link>
          </> : <p>No Result Found</p>}
          {/* show more */}
        </Offcanvas.Body >
      </Offcanvas >

      {/* Mobile Menu Offcanvas */}
      < Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h2> All Product</h2></Offcanvas.Title>
          {/* <Offcanvas.Title><h5> Kicks Mania</h5></Offcanvas.Title> */}

        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <Nav.Link ><Link to={`/search/nik`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Nike
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/Jor`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Jordan
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/Yee`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Yeezy
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/force`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Airforce
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/dun`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Dunks
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/adi`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Adidas
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/bal`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> New balance
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/Vuitton`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Louis Vuitton
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/croc`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Corcs slide
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/pum`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Puma
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/oni`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Onitsuka
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/asi`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Asics
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/van`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Vans
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/conver`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Converse
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/qua`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> UA QUALITY
              <svg viewBox="0 0 14 10" fill="none" aria-hidden="true" focusable="false" class="icon icon-arrow ms-1" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z" fill="currentColor"></path>
              </svg>
            </Link></Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas >
    </>
  );
};

export default NavBaar;