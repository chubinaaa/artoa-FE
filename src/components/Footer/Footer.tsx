import Image from "next/image";

import Logo from "../app/images/Artoa-Logo.png";
import ArrowIcon from "../app/images/icon-arrow.png";

import SocIcon1 from "../app/images/soc-icon-1.png";
import SocIcon2 from "../app/images/soc-icon-2.png";
import SocIcon3 from "../app/images/soc-icon-3.png";
import SocIcon4 from "../app/images/soc-icon-4.png";

export default function Footer() {
  return (
    <footer className="flex w-full max-w-screen-2xl items-center justify-between border-b-[0.5px] border-[#454749] bg-[#121212] px-[110px] pt-[53px] text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Image
              src={Logo}
              alt="logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <p className="max-w-sm text-gray-400">
              Instantly transform any space with our-powered art generator.
              Connect with artists globally for unique creations. Legal,
              creative, and community-centric. ArtOa.io — Where Walls Speak.
            </p>
          </div>

          <div className="mt-6 space-y-4 md:mt-0 md:flex md:space-x-8 md:space-y-0">
            {/* Footer Links */}
            <div>
              <h1 className="text-lg font-semibold">About ArtOa</h1>
              <ul className="space-y-1 text-gray-400">
                <li>Projects</li>
                <li>Portfolios</li>
                <li>Service Concept</li>
                <li>Contact</li>
                <li>Career</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div>
              <h1 className="text-lg font-semibold">Other</h1>
              <ul className="space-y-1 text-gray-400">
                <li>Service | Corrections</li>
                <li className="text-yellow-400">Our Team</li>
                <li>AI/AR Order Generators</li>
              </ul>
            </div>

            <div>
              <p className="text-gray-400">
                Be the first to hear about new arrivals, promotions, style
                inspiration, and exclusive sneak peeks.
              </p>
              <div className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-l-md px-4 py-2 text-gray-800 focus:outline-none"
                />
                <button className="rounded-r-md bg-yellow-500 p-2">
                  <Image
                    src={ArrowIcon}
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-gray-700 pt-4">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Image src={SocIcon1} alt="Social Icon 1" width={20} height={20} />
            <Image src={SocIcon2} alt="Social Icon 2" width={20} height={20} />
            <Image src={SocIcon3} alt="Social Icon 3" width={20} height={20} />
            <Image src={SocIcon4} alt="Social Icon 4" width={20} height={20} />
          </div>

          {/* Footer Bottom Links */}
          <div className="flex space-x-4 text-gray-400">
            <a href="#">Site notice</a>
            <a href="#">Data privacy</a>
            <a href="#">Imprint</a>
          </div>

          <div className="text-gray-400">
            CREATED BY <span className="font-bold text-white">Doer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
