import React from "react";
import ButtonDefault from "@components/buttons/button";
import Image from "next/image";
import bannerShape1 from "@public/banner-1.png";
import bannerShape2 from "@public/banner-2.png";
import vector1 from "@public/vector-3.png";
import vector2 from "@public/vector-2.png";

function Hero() {
  return (
    <div className="max-md:bg-primary-background-color max-md:py-5">
      <div className="relative md:mt-5">
        <Image
          src={vector1}
          alt=""
          className="absolute max-md:hidden top-[-40px] left-[-0%] z-[-1] w-[35%] select-none max-w-[500px]"
        />
        <Image
          src={vector2}
          alt=""
          className="absolute max-md:hidden top-[-40px] right-[-0%] z-[-1] w-[25%] select-none max-w-[500px]"
        />
        <div className="container mx-auto flex max-md:flex-col justify-between items-center">
          <div className="w-[45%] max-lg:w-[51%] max-md:w-full max-md:order-2 max-md:-mt-8 max-sm:-mt-14">
            <h1 className="text-secondary-color text-[46px] max-xl:text-[42px] max-lg:text-[36px] max-sm:text-[28px] font-bold mb-5 max-lg:mb-3">
              We are the future of dental staffing.
            </h1>
            <p className="text-secondary-text-color text-[18px] max-lg:text-[15px] max-sm:text-[13px] mb-5 max-sm:mb-3 ">
              Is your resume or job posting not being seen? You need a better
              plan! Whether you are looking for a permanent or temporary
              position, we have you covered.
            </p>
            <p className="text-secondary-text-color text-[18px] max-lg:text-[15px] mb-5 max-sm:text-[13px] max-sm:mb-3">
              Create your free account.
            </p>
            <div className="flex gap-4">
              <ButtonDefault className="max-lg:text-[13px] max-md:w-full whitespace-nowrap">
                Looking for Work?
              </ButtonDefault>
              <ButtonDefault className="max-lg:text-[13px] max-md:w-full whitespace-nowrap">
                Looking for Hire?
              </ButtonDefault>
            </div>
          </div>
          <div className="w-[55%] max-lg:w-[49%]  max-md:w-full max-md:order-1 flex flex-col items-end">
            <Image
              src={bannerShape1}
              alt=""
              className="w-[85%]  rounded-tl-[30%] rounded-bl-[30%]  object-cover max-md:w-full"
            />
            <div className="relative  w-full top-[-50px]  flex justify-end right-[15px] max-sm:top-[-85px] after:absolute after:border-r-[1px] after:w-[60%] after:h-full after:border-primary-color after:-right-[15px] after:border-b-[1px] after:-bottom-[15px] after:rounded-ee-[138px] max-md:after:rounded-ee-[50%]">
              <Image src={bannerShape2} alt="" className="w-3/5 max-md:w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
