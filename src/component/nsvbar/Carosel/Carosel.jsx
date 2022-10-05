import Carousel from 'react-bootstrap/Carousel';
import './carosel.css'
function Caurosel() {
  return (
    <div className='carosel'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/FZvmShEXwAAn4x9?format=jpg&name=medium"
          alt="First slide"
          height={500}
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://newsghana.com.gh/wp-content/uploads/2020/12/sport-foundations-.jpg"
         
          height={500}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.ghanaweb.com/imagelib/pics/691/69162347.jpg"
        
          height={500}
        />
       
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Caurosel;