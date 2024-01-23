"use client";
import { IconButton } from "@material-tailwind/react";
import React from "react";
import { twMerge } from "tailwind-merge";

function SliderButton({
  onClick,
  className,
}: {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <IconButton
      placeholder={""}
      variant="text"
      color="white"
      size="lg"
      onClick={onClick}
      className={twMerge("border border-primary-color rounded-full", className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 42 42"
        fill="none"
      >
        <g clip-path="url(#clip0_864_35636)">
          <path
            d="M30.6348 10.867C30.3054 11.1402 30.2089 11.4536 30.3214 11.8474C30.3777 12.0402 31.4304 13.1492 34.3152 16.0501L38.2366 19.9956L19.6339 20.0358C5.29018 20.0679 0.991076 20.1001 0.862505 20.1724C0.452684 20.4054 0.283934 21.1608 0.557148 21.5465C0.870541 21.9965 -0.447317 21.9643 19.7304 21.9643H38.317L34.3313 25.9581C31.792 28.5054 30.3214 30.0322 30.2893 30.1688C30.225 30.4581 30.3696 30.9081 30.5946 31.117C30.8438 31.3581 31.35 31.4224 31.6554 31.2617C31.7839 31.1893 34.0661 28.9554 36.7339 26.2876L41.5714 21.442V21.0001V20.5581L36.6375 15.6242L31.7036 10.6902L31.3179 10.6581C30.9723 10.626 30.892 10.6501 30.6348 10.867Z"
            fill="#1F1233"
          />
        </g>
        <defs>
          <clipPath id="clip0_864_35636">
            <rect
              width="41.1429"
              height="41.1429"
              fill="white"
              transform="translate(0.428574 0.428589)"
            />
          </clipPath>
        </defs>
      </svg>
    </IconButton>
  );
}

export default SliderButton;
