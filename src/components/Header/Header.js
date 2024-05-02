import { useState, useEffect } from "react";

import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as Arrow } from "assets/images/icon-arrow-down.svg";
import { ReactComponent as Hamburger } from "assets/images//icon-hamburger.svg";

import headerImage from "assets/images/mobile/image-header.jpg";
import headerImageDesktop from "assets/images/desktop/image-header.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="relative">
      <picture>
        <source media="(min-width:768px)" srcSet={headerImageDesktop} />
        <img src={headerImage} alt="header" className="w-full" />
      </picture>
      <div className="absolute top-0 w-full">
        <nav className="flex w-full justify-between py-10 px-6 relative">
          <Logo />
          <Hamburger onClick={toggleMenu} className="md:hidden" />

          {(isOpen || windowWidth > 768) && (
            <div className="absolute md:static left-0 top-20 z-10 w-full md:w-auto px-6">
              <div className="w-0 h-0 ml-auto md:hidden border-r-white border-r-8 border-b-white border-b-8 border-l-transparent border-l-8 border-t-transparent border-t-8"></div>
              <ul className="bg-white md:bg-transparent md:flex md:justify-end font-semibold font-Barlow text-lg text-dark-grayish-blue md:text-white pt-12 pb-14 md:p-0 text-center ">
                <li className="mb-7 md:me-10">
                  <a href="#top">About</a>
                </li>
                <li className="mb-7 md:me-10">
                  <a href="#top">Services</a>
                </li>
                <li className="mb-9 md:me-10">
                  <a href="#top">Projects</a>
                </li>
                <li className="md:me-10">
                  <a
                    href="#top"
                    className="bg-new-yellow md:bg-white hover:bg-opacity-20 uppercase font-Fraunces text-very-dark-desaturated-blue hover:text-white font-bold py-3 px-8 rounded-full"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
      <div className="absolute left-1/2 top-1/2 md:top-1/3 -translate-y-1/2 -translate-x-1/2 w-full">
        <h1 className="text-center text-white tracking-super text-4xl md:text-6xl md:w-full font-Fraunces font-extrabold uppercase my-10 md:my-32">
          We are creatives
        </h1>

        <Arrow className="mx-auto" />
      </div>
    </header>
  );
};

export default Header;
