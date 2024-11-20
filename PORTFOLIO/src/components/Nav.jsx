import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navmenu=()=>{
    return(
        <>
       <Navbar bg="dark" data-bs-theme="dark" >
        <Container >
          <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
            <Nav.Link href="#pricing">Contect</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Navmenu;