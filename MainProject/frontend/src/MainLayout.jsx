import { Container, Navbar, Nav } from "react-bootstrap";

const MainLayout = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <section
          title="Section 1"
          content="This is the first section content."
        ></section>
        <section
          title="Section 2"
          content="This is the first section content."
        ></section>
        <section
          title="Section 3"
          content="This is the first section content."
        ></section>
      </Container>
    
      <footer className="bg-dark text-white text-center py-3 mt-5">
        &copy; {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </>
  );
};

export default MainLayout;
