import React from "react";
import Star from "../../images/Star";

const TestimonialCard = ({ img, author, description, stars }) => {
  return (
    <div key={author} className="testimonial-card">
      <div className="img-wrapper">
        <img src={img} alt={author} />
      </div>
      <div className="content-wrapper">
        <div className="stars">
          {Array.from(Array(stars), (e, i) => (
            <Star />
          ))}
        </div>
        <div className="description">{description}</div>
        <div className="author">{author}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
