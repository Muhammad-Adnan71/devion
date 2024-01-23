"use client";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import ButtonDefault from "@components/buttons/button";

function VideoSection() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlePlayVideo = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsVideoActive(true);
    } else {
      videoRef?.current?.pause();
      setIsVideoActive(false);
    }
  };
  return (
    <section className="pb-16 pt-28 bg-white">
      <div className="container m-auto flex gap-16 justify-center items-center">
        <div className="w-[45%] ">
          <div className="w-full h-full relative after:absolute after:border-r-[1px] after:border-t-[1px] after:w-full after:h-[90%] after:border-[#696868] after:-right-[15px] after:border-b-[1px] after:-bottom-[15px] after:rounded-ee-[20px] after:rounded-t-[80px] after:z-[1] after:rounded-b-[10px]">
            <video
              ref={videoRef}
              className="relative z-10 w-full h-[450px] object-cover rounded-[150px_150px_20px_20px]"
              width="100%"
              height="100%"
            >
              <source src="/dental-video.mp4" type="video/mp4" />
            </video>
            <ButtonDefault
              onClick={handlePlayVideo}
              buttonType="secondary"
              className="!absolute bottom-[30px] w-12 h-12 right-[30px] z-20 rounded-[50%] !p-0 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={isVideoActive ? faPause : faPlay}
                className={`relative ${
                  isVideoActive ? "left-0" : "left-[2px]"
                } text-white w-4`}
              />
            </ButtonDefault>
          </div>
        </div>
        <div className="w-[55%]">
          <p className="text-primary-text-color text-[32px] mb-5">
            Temping and Hiring.We do it better!Its time to try something NEW
            that WORKS!
          </p>
          <p className="text-secondary-text-color">
            This 90-second video will show how we’re different.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
