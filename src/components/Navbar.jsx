import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button, Form } from 'react-bootstrap';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';

const NavBaar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Sample data for demonstration
  const sampleResults = [
    'Search Result 1',
    'Search Result 2',
    'Search Result 3',
    'Another Result',
    'Demo Result'
  ];

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = sampleResults.filter(item => 
      item.toLowerCase().includes(term)
    );
    setSearchResults(filtered);
  };

  // other otipon
  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  //   let filtered = [...products];

  //   if (query) {
  //     filtered = filtered.filter(product =>
  //       product.name.toLowerCase().includes(query.toLowerCase()) ||
  //       product.brand.toLowerCase().includes(query.toLowerCase()) ||
  //       product.category.toLowerCase().includes(query.toLowerCase())
  //     );
  //   }

  //   setFilteredProducts(filtered);
  // };



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
            <Navbar.Brand href="#" className="m-0">Company Name</Navbar.Brand>
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
            <Navbar.Brand href="#">Company Name</Navbar.Brand>
          </div>
        </Container>
      </Navbar>

      {/* Second Line Header */}
      <Navbar expand="md" className="border-bottom py-1 d-none d-md-block bg-white">
        <Container fluid className="justify-content-center">
          <Nav className="gap-4">
            <Nav.Link href="#" className="text-dark">Home</Nav.Link>
            <Nav.Link href="#" className="text-dark">About</Nav.Link>
            <Nav.Link href="#" className="text-dark">Services</Nav.Link>
            <Nav.Link href="#" className="text-dark">Contact</Nav.Link>
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
        className="h-25"
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
                <Button variant="outline-secondary">
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
          {searchResults.map((result, index) => (
            <div key={index} className="p-2 border-bottom">
              {result}
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>

      {/* Mobile Menu Offcanvas */}
      <Offcanvas 
        show={showMenu} 
        onHide={() => setShowMenu(false)} 
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Company Name</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-3">
            <Nav.Link href="#" className="text-dark">Home</Nav.Link>
            <Nav.Link href="#" className="text-dark">About</Nav.Link>
            <Nav.Link href="#" className="text-dark">Services</Nav.Link>
            <Nav.Link href="#" className="text-dark">Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavBaar;