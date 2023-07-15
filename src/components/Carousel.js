import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Carousel({ props }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Splide
        aria-label="My Favorite Images"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        options={{
          width: "50%",
        }}
      >
        <SplideSlide>
          <img src={props.img_one} alt={props.img_alt} style={props.style} />
        </SplideSlide>
        <SplideSlide>
          <img src={props.img_two} alt={props.img_alt} style={props.style} />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Carousel;
