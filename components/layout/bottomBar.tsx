import Link from "next/link";
import React from "react";

function BottomBar() {
  return (
    <div className=" container m-auto mt-16 flex justify-center max-md:justify-end items-center relative ">
      <p className="text-white text-[12px] absolute max-sm:text-[11px] left-0 top-[8px] ">
        © 2024 Dental Jobs
      </p>
      <ul className="flex items-center justify-center   ">
        <li>
          <Link
            href=""
            className="text-white text-[12px] max-sm:text-[11px] px-3 max-sm:px-1 border-r border-l-white"
          >
            Terms and Conditions
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="text-white text-[12px] max-sm:text-[11px]  px-3 max-sm:px-1"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BottomBar;
