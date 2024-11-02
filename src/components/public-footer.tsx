import { Icons } from "./icons";

// import { ReactComponent as ArtOaLogo } from "../../public/images/ArtOa-Logo.svg";

export function PublicFooter() {
  // TODO: replace me with an actual footer

  return (
    <footer className="flex w-full items-center justify-between border-b-[0.5px] border-border bg-background px-[110px] pt-[53px] text-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Icons.logo />
            {/* <ArtOaLogo /> */}

            <p className="max-w-sm">
              Instantly transform any space with our-powered art generator.
              Connect with artists globally for unique creations. Legal,
              creative, and community-centric. ArtOa.io — Where Walls Speak.
            </p>
          </div>

          <div className="mt-6 space-y-4 md:mt-0 md:flex md:space-x-8 md:space-y-0">
            {/* Footer Links */}
            <div>
              <h1 className="text-lg font-semibold">About ArtOa</h1>
              <ul className="space-y-1 text-foreground">
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
              <ul className="space-y-1 text-foreground">
                <li>Service | Corrections</li>
                <li className="text-yellow-400">Our Team</li>
                <li>AI/AR Order Generators</li>
              </ul>
            </div>

            <div>
              <p className="text-foreground">
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
                  <Icons.arrowDown />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-gray-700 pt-4">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Icons.facebook />
            <Icons.instagram />
            <Icons.youtube />
            <Icons.pinterest />
          </div>

          {/* Footer Bottom Links */}
          <div className="flex space-x-4 text-foreground">
            <a href="#">Site notice</a>
            <a href="#">Data privacy</a>
            <a href="#">Imprint</a>
          </div>

          <div className="text-foreground">
            CREATED BY <span className="font-bold text-white">Doer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
