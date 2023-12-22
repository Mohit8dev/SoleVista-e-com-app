import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './ProductCarousel.css';
import product1 from '../../../Assets/shoe-1.jpg';
import product2 from '../../../Assets/shoe-2.jpg';
import product3 from '../../../Assets/shoe-3.jpg';
import product4 from '../../../Assets/shoe-4.jpg';
import product5 from '../../../Assets/shoe-5.jpg';
import product6 from '../../../Assets/shoe-6.jpg';
import product7 from '../../../Assets/shoe-7.jpg';
import product8 from '../../../Assets/shoe-8.jpg';
import product9 from '../../../Assets/shoe-9.jpg';
import product10 from '../../../Assets/shoe-10.jpg';

const ProductCarousel = () => {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};
    return(
        <Carousel 
            responsive={responsive}
            showDots={true}
            
        >
            <div className="product-card-carousel">
                <img src={product1} alt="product1" />
            </div>
            <div className="product-card-carousel">
                <img src={product2} alt="product2" />
            </div>
            <div className="product-card-carousel">
                <img src={product3} alt="product3" />
            </div>
            <div className="product-card-carousel">
                <img src={product4} alt="product4" />
            </div>
            <div className="product-card-carousel">
                <img src={product5} alt="product5" />
            </div>
            <div className="product-card-carousel">
                <img src={product6} alt="product6" />
            </div>
            <div className="product-card-carousel">
                <img src={product7} alt="product7" />
            </div>
            <div className="product-card-carousel">
                <img src={product8} alt="product8" />
            </div>
            <div className="product-card-carousel">
                <img src={product9} alt="product9" />
            </div>
            <div className="product-card-carousel">
                <img src={product10} alt="product10" />
            </div>
        </Carousel>
    )
}

export default ProductCarousel;