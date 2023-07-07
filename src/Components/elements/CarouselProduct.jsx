import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Carousel from "../Carousel/Carousel";

const CarouselProduct = () => {
  return (
    <div className="carousel-product">
      <div className="left">
        <div className="product-title">Moringa Lemon Ginger Infussion </div>
        <p className="product-description">
          INGREDIENTS - Moringa Leaves, Ginger Root, Lemongrass, Licorice Root
          and Natural Lemon and Ginger Flavor.
        </p>
        <ul>
          <li>
            <BsFillCheckCircleFill /> <p className="point">Good for health</p>
          </li>
          <li>
            <BsFillCheckCircleFill />{" "}
            <p className="point">Prevent cancer, boost immunity</p>
          </li>
          <li>
            <BsFillCheckCircleFill /> <p className="point">Prevent cancer </p>
          </li>
        </ul>

        <div className="price-container">
          <div className="price-text">Price</div>
          <div className="discounted-price">₹ 210</div>
          <div className="actual-price">₹ 999</div>
        </div>
        <div className="bottom-wrapper">
          <button>BUY NOW</button>
          <p className="offer-text">40%</p>
        </div>
      </div>
      <div className="right">
        <Carousel />
      </div>
    </div>
  );
};

export default CarouselProduct;
