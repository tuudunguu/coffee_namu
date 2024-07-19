"use client";

import { Order } from "../components/Order";
import { Container } from "../components/container";
import React, { useState, useEffect } from "react";

export const SecondSectionOrder = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, carousel.length]);

  return (
    <Container background="bg-white">
      <div className="flex flex-row w-full h-fit border-2 border-yellow-500">
        <div
          className="w-full h-fit flex flex-row items-center transition-transform duration-500 rounded-xl"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="w-full flex-shrink-0">
            <Order
              pictures="/pictures/image 10.png"
              desc="Яг одоо захиалаад авах."
            />
          </div>
          <div className="w-full flex-shrink-0">
            <Order
              pictures="/pictures/wa.jpg"
              desk="All latte 20% special offer"
            />
          </div>
          <div className="w-full flex-shrink-0">
            <Order
              pictures="/pictures/Lead-LUU-Landing-Page-1440x530px-3.jpg"
              desk="All latte 20% special offer"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
