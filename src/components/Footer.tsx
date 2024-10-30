import Image from "next/image";

import Logo from "../app/images/Artoa-Logo.png";
import ArrowIcon from "../app/images/icon-arrow.png";

import SocIcon1 from "../app/images/soc-icon-1.png";
import SocIcon2 from "../app/images/soc-icon-2.png";
import SocIcon3 from "../app/images/soc-icon-3.png";
import SocIcon4 from "../app/images/soc-icon-4.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-contant">
          <div className="footer-about-cont">
            <div className="logo">
              <Image src={Logo} alt="logo" />
              <p>
                Instantly transform any space with our-powered art generator.
                Connect with artists globally for unique creations. Legal,
                creative, and community-centric. ArtOa.io — Where Walls Speak.
              </p>
            </div>
          </div>

          <div className="footer-navigate-container">
            <div className="footer-menu">
              <h1>About ArtOa</h1>
              <ul>
                <li>Projects</li>
                <li>Portfolios</li>
                <li>Service concept</li>
                <li>Contact</li>
                <li>Career</li>
                <li>FAQ&lsquo; s</li>
              </ul>
            </div>

            <div className="footer-other">
              <h1>Other</h1>

              <ul>
                <li>Service | Corrections</li>
                <li style={{ color: "rgba(252, 163, 17, 1)" }}>Our Team</li>
                <li>AI/AR Order Generators</li>
              </ul>
            </div>

            <div className="footer-subscribe">
              <p>
                Be the first to hear about new arrivals, promotions, style
                inspiration and exclusive sneak peeks.
              </p>

              <div className="footer-subscribe-input-cont">
                <input type="email" placeholder="you emil" />
                <div className="footer-subscribe-icon">
                  {/* {'>'} */}

                  <Image src={ArrowIcon} alt="Arrow Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-soc-icon">
          <ul>
            <li>
              <Image src={SocIcon1} alt="" />
            </li>
            <li>
              <Image src={SocIcon2} alt="" />
            </li>
            <li>
              <Image src={SocIcon3} alt="" />
            </li>
            <li>
              <Image src={SocIcon4} alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-endline">
        <hr />

        <div className="footer-endline-container">
          <ul>
            <li>Site notice</li>
            <li>Data privacy</li>
            <li>Imprint</li>
          </ul>
          <div className="creator">
            CREATED BY
            <samp> Doer </samp>
          </div>
        </div>
      </div>
    </footer>
  );
}
