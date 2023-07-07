import React from "react";
import ArrowDown from "../../images/ArrowDown";
import ArrowUp from "../../images/ArrowUp";

const Faq = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="question-wrapper">
        <div className="faq-question">{faq.question}</div>
        <div className="arrow-wrapper">
          {faq.open ? <ArrowUp /> : <ArrowDown />}
        </div>
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default Faq;
