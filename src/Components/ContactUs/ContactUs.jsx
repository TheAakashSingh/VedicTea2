import React, { useState } from "react";
import "./ContactUs.css";
import ContactHero from "../../images/ContactHero";
import Star from "../../images/Star";
import testimonial4Img from "../../images/testimonial4.png";
import ArrowLeft from "../../images/ArrowLeft";
import ContactTestimonial from "../../images/ContactTestimonial.png";
import ArrowRight from "../../images/ArrowRight";
import Faq from "../elements/Faq";
import FacebookColored from "../../images/FacebookColored";
import InstaColored from "../../images/InstaColored";
import LinkedinColored from "../../images/LinkedinColored";
import TwitterColored from "../../images/TwitterColored";
import GreyStar from "../../images/WhiteStar";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";

const ContactUs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How does Vedic Teagen Moringa Tea benefit my well-being?",
      answer:
        "Beyond its delicated taste , packed antioxidants, it suppports immunity aids digestion, and boost your overall vitality.",
      open: true,
    },
    {
      question: "What makes Vedic Teagen Moringa Tea so speciall?",
      answer:
        "Our Moringa leaves are from the purest regions, ensuring a tea that's bursting with unparalleled freshness and vitality!",
      open: false,
    },

  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="left">
          <div className="contact-head">
            Have An Issue with our Product ? Or facing problem on buying tea?
          </div>
          <a>Reach Out Today</a>
        </div>
        <div className="right">
          <ContactHero />
        </div>
      </div>
      <div className="testimonial-content">
        “ A TESTIMONIAL FROM A USER - AUTHENTICITY IN YOUR TABLE THROUGH TEA
        EVERY MORNING ”
      </div>
      <div className="discuss">
        <div className="heading">Let us discuss on your Topic</div>
        <p>Let’s connect and Chat </p>
        <div className="discuss-card-wrapper">
          <div className="discuss-card">
            <div className="card-heading"> Customer care</div>
            <div className="card-content">
              Lorem ipsum dolor sit amet consectetur. Magnis sit viverra arcu
              mollis sit maecenas risus enim praesent. Eget augue diam nisi
              volutpat lectus ut pellentesque. Donec eu.
            </div>
            <div className="button-wrapper">
              <button>Let's talk</button>
            </div>
          </div>
          <div className="discuss-card">
            <div className="card-heading">Partnership</div>
            <div className="card-content">
              Lorem ipsum dolor sit amet consectetur. Magnis sit viverra arcu
              mollis sit maecenas risus enim praesent. Eget augue diam nisi
              volutpat lectus ut pellentesque. Donec eu.
            </div>
            <div className="button-wrapper">
              <button>Let's talk</button>
            </div>
          </div>
          <div className="discuss-card">
            <div className="card-heading">Sales</div>
            <div className="card-content">
              Lorem ipsum dolor sit amet consectetur. Magnis sit viverra arcu
              mollis sit maecenas risus enim praesent. Eget augue diam nisi
              volutpat lectus ut pellentesque. Donec eu.
            </div>
            <div className="button-wrapper">
              <button>Let's talk</button>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-container">
        <div className="faq-wrapper">
          <div className="heading">USERS FAQ’s</div>
          <p className="sub-heading"> Let’s connect and Chat </p>
          <div className="faqs">
            {faqs.map((faq, index) => (
              <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
          <div className="call-us">
            Don’t have the queries you looking for ?
            <span className="number">Call us at 7008993560</span>
          </div>
        </div>
      </div>
      <div className="address">
        <div className="left">
          <div className="content-wrapper">
            <div className="heading">
              We are also available on different platform
            </div>
          </div>
          <div className="location">
            <div className="heading">Our HQ Location</div>
            <div className="location-address">
              Plot no-94, Lane no-7, Bapuji Nagar, Bhubaneswar, Odisha -751009
            </div>
          </div>
        </div>
        <div className="right">
          <a href="https://www.facebook.com/profile.php?id=100090816356167&mibextid=ZbWKwL">
            <div className="social-card facebook">
              <div className="heading">
                {" "}
                <FacebookColored /> Facebook
              </div>
              <div className="connect">Let’s be friends</div>
            </div>
          </a>
          <a href="https://instagram.com/vedic_teagen?igshid=MzRlODBiNWFlZA==">
            <div className="social-card instagram">
              <div className="heading">
                {" "}
                <InstaColored /> Instagram
              </div>
              <div className="connect">Follow us</div>
            </div>
          </a>

          <div className="social-card linkedin">
            <div className="heading">
              {" "}
              <LinkedinColored /> Linked In
            </div>
            <div className="connect">Let’s Connect</div>
          </div>
          <div className="social-card twitter">
            <div className="heading">
              {" "}
              <TwitterColored /> Twitter
            </div>
            <div className="connect">Follow us</div>
          </div>
        </div>
      </div>
      <div className="rating-container-wrapper">
        <div className="rating-container">
          <div className="left">
            <TestimonialSlider />
          </div>
          <div className="right">{/* <img src={ContactTestimonial} /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
