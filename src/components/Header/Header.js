import { useState } from "react";

import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as Arrow } from "assets/images/icon-arrow-down.svg";
import { ReactComponent as Hamburger } from "assets/images//icon-hamburger.svg";

import headerImage from "assets/images/mobile/image-header.jpg";
import headerImageDesktop from "assets/images/desktop/image-header.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative">
      <picture>
        <source media="(min-width:768px)" srcSet={headerImageDesktop} />
        <img src={headerImage} alt="header" className="w-full" />
      </picture>
      <div className="absolute top-0 w-full">
        <nav className="flex w-full justify-between py-10 px-6 relative">
          <Logo />
          <Hamburger onClick={toggleMenu} />

          {isOpen && (
            <div className="absolute left-0 top-20 z-10 w-full  px-6">
              <div className="w-0 h-0 ml-auto border-r-white border-r-8 border-b-white border-b-8 border-l-transparent border-l-8 border-t-transparent border-t-8"></div>
              <ul className="bg-white font-semibold font-Barlow text-lg text-dark-grayish-blue pt-12 pb-14 text-center ">
                <li className="mb-7">
                  <a href="#top">About</a>
                </li>
                <li className="mb-7">
                  <a href="#top">Services</a>
                </li>
                <li className="mb-7">
                  <a href="#top">Projects</a>
                </li>
                <li className="mt-9">
                  <a
                    href="#top"
                    className="bg-new-yellow uppercase font-Fraunces text-very-dark-desaturated-blue font-bold py-3 px-8 rounded-full"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <h1 className="text-center text-white tracking-super text-4xl font-Fraunces font-extrabold uppercase my-10">
          We are creatives
        </h1>

        <Arrow className="mx-auto" />
      </div>
    </header>
  );
};

export default Header;
