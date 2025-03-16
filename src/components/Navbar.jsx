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
            <Navbar.Brand href="/" className="m-0"><h1>Kicks Mania</h1></Navbar.Brand>
            <div className="d-flex gap-2">
              <Button
                variant="link"
                onClick={() => setShowSearch(true)}
                className="text-dark p-1"
              >
                <FaSearch size={20} />
              </Button>
              <Button
                variant="link"
                onClick={() => setShowMenu(true)}
                className="text-dark p-1"
              >
                <FaBars size={20} />
              </Button>
            </div>
          </div>

          {/* Desktop View */}
          <div className="d-none d-md-flex justify-content-center w-100">
            <Navbar.Brand href="#"><h1>Kicks Mania</h1></Navbar.Brand>
          </div>
        </Container>
      </Navbar>

      {/* Second Line Header */}
      <Navbar expand="md" className="border-bottom py-1 d-none d-md-block bg-white">
        <Container fluid className="justify-content-center">
          <Nav className="gap-4">
            <Nav.Link href="#" className="text-dark">Nike</Nav.Link>
            <Nav.Link href="#" className="text-dark">Jordan</Nav.Link>
            <Nav.Link href="#" className="text-dark">Yeezy</Nav.Link>
            <Nav.Link href="#" className="text-dark">Airforce</Nav.Link>
            <Nav.Link href="#" className="text-dark">Dunks</Nav.Link>
            <Nav.Link href="#" className="text-dark">Adidas</Nav.Link>
            <Nav.Link href="#" className="text-dark">New balance</Nav.Link>
            <Nav.Link href="#" className="text-dark">Louis Vuitton</Nav.Link>
            <Nav.Link href="#" className="text-dark"> Corcs slide</Nav.Link>
            <Nav.Link href="#" className="text-dark"> Puma</Nav.Link>
            <Nav.Link href="#" className="text-dark"> Onitsuka</Nav.Link>
            <Nav.Link href="#" className="text-dark"> Asics</Nav.Link>
            <Nav.Link href="#" className="text-dark"> Vans</Nav.Link>
            <Nav.Link href="#" className="text-dark"> Converse</Nav.Link>
            <Nav.Link href="#" className="text-dark"> UA QUALITY </Nav.Link>


            {/* <Nav.Link href="#" className="text-dark">Home</Nav.Link>
            <Nav.Link href="#" className="text-dark">About</Nav.Link>
            <Nav.Link href="#" className="text-dark">Services</Nav.Link>
            <Nav.Link href="#" className="text-dark">Contact</Nav.Link> */}
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
          {searchResults
            // .slice(0, 3)
            .map((result, index) => (

              <div key={index} className="p-2 border-bottom">
                <Link to={`/product/${result.productId}`} className="row gap-1 " onClick={handleCloseSearch} style={{ color: 'black', textDecoration: 'none' }}>
                  <img src={result.featuredimg} alt="" className='col-12 col-sm-5' style={{ height: '250px', objectFit: 'cover', aspectRatio: '1/1' }} />

                  <div className='col'>
                    <h5 >{result.productName}</h5>

                    <div className="row ">
                      {

                        JSON.parse(result.sizeName).map(size => (

                          <div key={size} className="col-3 mb-2">
                            <button
                              // onClick={() => setSelectedSize(size)}
                              className={`btn w-100 btn-outline-dark`}
                            >
                              {size}
                            </button>
                          </div>

                        ))
                      }
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          {/* show more */}
        </Offcanvas.Body >
      </Offcanvas >

      {/* Mobile Menu Offcanvas */}
      < Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h2> Kicks Mania</h2></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <Nav.Link href="#" className="text-dark">Nike</Nav.Link>
            <Nav.Link href="#" className="text-dark">Jordan</Nav.Link>
            <Nav.Link href="#" className="text-dark">Yeezy</Nav.Link>
            <Nav.Link href="#" className="text-dark">Airforce</Nav.Link>
            <Nav.Link href="#" className="text-dark">Dunks</Nav.Link>
            <Nav.Link href="#" className="text-dark">Adidas</Nav.Link>
            <Nav.Link href="#" className="text-dark">New balance</Nav.Link>
            <Nav.Link href="#" className="text-dark">Louis Vuitton</Nav.Link>
            <Nav.Link href="#" className="text-dark"> Corcs slide</Nav.Link>
            <Nav.Link href="#" className="text-dark"> Puma</Nav.Link>
            <Nav.Link href="#" className="text-dark"> Onitsuka</Nav.Link>
            <Nav.Link href="#" className="text-dark"> Asics</Nav.Link>
            <Nav.Link href="#" className="text-dark"> Vans</Nav.Link>
            <Nav.Link href="#" className="text-dark"> Converse</Nav.Link>
            <Nav.Link href="#" className="text-dark"> UA QUALITY </Nav.Link>

            {/* <Nav.Link href="#" className="text-dark">Home</Nav.Link>
            <Nav.Link href="#" className="text-dark">About</Nav.Link>
            <Nav.Link href="#" className="text-dark">Services</Nav.Link>
            <Nav.Link href="#" className="text-dark">Contact</Nav.Link> */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas >
    </>
  );
};

export default NavBaar;