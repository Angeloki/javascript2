import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import {LinkContainer} from "react-router-bootstrap"

function Header (){
    return(
        <div>
            <Navbar collapseOnSelect expand ="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand><LinkContainer to="/"><Nav.Link>Portfolio</Nav.Link></LinkContainer></Navbar.Brand>
                    <Navbar.Toggle aria-controls="reponsive-navbar-nav" />
                    <Navbar.Collapse id= "responsive-navbar-nav">
                        <Nav classname= "me-auto">
                            <LinkContainer to = "/about"><Nav.Link> About</Nav.Link></LinkContainer>
                            <LinkContainer to= "/projects"><Nav.Link>Projects</Nav.Link></LinkContainer>
                        </Nav>
                        <Nav>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

}

export default Header