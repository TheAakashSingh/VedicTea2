import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./TestimonialSlider.css";
// import required modules
import { Navigation } from "swiper";
import Star from "../../images/Star";
import GreyStar from "../../images/WhiteStar";
import ArrowLeft from "../../images/ArrowLeft";
import ArrowRight from "../../images/ArrowRight";

const TestimonialSlider = () => {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={30}
        // loop={true}
        navigation={{
          prevEl: ".testimonialPrev",
          nextEl: ".testimonialNext",
        }}
      >
        <SwiperSlide>
          <div className="rate-star">
            <Star />
            <Star />
            <Star />
            <Star />
            <GreyStar />
          </div>
          <p>
            Great Brand, I will definitely be ordering again! Vedic Teagen is
            worth much more than I paid. I would like to personally thank you.
          </p>
          <p className="name">John Doe</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rate-star">
            <Star />
            <Star />
            <Star />
            <Star />
            <GreyStar />
          </div>
          <p>
            Great Brand, I will definitely be ordering again! Vedic Teagen is
            worth much more than I paid. I would like to personally thank you.
          </p>
          <p className="name">Joe Christensen</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rate-star">
            <Star />
            <Star />
            <Star />
            <Star />
            <GreyStar />
          </div>
          <p>
            Great Brand, I will definitely be ordering again! Vedic Teagen is
            worth much more than I paid. I would like to personally thank you.
          </p>
          <p className="name">John Doe</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rate-star">
            <Star />
            <Star />
            <Star />
            <Star />
            <GreyStar />
          </div>
          <p>
            Great Brand, I will definitely be ordering again! Vedic Teagen is
            worth much more than I paid. I would like to personally thank you.
          </p>
          <p className="name">Joe Christensen</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rate-star">
            <Star />
            <Star />
            <Star />
            <Star />
            <GreyStar />
          </div>
          <p>
            Great Brand, I will definitely be ordering again! Vedic Teagen is
            worth much more than I paid. I would like to personally thank you.
          </p>
          <p className="name">John Doe</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rate-star">
            <Star />
            <Star />
            <Star />
            <Star />
            <GreyStar />
          </div>
          <p>
            Great Brand, I will definitely be ordering again! Vedic Teagen is
            worth much more than I paid. I would like to personally thank you.
          </p>
          <p className="name">Joe Christensen</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rate-star">
            <Star />
            <Star />
            <Star />
            <Star />
            <GreyStar />
          </div>
          <p>
            Great Brand, I will definitely be ordering again! Vedic Teagen is
            worth much more than I paid. I would like to personally thank you.
          </p>
          <p className="name">John Doe</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rate-star">
            <Star />
            <Star />
            <Star />
            <Star />
            <GreyStar />
          </div>
          <p>
            Great Brand, I will definitely be ordering again! Vedic Teagen is
            worth much more than I paid. I would like to personally thank you.
          </p>
          <p className="name">Joe Christensen</p>
        </SwiperSlide>
        <div className="button-container">
          <button className="testimonialPrev">
            <ArrowLeft />
          </button>
          <button className="testimonialNext">
            <ArrowRight />
          </button>
        </div>
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
