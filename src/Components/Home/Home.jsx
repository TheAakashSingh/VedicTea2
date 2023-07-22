import React from "react";
import "./Home.css";
import DemoImg from "../../images/img1.jpg";
import ProductCard from "../elements/ProductCard";
import ProductImage1 from "../../images/productImg/IMG_20230608_164829.jpg";
import ProductImage2 from "../../images/productImg/IMG_20230608_165232.jpg";
import ProductImage3 from "../../images/productImg/IMG_20230608_165413.jpg";
import FeaturedImage1 from "../../images/productImg/IMG_20230608_164808.jpg";
import TestimonialImage1 from "../../images/testimonial1.png";
import TestimonialImage2 from "../../images/testimonial2.png";
import TestimonialImage3 from "../../images/testimonial3.png";
import TestimonialImage4 from "../../images/testimonial4.png";
import TestimonialCard from "../elements/TestimonialCard";
import CarouselProduct from "../elements/CarouselProduct";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";
const handleScroll = (path) => {
  let element = document.getElementById(path);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const Home = () => {
  return (
    <div className="home">
      <div className="hero-container">
        <h2 className="para">
          We assure you to provide best caffeine free herbal tea for your
          healthy life style
        </h2>
        <p>Transform your health with the goodness of Moringa</p>

        <button className="buy-now" onClick={() => handleScroll("our-product")}>
          Explore More
          <BsArrowRight fontSize={"1.25rem"} />{" "}
        </button>

        <div className="img-container"></div>
      </div>
      <div className="hero-image"></div>
      <div className="featured">
        <div className="media">
          <p>Our Mission</p>
          <div className="media-ele">
            <p>
              We believe in creating sustainable livelihood with the help of
              Mother Nature.
            </p>
          </div>
        </div>
        <div className="note-container">
          <div className="featured-note">
            Time has come to switch to A healthier version of Tea from Vedic
            Teagen
          </div>
        </div>

        <div className="featured-preview">
          <img src={FeaturedImage1} alt="demo" />
          <div className="content-wrapper">
            <div className="content-heading"> Why Choose Our Product?</div>
            <p className="content-para">
              We are expert in choosing the best quality moringa leaves from our
              farm. Each leaf is handchoosen by our women farmers. Cleaning and
              drying has been done by the power of Solar energy. Manufacturing
              done after many quality checks in a super hygienic process.
            </p>

            <div className="featured-reviews">
              <div className="featured-review">
                <div className="review-heading">Nutritional Powerhouse:</div>
                <div className="review-content">
                  <ul>
                    <li>
                      Moringa tea is a powerhouse of essential nutrients. Packed
                      with vitamins, minerals, and antioxidants, it supports
                      overall well-being and strengthens the immune system.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="featured-review">
                <div className="review-heading">Digestive Support:</div>
                <div className="review-content">
                  <ul>
                    <li>aids digestion, promotes healthy gut</li>
                    <li>
                      Natural compounds enhance gut health, supporting a robust
                      digestive system.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="featured-review">
                <div className="review-heading">
                  Blood Sugar Management:
                </div>
                <div className="review-content">
                  <ul>
                    <li>
                      Moringa tea regulates blood sugar. Chlorogenic acid and
                      other compounds aid in controlling glucose levels,
                      supporting stable blood sugar management.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="featured-review">
                <div className="review-heading">
                  Anti-inflammatory Properties:
                </div>
                <div className="review-content">
                  <ul>
                    <li>
                      Moringa tea: reduces inflammation. Bioactive compounds
                      support healthy inflammatory response
                    </li>
                    <li>
                      providing natural relief for managing inflammation in the
                      body.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-product" id="our-product">
          <div className="product-heading">Our Products</div>
          <p>
            Elevate Your Lifestyle with Moringa's Wholesome Wonders: Discover the Perfect Balance of Health and Flavor!
          </p>
          <CarouselProduct />
          <div className="product-card-wrapper">
            <ProductCard
              title="Moringa Apple Cinnamon Infusion"
              price="215"
              img={ProductImage1}
              description="It is made with pure moringa leaves, apple and cinnamon pieces. Moringa infusion bags would be a convenient and refreshing beverage to boost our normal lifestyle. We can simply drink the infusion to get the maximum benefit of the miracle tree."
            />
            <ProductCard
              title="Moringa Strawberry Infusion"
              price="215"
              img={ProductImage2}
              marginTopDecsription="3.4rem"
              description="It is made with pure moringa leaves, strawberry pieces. Moringa infusion bags would be a convenient and refreshing beverage to boost our normal lifestyle. We can simply drink the infusion to get the maximum benefit of the miracle tree.
              "
            />
            <ProductCard
              title="Moringa Mint Infusion "
              price="215"
              img={ProductImage3}
              marginTopDecsription="3.4rem"
              description="It is made with pure moringa leaves, mint leaves. Moringa infusion bags would be a convenient and refreshing beverage to boost our normal lifestyle. We can simply drink the infusion to get the maximum benefit of the miracle tree."
            />


          </div>
        </div>
        <div className="new-product-message">
          New Products are coming soon...
        </div>
        <div className="product-card-wrapper">


          <ProductCard
            title="Moringa Noodles "
            price="215"
            img={ProductImage3}
            marginTopDecsription="3.4rem"
            description="It is made with pure moringa leaves, mint leaves. Moringa infusion bags would be a convenient and refreshing beverage to boost our normal lifestyle. We can simply drink the infusion to get the maximum benefit of the miracle tree."
          />
          <ProductCard
            title="Moringa SOAP "
            price="215"
            img={ProductImage3}
            marginTopDecsription="3.4rem"
            description="It is made with pure moringa leaves, mint leaves. Moringa infusion bags would be a convenient and refreshing beverage to boost our normal lifestyle. We can simply drink the infusion to get the maximum benefit of the miracle tree."
          />
          <ProductCard
            title="Moringa OIL "
            price="215"
            img={ProductImage3}
            marginTopDecsription="3.4rem"
            description="It is made with pure moringa leaves, mint leaves. Moringa infusion bags would be a convenient and refreshing beverage to boost our normal lifestyle. We can simply drink the infusion to get the maximum benefit of the miracle tree."
          />
        </div>
      </div>
      <div className="testimonial-section">
        <div className="blue-text">100+ Happy Vedic Teagen Users</div>
        <div className="testimonial-heading">
          They Taste and reviewed Real Tea
        </div>
        <div className="testimonial-card-wrapper">
          <TestimonialCard
            stars={5}
            img={TestimonialImage1}
            author="Krish Ft"
            description={`"Excellent Moringa Mint infusion. A smooth everyday tea. I must have saved the best until life! good mint flavour. A 'sip and savour' tea. I found this a refreshing tea that i would be happy to drink again and again."`}
          />
          <TestimonialCard
            stars={5}
            img={TestimonialImage2}
            author="Devon Lane"
            description={`"I love ! Vedic Teagen, were using it for their projects, so I already knew what kind of taste of the tea. Yes It’s best."`}
          />
          <TestimonialCard
            stars={5}
            img={TestimonialImage3}
            author="Devon Lane"
            description={`"I love ! Vedic Teagen, were using it for their projects, so I already knew what kind of taste of the tea. Yes It’s best."`}
          />
          <TestimonialCard
            stars={5}
            img={TestimonialImage4}
            author="Devon Lane"
            description={`"I love ! Vedic Teagen, were using it for their projects, so I already knew what kind of taste of the tea. Yes It’s best."`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
