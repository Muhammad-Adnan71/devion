import Image, { StaticImageData } from "next/image";
import React from "react";

function CounterCard({
  image,
  value,
  description,
}: {
  image: StaticImageData;
  value: string;
  description: string;
}) {
  return (
    <div className=" max-md:w-[150px] ">
      <Image
        src={image}
        alt=""
        className="w-7 h-7 max-lg:w-5 max-lg:h-5 max-md:w-7 max-md:h-7 max-sm:mb-4 max-sm:ml-[10px]"
      />
      <h6 className="text-[44px] max-lg:text-[30px] max-sm:text-[20px] max-sm:mb-2 text-white font-bold">
        {value}
      </h6>
      <p className="text-[#EAE7F1] max-lg:text-[14px] max-sm:text-[13px] ">
        {description}
      </p>
    </div>
  );
}

export default CounterCard;
