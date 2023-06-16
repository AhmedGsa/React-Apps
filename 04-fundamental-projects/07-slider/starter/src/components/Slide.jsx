import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Slide = (props) => {
  const { person, currentSlide } = props;
  return (
    <div className="slide" style={{
        transform:
            currentSlide === person.id - 1
              ? "translateX(0)"
              : "translateX(100%)",
        opacity: currentSlide === person.id - 1 ? 1 : 0,
        visibility: currentSlide === person.id - 1 ? "visible" : "hidden"
    }}>
      <img className="person-img" src={person.image}></img>
      <h5 className="name">{person.name}</h5>
      <h5 className="title">{person.title}</h5>
      <p
        className="text"
        style={{
          textAlign: "center"
        }}
      >
        {person.quote}
      </p>
      <FaQuoteRight className="icon" />
    </div>
  );
};

export default Slide;
