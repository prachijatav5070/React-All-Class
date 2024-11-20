import img1 from "./images/rose.jpg"
import img2 from "./images/rose2.jpg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import Carousel from 'react-bootstrap/Carousel';
import ban1 from "./images/dog1.webp";
import ban2 from "./images/dog2.webp";
import ban3 from "./images/dog3.webp";
const App=()=>{
  return(
    <>

    <h1>welcome to cybrom</h1>

    <Navbar bg="primary" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Carousel>
      <Carousel.Item>
        <img src={ban1} width="100%" height="250"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban2} width="100%" height="250" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban3} width="100%" height="250" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <img src={img1} width="300" height="300"/>
    <br /> <br />
    <img src={img2} width="300" height="300"/>
    
    <img src="public/hibiscus.webp " height="200"/>

    </>
  )
}
export default App;