

import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../images/b1.jpg";
import banner2 from "../images/b2.png";
import banner3 from "../images/b3.png";
const Banner=()=>{
    return(
        <>
         <Carousel>
      <Carousel.Item>
        <img src={banner1} style={{width:'100%', heigth:'100px'}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner2} style={{width:'100%', heigth:'150px'}}/>
      <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner3} style={{width:'100%', heigth:'150px'}}/>
      <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}
export default Banner;