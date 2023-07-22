import React from "react";
import "./About.css";
import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/projectphotography/WhatsApp Image 2023-05-19 at 8.29.22 PM.jpeg";
import Img3 from "../../images/projectphotography/WhatsApp Image 2023-05-19 at 8.29.23 PM.jpeg";
import Img4 from "../../images/projectphotography/WhatsApp Image 2023-05-19 at 8.29.26 PM(1).jpeg";
import MissionImg from "../../images/mission.png";
import mssaikrishna from "../../images/Ms.Saikrishna Mohanty.jpg";
import caaroop from "../../images/CA Arup Sahoo.jpg";
import VisionImg from "../../images/vision.png";
import container4Img from "../../images/container4.png";
import customer1Img from "../../images/customer1.png";
import customer2Img from "../../images/customer2.png";
import customer3Img from "../../images/customer3.png";
import customer4Img from "../../images/customer4.png";
import leafImg from "../../images/leaf.png";
import teammember1Img from "../../images/teammember1.png";
import teammember2Img from "../../images/teammember2.png";
import teammember3Img from "../../images/teammember3.png";
import KettleIcon from "../../images/KettleIcon";
import { TeaKettle } from "../../images/TeaKettle";
import TeamLeaf from "../../images/TeamLeaf";
import Carousel from 'better-react-carousel'
const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="content">
          WE ARE VEDIC TEAGEN{" "}
          <div>
            <KettleIcon />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Suspendisse sed ultrices eu
          nullam tincidunt ac. Neque pharetra vulputate tincidunt turpis
          interdum duis iaculis neque id. Convallis sed cursus odio a et aliquam
          quis.
        </p>
        <div className="btn">
          <button className="discover">Discover our products </button>
          <a>Let’s know more</a>
        </div>
      </div>
      <div className="about-container2">
        <div className="left" >
          <Carousel cols={1} gap={0} loop autoplay={2500} hideArrow>
            <Carousel.Item>
              <img width="100%" src={Img1} />
            </Carousel.Item>

            <Carousel.Item>
              <img width="100%" src={Img2} />
            </Carousel.Item>

            <Carousel.Item>
              <img width="100%" src={Img3} />
            </Carousel.Item>

            <Carousel.Item>
              <img width="100%" src={Img4} />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="right">
          <button className="about-btn">About Us</button>
          <h2>How It all started</h2>
          <p>
            It’s all started with a small group of Women Farmers in Rayagada
            District of Odisha who wanted to do something different but was
            lacking proper knowledge. ARK Relucent came into picture for the
            better cause to make their dream into reality by preparing a
            byproducts and giving name to that product.
          </p>

          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet
            pellentesque aliquam .
          </p> */}
          <button className="read-more">Read more</button>
        </div>
      </div>
      <div className="mission-section">
        <div className="mission-wrapper">
          <div className="left">
            <div className="heading-wrapper">
              <div className="heading">Our Mission</div>
            </div>
            <p>
              Our mission and vision is to empower and to create livelihood of
              10000 women farmers as per SDG 1,2, & 3 by end of 2030 by
              providing them proper flatform for their agriproducts.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet
              pellentesque aliquam
            </p> */}
            <img src={MissionImg} alt="Mission" />
          </div>
          <div className="right">
            <div className="heading-wrapper">
              <div className="heading">Our Vision</div>
            </div>
            <p>
              To create a healthier society where there won’t be any place for
              anything artificial to chose for the dietary supplement
              consumption . To add value to the natural products of mother
              nature
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet
              pellentesque aliquam
            </p> */}
            <img src={VisionImg} alt="VIsion" />
          </div>
        </div>
      </div>
      <div className="about-container4">
        <div className="left">
          <img src={container4Img} />
        </div>
        <div className="right">
          <h2>helping more than 500+ Farmers To earn their livelihood</h2>
          <p>
            We are not only providing livelihood to 70+ tribal women farmers but
            also trying to bring them to the mainstream of the society by
            providing them proper education , health and other facilities
          </p>

          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet
            pellentesque aliquam .
          </p> */}
        </div>
      </div>
      <div className="happy-customers-section">
        <div className="happy-customers">
          More than 500+ happy customers across the country
          <div className="tea-kettle">
            <TeaKettle />
          </div>
        </div>
        <div className="img-wrapper">
          <img src={customer1Img} />
          <img src={customer2Img} />
          <img src={customer3Img} />
          <img src={customer4Img} />
        </div>
      </div>
      <div className="team-container">
        <div className="upper-section">
          <div className="left-team">
            <div className="team-head">
              Meet the Team behind Our Vedic Teagen
            </div>
            <p>Ms. Saikrishna Mohanty, Mr. Arup Sahoo</p>
          </div>
          <div className="leaf-img">
            <TeamLeaf />
          </div>
        </div>
        <div className="image-wrapper">
          <div className="image-card">
            <img src={mssaikrishna} />
            <h6> Ms. Saikrishna Mohanty</h6>
            <p>Managing Director</p>
          </div>
          
          <div className="image-card">
            <img src={caaroop} />
            <h6>CA Arup Sahoo</h6>
            <p>Managing Director</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
