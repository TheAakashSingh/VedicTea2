import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";
// import required modules
import { Pagination, Autoplay } from "swiper";
import CarouselImg1 from "../../images/CarouselImg1.png";
import DemoImg from "../../images/img1.jpg";
import Product1Img from "../../images/product1.png";
import img2 from '../../images/productImg/IMG_20230608_165358.jpg'
import img3 from '../../images/productImg/IMG_20230608_165104.jpg'
import img4 from '../../images/productImg/IMG_20230608_164845.jpg'

export default function Carousel() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img4} alt="Carousel Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Carousel Image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Carousel Image 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
