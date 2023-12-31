import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");
    const handleSearch = () => {
        keyword.length > 0 ? navigate(`/search/${keyword}`) : navigate(`/search`) 
    };
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center" }}>
                    News API
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Indonesia</Nav.Link>
                        <Nav.Link as={Link} to="/programming">Programming</Nav.Link>
                        <Nav.Link as={Link} to="/covid19">COVID 19</Nav.Link>
                        <Nav.Link as={Link} to="/saved">Saved</Nav.Link>
                    </Nav>
                    <Form 
                        className="d-flex"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSearch();
                        }
                    }>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="me-2"
                            value={keyword}
                            onChange={(e) => {
                                    setKeyword(e.target.value);
                                }
                            }
                            
                        />
                        <Button
                            variant="primary"
                            type="submit"
                            >
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;