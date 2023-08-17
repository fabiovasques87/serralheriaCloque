
import { HeaderArea } from './styled';
import ScrollToTopButton from "../../../src/components/buttonScroll";


import {Nav2} from '../../components/partials/nav2' 
import { Footer } from '../../components/partials/Footer';

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import galpao from '../../../src/img/galpao 2.png';
import galpao1 from '../../../src/img/galpao1.png';
import galpao2 from '../../../src/img/galpao 3.png';



export const TelhasSanduiche = () =>{
    return(
        <div>
            <Nav2 />

            <HeaderArea>

                <div className='containner'>

                

         <Carousel data-bs-theme="dark" className='carousel'>
            <Carousel.Item>
                <img
                className="d-block w-100 img"
                src={galpao}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>Galpão1</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={galpao1}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Galpão2</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={galpao2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Galpão3</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </div>

        <ScrollToTopButton />
        <Footer />
    </HeaderArea>

        </div>
 
    )
}