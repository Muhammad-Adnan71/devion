import Image, { StaticImageData } from "next/image";
import React from "react";

function TestimonialSlide({
  image,
  name,
  description,
  company,
}: {
  image: StaticImageData;
  name: string;
  description: string;
  company: string;
}) {
  return (
    <div className=" max-lg:relative px-24 max-lg:pl-0 mt-14 max-sm:mt-20 max-md:pr-12 max-lg:mt-36 rounded-[240px] max-lg:rounded-tl-[30px] max-lg:rounded-bl-[30px] border-2 border-primary-color flex max-xl:gap-x-5 justify-between items-start bg-white w-full">
      <div className="w-2/5 max-lg:w-0 max-xl:min-w-[275px] max-lg:min-w-[auto]">
        <Image
          src={image}
          alt=""
          className="absolute h-[95%] left-0 max-lg:left-[5%]  bottom-0 max-w-[360px] max-lg:max-w-[160px] max-sm:max-w-[100px] max-lg:h-auto max-lg:-top-0 max-lg:translate-y-[-90%] max-sm:translate-y-[-80%]"
        ></Image>
      </div>
      <div className="w-3/5 max-lg:w-full relative py-16 max-md:pt-10 max-md:pb-6">
        <span className="block py-2 px-12 max-md:px-6 rounded-[100px] bg-primary-color text-white text-[30px] max-xl:text-[20px] max-xl:-top-[25px] w-fit absolute -top-[30px] left-[50%]  translate-x-[-50%]  max-md:text-[14px] max-md:-top-[18px] max-lg:left-[75%] max-sm:left-[65%] whitespace-nowrap">
          {name}
        </span>
        <p className="text-secondary-text-color mb-10 max-sm:mb-3  text-[18px] max-xl:text-[14px] max-sm:text-[12px] ">
          {description}
        </p>
        <span className="text-primary-text-color font-bold text-[20px] max-xl:text-[14px]">
          {company}
        </span>
      </div>
    </div>
  );
}

export default TestimonialSlide;
