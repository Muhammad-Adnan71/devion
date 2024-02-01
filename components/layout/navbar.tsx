"use client";
import React from "react";
import Link from "next/link";
import ButtonDefault from "@components/buttons/button";
import Image from "next/image";
import profile from "@public/profile.png";
import menu from "@public/menu.png";

function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

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
          className="p-2 !shadow-none bg-[transparent] hover:!shadow-none rounded-lg"
        >
          <Image src={menu} alt="profile" className="w-[35px] h-[35px]" />
        </ButtonDefault>
      </div>
    </>
  );
}

export default Navbar;
