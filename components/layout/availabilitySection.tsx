import ButtonDefault from "@components/buttons/button";
import Image from "next/image";
import React from "react";
import shape1 from "@public/shape1.png";
import shape2 from "@public/shape2.png";
import vector1 from "@public/availability-vector-1.png";
import vector2 from "@public/availability-vector-2.png";

function AvailabilitySection() {
  return (
    <section className="py-8 max-sm:py-6">
      <div className="container m-auto bg-[#F3EBFF] rounded-[36px] max-sm:rounded-[16px] py-24 max-sm:py-20 relative overflow-hidden">
        <Image
          src={shape1}
          alt=""
          className="absolute right-0 bottom-0 max-sm:bottom-[-5px] max-w-[300px] max-xl:max-w-[250px] max-lg:max-w-[220px] max-md:max-w-[150px] max-sm:max-w-[100px] z-[1] select-none"
        />
        <Image
          src={shape2}
          alt=""
          className="absolute top-0 left-0 max-sm:left-[-5px]  max-w-[250px] max-xl:max-w-[200px] max-lg:max-w-[170px] max-md:max-w-[120px] max-sm:max-w-[80px] z-[1] select-none"
        />
        <Image
          src={vector1}
          alt=""
          className="absolute top-0 max-md:hidden left-0 w-[50%] select-none "
        />
        <Image
          src={vector2}
          alt=""
          className="absolute bottom-0 max-md:hidden right-10 w-[25%] select-none"
        />
        <div>
          <h5 className="text-primary-text-color text-[36px] max-lg:text-[24px] max-sm:text-[15px] max-w-[400px]  sm:max-lg:max-w-[350px] max-sm:w-3/4 font-bold   m-auto leading-[1.4]">
            Work with who you want, when you want. Use Dental Jobs anytime,
            anywhere, and on any device.
          </h5>
          <div className="flex justify-center items-center max-sm:flex-col sm:gap-4 max-sm:gap-y-2  mt-10 max-sm:mt-5">
            <ButtonDefault
              buttonType="secondary"
              className="rounded-md max-sm:w-3/4"
            >
              Looking for Work?
            </ButtonDefault>
            <ButtonDefault
              buttonType="secondary"
              className="rounded-md max-sm:w-3/4"
            >
              Looking for Hire?
            </ButtonDefault>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AvailabilitySection;
