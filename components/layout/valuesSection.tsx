import React from "react";
import counterImage from "@public/counter-Image.png";
import Image from "next/image";
import CounterCard from "@components/cards/counterCard";
import doctorIcon from "@public/doctor-icon.png";
import buildingIcon from "@public/building-icon.png";
import certifiedDoctorIcon from "@public/dental-professional-icon.png";

function ValuesSection() {
  return (
    <section className="py-8 max-md:mt-32">
      <div className=" relative after:absolute after:top-0 after:left-0 after:bg-primary-color after:w-1/2 after:h-full after:z-[-1]  md:after:rounded-ee-[40px] md:after:rounded-e-[40px] max-md:after:rounded-tr-[24px] max-md:after:rounded-br-[0px] max-md:after:w-full max-md:after:rounded-tl-[24px]">
        <div className="container py-16 max-md:pt-0 max-md:pb-8 m-auto flex justify-between max-md:flex-col items-center">
          <div className=" w-[30%] flex flex-col max-md:order-2 max-md:-mt-16 max-md:flex-row max-md:w-full max-md:gap-x-5 justify-between self-stretch">
            <CounterCard
              value="301,672"
              description="Dental positions filled"
              image={doctorIcon}
            />
            <CounterCard
              value="26,665"
              description="Dental offices in network"
              image={buildingIcon}
            />
            <CounterCard
              value="87,342"
              description="Approved and verified dental professionals"
              image={certifiedDoctorIcon}
            />
          </div>
          <div className="w-[65%] max-md:w-[90%] max-md:relative max-md:top-1/2 max-md:-translate-y-1/2  max-md:order-1 ">
            <Image
              className="max-md:w-full max-md:h-auto"
              src={counterImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
