import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../Carousel/carousel-styles.css";

function Carousel() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src="/placeholder.png"
      onDragStart={handleDragStart}
      role="presentation"
      width={"100%"}
    />,
    <img
      src="/placeholder.png"
      onDragStart={handleDragStart}
      role="presentation"
      width={"100%"}
    />,
    <img
      src="/placeholder.png"
      onDragStart={handleDragStart}
      role="presentation"
      width={"100%"}
    />,
    <img
      src="/placeholder.png"
      onDragStart={handleDragStart}
      role="presentation"
      width={"100%"}
    />,
    <img
      src="/placeholder.png"
      onDragStart={handleDragStart}
      role="presentation"
      width={"100%"}
    />,
    <img
      src="/placeholder.png"
      onDragStart={handleDragStart}
      role="presentation"
      width={"100%"}
    />,
    <img
      src="/placeholder.png"
      onDragStart={handleDragStart}
      role="presentation"
      width={"100%"}
    />,
    <img
      src="/placeholder.png"
      onDragStart={handleDragStart}
      role="presentation"
      width={"100%"}
    />,
  ];

  return (
    <AliceCarousel
      disableButtonsControls={"false"}
      disableDotsControls={"false"}
      infinite={true}
      responsive={{
        0: {
          items: 2,
        },
        500: {
          items: 4,
        },
        1024: {
          items: 6,
          itemsFit: "contain",
        },
      }}
      mouseTracking
      items={items}
      autoPlay={"true"}
      autoPlayInterval={"800"}
      
    />
  );
}

export default Carousel;
