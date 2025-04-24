import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button, Form } from 'react-bootstrap';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBaar = (products) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchproducts = products.productss

  const removeDuplicates = (products) => {
    const uniqueMap = new Map();
    products.forEach((product) => {
      if (!uniqueMap.has(product.productId)) {
        uniqueMap.set(product.productId, product);
      }
    });
    return Array.from(uniqueMap.values());
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    let productneeded = []
    searchproducts.filter((item) => {

      console.log(item.productName.toLowerCase().includes(term));
      if (item.productName.toLowerCase().includes(term)) {
        productneeded.push(item)
      }
      if (item.productBrand.toLowerCase().includes(term)) {
        productneeded.push(item)
      }
      if (item.catName.toLowerCase().includes(term)) {
        productneeded.push(item)
      }


      const uniqueProducts = removeDuplicates(productneeded);
      setSearchResults(uniqueProducts);
      return productneeded

    });
    // console.log(filtered);


    // setSearchResults(filtered); 

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
          <Nav className="gap-4">
            <Nav.Link ><Link to={`/search/nik`} className="text-dark text-decoration-none"> Nike</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/Jor`} className="text-dark text-decoration-none"> Jordan</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/Yee`} className="text-dark text-decoration-none"> Yeezy</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/Air`} className="text-dark text-decoration-none"> Airforce</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/dun`} className="text-dark text-decoration-none"> Dunks</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/adi`} className="text-dark text-decoration-none"> Adidas</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/bal`} className="text-dark text-decoration-none"> New balance</Link> </Nav.Link>
            <Nav.Link ><Link to={`/search/lou`} className="text-dark text-decoration-none"> Louis Vuitton</Link> </Nav.Link>
            <Nav.Link ><Link to={`/search/cor`} className="text-dark text-decoration-none"> Corcs slide </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/pum`} className="text-dark text-decoration-none"> Puma</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/oni`} className="text-dark text-decoration-none"> Onitsuka</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/asi`} className="text-dark text-decoration-none"> Asics</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/van`} className="text-dark text-decoration-none"> Vans</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/con`} className="text-dark text-decoration-none"> Converse</Link></Nav.Link>
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
              .slice(0, 3)
              .map((product, index) => (
                <div className="col-6 col-md-2 col-sm-3" key={product.productId}>
                  <div class="card border-0  h-100 product-card rounded-0" style={{ overflow: 'hidden' }}>
                    <Link  to={`/product/${product.productId}`}  class="text-decoration-none position-relative" data-discover="true" style={{ color: 'inherit' }}>
                      <div class="card-img-container position-relative" style={{ paddingTop: "133.5%" }}>
                        <img
                          class="card-img-top position-absolute top-0 start-0 w-100 h-100 object-fit-cover transition-opacity rounded-0"
                          src={Array.isArray(product.image) ? product.image[0] : product.featuredimg}
                          alt={product.productName}
                          loading="lazy"
                          style={{ opacity: 1, transition: 'opacity 0.3s ease', aspectRatio: "1/1" }} />
                      </div>

                      <div class="card-body pt-2 px-2 tex-center">
                        <h5 class="card-title mb-2" style={{ fontWeight: 500, fontSize: '1.1rem', color: "#212529" }}>
                          {product.productName}
                        </h5>



                        <div class="size-options d-flex flex-wrap gap-1 mb-2">
                          {JSON.parse(product.sizeName).map((size) => (
                            <label
                              key={size}
                              className="btn btn-sm btn-outline-dark rounded-0"
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
                    </Link>
                  </div>

                </div>



                // <div key={index} className="p-2 border-bottom">
                //   <Link to={`/product/${result.productId}`} className="container m-auto row gap-1" onClick={handleCloseSearch} style={{ color: 'black', textDecoration: 'none' }}>
                //     <img src={result.featuredimg} alt="" className='col-12 col-sm-5' style={{ height: '250px', objectFit: 'cover', aspectRatio: '1/1' }} />

                //     <div className='col'>
                //       <h2 >{result.productName}</h2>

                //       <div className="row">
                //         {

                //           JSON.parse(result.sizeName).map(size => (

                //             <div key={size} className="col-3 mb-2">
                //               <button
                //                 // onClick={() => setSelectedSize(size)}
                //                 className={`btn w-100 btn-outline-dark`}
                //               >
                //                 {size}
                //               </button>
                //             </div>

                //           ))
                //         }
                //       </div>
                //     </div>
                //   </Link>
                // </div>
              ))}
          </div>
          {searchResults.length !== 0 ? <>
            <Link to={`/search/${searchTerm}`} className='container m-auto w-100 d-flex justify-content-center text-dark mt-4 btn btn-light fw-semibold px-4 py-2 rounded-0' onClick={handleCloseSearch}><h5>View More</h5></Link>
          </> : <h5>No Result Found</h5>}
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
            <Nav.Link ><Link to={`/search/nik`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Nike</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/Jor`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Jordan</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/Yee`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Yeezy</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/Air`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Airforce</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/dun`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Dunks</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/adi`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Adidas</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/bal`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> New balance</Link> </Nav.Link>
            <Nav.Link ><Link to={`/search/lou`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Louis Vuitton</Link> </Nav.Link>
            <Nav.Link ><Link to={`/search/cor`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Corcs slide </Link></Nav.Link>
            <Nav.Link ><Link to={`/search/pum`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Puma</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/oni`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Onitsuka</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/asi`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Asics</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/van`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Vans</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/con`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> Converse</Link></Nav.Link>
            <Nav.Link ><Link to={`/search/qua`} className="text-dark text-decoration-none" onClick={() => { setShowMenu(false) }}> UA QUALITY </Link></Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas >
    </>
  );
};

export default NavBaar;