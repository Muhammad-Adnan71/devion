"use client";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import ButtonDefault from "@components/buttons/button";

function VideoSection() {
  const [isVideoPlay, setIsVideoPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsVideoPlay(true);
    } else {
      videoRef?.current?.pause();
      setIsVideoPlay(false);
    }
  };
  return (
    <section className="pb-16 pt-28 max-lg:pt-16 max-sm:pt-12 max-sm:pb-6 bg-white">
      <div className="container m-auto flex gap-10 max-md:flex-col justify-center items-center">
        <div className="w-[48%] max-lg:w-[55%] max-md:w-full ">
          <div className="w-full h-full relative after:absolute after:border-r-[1px] max-sm:after:border-r-[2px] after:border-t-[1px] after:w-full max-md:after:w-[95%] after:h-[90%]  max-md:after:h-[85%] after:border-secondary-text-color after:-right-[15px] max-sm:after:-right-[10px] after:border-b-[1px] max-sm:after:border-b-[2px] after:-bottom-[15px] max-sm:after:-bottom-[10px] after:rounded-ee-[20px] after:rounded-t-[80px] after:z-[1] after:rounded-b-[10px]">
            <video
              ref={videoRef}
              className="relative aspect-square z-10 w-full object-cover rounded-[150px_150px_20px_20px]"
              width="100%"
              height="100%"
            >
              <source src="/dental-video.mp4" type="video/mp4" />
            </video>
            <ButtonDefault
              onClick={handlePlayVideo}
              buttonType="secondary"
              className="!absolute  bottom-[30px] max-sm:bottom-[20px] w-12 h-12 max-sm:w-10 max-sm:h-10 right-[30px] max-sm:right-[20px] z-20 rounded-[50%] !p-0 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={isVideoPlay ? faPause : faPlay}
                className={`relative ${
                  isVideoPlay ? "left-0" : "left-[2px]"
                } text-[white] text-[22px]`}
              />
            </ButtonDefault>
          </div>
        </div>
        <div className="w-[52%] max-lg:w-[45%] max-md:w-full">
          <p className="text-primary-text-color text-[28px] max-lg:text-[22px] max-sm:text-[20px] mb-5 max-sm:mb-2 font-medium max-md:font-[300]">
            Temping and Hiring. We do it better! Its time to try something NEW
            that WORKS!
          </p>
          <p className="text-secondary-text-color max-lg:text-[14px] max-md:font-[300]">
            This 90-second video will show how we’re different.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
