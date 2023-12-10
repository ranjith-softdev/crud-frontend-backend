import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, Link } from "react-router-dom";

function CollapsibleExample() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const profileUrl = localStorage.getItem("profileUrl");

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("profileUrl");
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <p className="d-flex justify-content-center align-items-center m-0 px-3 fw-bold">
              {userName}
            </p>
            {userName ? (
              <img
                src={profileUrl}
                alt=" "
                width={40}
                height={40}
                className=" rounded-circle me-3"
              />
            ) : (
              <></>
            )}
          </Nav>
          {userName ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Link to={"/signin"}>
              <Button>Login</Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
