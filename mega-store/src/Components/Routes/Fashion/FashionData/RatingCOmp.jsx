import { Text } from "@chakra-ui/react";
import React from "react";

const RatingComp = ({ value, text }) => {
  return (
    <section className="rating">
      <span style={{ color: "rgb(255 164 28)" }}>
        <i
          className={
            value >= 1
              ? "fa fas fa-star"
              : value >= 0.5
              ? "fa fa-solid fa-star-half"
              : "fa fas fa-start"
          }
        ></i>
      </span>
      <span style={{ color: "rgb(255 164 28)" }}>
        <i
          className={
            value >= 2
              ? "fa fas fa-star"
              : value >= 1.5
              ? "fa fa-solid fa-star-half"
              : "fa fas fa-start"
          }
        ></i>
      </span>
      <span style={{ color: "rgb(255 164 28)" }}>
        <i
          className={
            value >= 3
              ? "fa fas fa-star"
              : value >= 2.5
              ? "fa fa-solid fa-star-half"
              : "fa fas fa-start"
          }
        ></i>
      </span>
      <span style={{ color: "rgb(255 164 28)" }}>
        <i
          className={
            value >= 4
              ? "fa fas fa-star"
              : value >= 3.5
              ? "fa fa-solid fa-star-half"
              : "fa fas fa-start"
          }
        ></i>
      </span>
      <span style={{ color: "rgb(255 164 28)" }}>
        <i
          className={
            value >= 5
              ? "fa fas fa-star"
              : value >= 4.5
              ? "fa fa-solid fa-star-half"
              : "fa fas fa-start"
          }
        ></i>
      </span>
      <span> {text}</span>
    </section>
  );
};

export default RatingComp;
