"use client";

import React, { MutableRefObject, useRef } from "react";
import testimonial from "@public/testimonial.png";
import testimonialVector from "@public/testimonial-vector.png";
import TestimonialSlide from "@components/slides/testimonialSlide";
import SliderButton from "@components/buttons/sliderButton";
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";

function TestimonialsSection() {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <section className=" py-8 pb-[100px] relative">
      <Image
        src={testimonialVector}
        alt=""
        className="absolute right-0 bottom-[-200px] max-w-[300px] z-index[-1]"
      />
      <div className="container m-auto">
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <TestimonialSlide
              image={testimonial}
              name={" Errinne H"}
              description="I would highly recommend Dental Jobs. I just moved to a new state, and
          after I transferred my license, I wanted to temp to find my perfect
          fit. Dental Jobs is easy to use and offers me the ability to pick and
          choose my schedule, set my own hourly rate, and communicate directly
          with the offices through their mobile app."
              company="Dental Hygienist in Denver, CO"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialSlide
              image={testimonial}
              name={" Errinne H"}
              description="I would highly recommend Dental Jobs. I just moved to a new state, and
          after I transferred my license, I wanted to temp to find my perfect
          fit. Dental Jobs is easy to use and offers me the ability to pick and
          choose my schedule, set my own hourly rate, and communicate directly
          with the offices through their mobile app."
              company="Dental Hygienist in Denver, CO"
            />
          </SwiperSlide>
          <div className="flex gap-2 mt-7 justify-center">
            <SliderButton
              className="rotate-180"
              onClick={() => swiperRef?.current?.swiper?.slidePrev()}
            ></SliderButton>
            <SliderButton
              onClick={() => swiperRef?.current?.swiper?.slideNext()}
            ></SliderButton>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsSection;
