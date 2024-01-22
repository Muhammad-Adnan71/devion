import React from "react";
import VideoThumbnail from "@public/videoThumbnail.png";
import Image from "next/image";

function VideoSection() {
  return (
    <section className="pb-16 pt-28 bg-white">
      <div className="container m-auto flex gap-16 justify-center items-center">
        <div className="w-[45%]">
          <Image src={VideoThumbnail} alt="" className="w-full" />
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
