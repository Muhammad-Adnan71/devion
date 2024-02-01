import React from "react";
import footerLogo from "@public/footer-logo.png";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "@components/socialIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ButtonDefault from "@components/buttons/button";
import BottomBar from "./bottomBar";
import footerVector2 from "@public/footer-vector.png";
import footerVector1 from "@public/footer-vector-2.png";
import footerVector3 from "@public/footerVector3.png";

function Footer() {
  return (
    <div className="">
      <footer className="min-md:bg-footer-shape max-md:bg-mobile-footer-shape bg-[length:100%_100%] pb-3 pt-20 max-md:pt-8 z-10 relative  ">
        <Image
          src={footerVector2}
          className="absolute right-0 bottom-0 max-w-[250px] z-[-1] max-md:max-w-[180px] max-sm:max-w-[130px]"
          alt=""
        />
        <Image
          src={footerVector1}
          className="absolute left-0 bottom-0 max-w-[150px] max-md:hidden max-xl:left-[-3%] "
          alt=""
        />
        <Image
          src={footerVector3}
          className="absolute left-0 bottom-[20%] z-[-1] max-w-[150px] md:hidden  "
          alt=""
        />
        <div className="flex justify-center items-center flex-col mb-5 max-md:mb-0">
          <Image
            src={footerLogo}
            alt=""
            className="max-w-[220px] max-md:max-w-[150px] mb-4"
          />
          <p className="text-white text-center max-w-[250px] max-md:max-w-[50%] text-[18px] max-md:text-[12px]">
            One Washington Mall, Suite 1269 Boston, MA 02108
          </p>
        </div>
        <div className="container m-auto flex justify-center max-lg:flex-wrap max-md:flex-col max-md:items-center items-start mt-16 max-md:mt-10 gap-5 max-lg:gap-8 max-lg:gap-y-5">
          <div className="w-1/4 max-lg:w-[40%] max-md:w-4/5 max-sm:w-[90%] max-md:text-center">
            <h3 className="text-[24px] max-md:text-[18px] text-white capitalize mb-4 max-md:mb-2 block font-semibold max-md:font-extrabold">
              visit
            </h3>
            <ul>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] max-lg:text-[14px] max-md:mb-1 font-[300] mb-3   block"
                >
                  Professional
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] max-lg:text-[14px] font-[300] mb-3 max-md:mb-1 block"
                >
                  Dental Practices
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] max-lg:text-[14px] font-[300] mb-3 max-md:mb-1 block"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <div className="flex justify-start gap-6 mt-8 max-md:hidden">
              <SocialIcon name="linkedin" />
              <SocialIcon name="facebook" />
            </div>
          </div>
          <div className="w-1/4 max-lg:w-[40%] max-md:w-4/5 max-sm:w-[90%] max-md:text-center">
            <h3 className="text-[24px] max-md:text-[18px] text-white capitalize mb-4 max-md:mb-2 block font-semibold max-md:font-extrabold">
              Resources
            </h3>
            <ul>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] max-lg:text-[14px] font-[300] mb-3 max-md:mb-1 block"
                >
                  Dental Temp Agency Resources
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] max-lg:text-[14px] font-[300] mb-3 max-md:mb-1 block"
                >
                  Dental Leadership and Staffing Trends
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] max-lg:text-[14px] font-[300] mb-3 max-md:mb-1 block"
                >
                  Dental Assistant Jobs
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] max-lg:text-[14px] font-[300] mb-3 max-md:mb-1 block"
                >
                  RDH Temp Agency Info
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/4 max-lg:w-[40%] max-md:w-4/5 max-sm:w-[90%] max-md:text-center">
            <h3 className="text-[24px] max-md:text-[18px] text-white capitalize mb-4 max-md:mb-2 block font-semibold max-md:font-extrabold">
              Service
            </h3>
            <ul>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] max-lg:text-[14px] font-[300] mb-3 max-md:mb-1  flex items-center max-md:justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faPhone} className=" w-3" /> Schedule
                  time with service
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] max-lg:text-[14px] font-[300] mb-3 max-md:mb-1 flex max-md:justify-center items-center gap-2"
                >
                  <FontAwesomeIcon icon={faEnvelope} className=" w-3" />{" "}
                  service@dentaljobs.com
                </Link>
              </li>

              <li>
                <p className="text-white text-[14px] max-md:text-center font-medium max-md:font-semibold mt-9 max-md:mt-5 mb-5 max-md:mb-1 max-w-[200px] max-md:max-w-full">
                  Call to schedule a time with sales or services
                </p>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white text-[15px] font-[300] mb-3 max-md:mb-1 flex max-md:justify-center  items-center gap-2"
                >
                  <FontAwesomeIcon icon={faPhone} className=" w-3" /> (844)
                  643-3128
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/4 max-lg:w-[40%] max-md:w-4/5 max-sm:w-[90%] max-md:text-center">
            <h3 className="text-[24px] max-md:text-[18px] text-white capitalize mb-4 max-md:mb-2 block font-semibold max-md:font-extrabold">
              Sales
            </h3>
            <ul>
              <li>
                <Link
                  href={""}
                  className="text-white text-[16px] max-lg:text-[14px] font-[300] mb-3 max-md:mb-1 flex max-md:justify-center items-center gap-2"
                >
                  <FontAwesomeIcon icon={faPhone} className=" w-3" />
                  Schedule time with sales
                </Link>
              </li>
              <li className="min-md:hidden mt-2 max-md:mb-4 flex justify-center gap-x-4">
                <SocialIcon name="linkedin" />
                <SocialIcon name="facebook" />
              </li>
              <li>
                <ButtonDefault
                  fullWidth
                  buttonType="primary-outline"
                  className="text-white text-[11px] max-md:mx-auto py-2 max-w-[200px] max-md:max-w-[300px] rounded-md mb-[10px]"
                >
                  Login
                </ButtonDefault>
              </li>
              <li>
                <ButtonDefault
                  fullWidth
                  buttonType="primary"
                  className="text-primary-text-color max-md:mx-auto text-[11px] py-2 max-w-[200px] max-md:max-w-[300px] rounded-md !shadow-none font-bold"
                >
                  Sign up
                </ButtonDefault>
              </li>
            </ul>
          </div>
        </div>
        <BottomBar />
      </footer>
    </div>
  );
}

export default Footer;
