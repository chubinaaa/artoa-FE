import React from "react";
import Image from "next/image";

import Logo from "../app/images/Artoa-Logo.png";
import LangIco from "../app/images/icon-globe.png";
import ArrowIcon from "../app/images/icon-arrow.png";

export default function Header() {
  return (
    <>
      <header className="flex h-[91px] w-full max-w-screen-2xl items-center justify-between border-b-[0.5px] border-[#454749] bg-[#121212] px-[110px] pt-[53px] text-white">
        <div className="flex h-[51px] w-full max-w-[1700px] justify-between">
          <div className="flex h-[48px] w-[787px] items-end gap-[110px]">
            <Image
              src={Logo}
              className="size-[48px] cursor-pointer"
              alt="Logo"
            />

            <ul className="flex h-[24px] w-[459px] gap-[48px]">
              <li className="font-fira cursor-pointer text-[16px] font-normal leading-[19.2px]">
                Home
              </li>
              <li className="font-fira cursor-pointer text-[16px] font-normal leading-[19.2px]">
                Artists
              </li>
              <li className="font-fira cursor-pointer text-[16px] font-normal leading-[19.2px]">
                Services
              </li>
              <li className="font-fira cursor-pointer text-[16px] font-normal leading-[19.2px]">
                About
              </li>
              <li className="font-fira cursor-pointer text-[16px] font-normal leading-[19.2px]">
                Contact Us
              </li>
            </ul>
          </div>

          <div className="mr-[140px] flex h-[56px] w-[156px] items-center justify-around gap-[32px]">
            <div className="flex space-x-4">
              <button className="bg-[rgba(252, 163, 17, 1)] hover:bg-[rgba(252, 163, 17, 0.8)] rounded-md px-4 py-2 font-semibold text-white">
                Log in
              </button>
              <button className="bg-[rgba(53, 55, 57, 1)] hover:bg-[rgba(252, 163, 17, 1)] rounded-md px-4 py-2 font-semibold text-white">
                Sign Up
              </button>
            </div>
            {/* Language Selector */}
            <div className="flex items-center space-x-2 text-gray-700">
              <Image src={LangIco} alt="lang" width={20} height={20} />
              <span>en</span>
              <Image src={ArrowIcon} alt="icon" width={16} height={16} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
