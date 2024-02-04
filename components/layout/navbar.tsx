"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ButtonDefault from "@components/buttons/button";
import Image from "next/image";
import profile from "@public/profile.png";
import menu from "@public/Menu.svg";
import logo from "@public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import facebook from "@public/facebook.svg";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import youtube from "@public/youtube.svg";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const openDrawer = () => setIsOpenDrawer(true);
  const closeDrawer = () => setIsOpenDrawer(false);
  // console.log(isopenDrawer);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  useEffect(() => {
    if (isOpenDrawer) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "initial";
    }
  }, [isOpenDrawer]);

  return (
    <>
      <nav className=" max-md:hidden flex items-center justify-center w-fit gap-8">
        <ul className="flex items-center justify-center w-fit gap-10">
          <li>
            <Link
              href={""}
              className="text-[15px] max-lg:text-[13px] font-semibold underline-custom"
            >
              Professionals
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="lg:text-[15px] text-[13px] font-semibold underline-custom "
            >
              Dental Practices
            </Link>
          </li>
        </ul>
        <ul className="flex items-center justify-center w-fit gap-4">
          <li>
            <ButtonDefault
              ripple={false}
              buttonType="primary-outline"
              className="!text-primary-text-color px-3 py-[6px] text-[12px] "
            >
              Login
            </ButtonDefault>
          </li>
          <li>
            <ButtonDefault
              buttonType="primary"
              className="p-2 !shadow-none hover:!shadow-none rounded-lg"
            >
              <Image
                src={profile}
                alt="profile"
                className="w-[16px] h-[16px]"
              />
            </ButtonDefault>
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <ButtonDefault
          buttonType="primary"
          onClick={openDrawer}
          className="p-2 !shadow-none bg-[transparent] hover:!shadow-none rounded-lg"
        >
          <Image src={menu} alt="profile" className="w-[35px] h-[35px]" />
        </ButtonDefault>
      </div>
      {/* <Drawer
        placeholder=""
        placement="right"
        open={isopenDrawer}
        onClose={closeDrawer}
        className="max-md:!max-w-[768px] "
      >
        <div className="mb-6 flex items-center justify-between">
          <IconButton
            placeholder=""
            variant="text"
            color="blue-gray"
            onClick={closeDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
      </Drawer> */}
      <div
        className={`md:hidden fixed top-0 z-[9999] transition-all ease-in-out duration-500 w-full h-svh bg-[#1F1233] ${
          isOpenDrawer ? "right-0" : "-right-full"
        }`}
      >
        <div className="w-4/5 flex h-full flex-col justify-between max-sm:w-[90%] mx-auto">
          <div>
            <div className="w-full flex justify-between items-center py-3">
              <div>
                <Link href={"/"}>
                  <Image
                    src={logo}
                    alt="logo"
                    className="max-w-[160px] invert-[1] brightness-0 max-sm:max-w-[130px]"
                  />
                </Link>
              </div>

              <FontAwesomeIcon
                onClick={closeDrawer}
                icon={faX}
                className="w-5 h-5 p-2 text-white cursor-pointer"
              />
            </div>
            <div>
              <div className="border-b-[1px] py-5 border-[#7A6899]">
                <Link
                  href="/"
                  className="text-white max-sm:text-[24px]  sm:text-[30px] font-[500]"
                >
                  Professionals
                </Link>
              </div>
              <div className="border-b-[1px] py-5 border-[#7A6899]">
                <Link
                  href="/"
                  className="text-white max-sm:text-[24px]  sm:text-[30px] font-[500]"
                >
                  Dental Practices
                </Link>
              </div>
              <div className="pt-5">
                <Link
                  href="/"
                  className="text-white max-sm:text-[24px]  sm:text-[30px] font-[500]"
                >
                  Login / Register
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="flex pl-1 pb-10 gap-x-5 items-center">
              <Link href="/">
                <Image
                  className="w-[12px] h-[24px] mx-auto"
                  src={facebook}
                  alt="facebook icon devion"
                />
              </Link>
              <Link href="/">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="w-[24px] pt-[6px] h-[24px] m-auto text-white cursor-pointer"
                />
              </Link>
              <Link href="/">
                <Image
                  src={youtube}
                  alt="youtube icon devion"
                  className="w-[20px] h-[13px] "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
