import "./Footer.css";
import { ReactComponent as Logo } from "assets/images/logo.svg";

import { ReactComponent as Facebook } from "assets/images/icon-facebook.svg";
import { ReactComponent as Instagram } from "assets/images/icon-instagram.svg";
import { ReactComponent as Twitter } from "assets/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "assets/images/icon-pinterest.svg";

function Footer() {
  return (
    <footer className="bg-moderate-cyan py-10">
      <div className="flex justify-center">
        <a href="#top" className="block">
          <Logo />
        </a>
      </div>

      <div className="flex justify-center mt-8 mb-16">
        <a href="#top" className="mx-3 text-lg">
          About
        </a>
        <a href="#top" className="mx-3 text-lg">
          Services
        </a>
        <a href="#top" className="mx-3 text-lg">
          Projects
        </a>
      </div>
      <div className="flex justify-center mb-3">
        <a href="#top" className="mx-3">
          <Facebook />
        </a>
        <a href="#top" className="mx-3">
          <Instagram />
        </a>
        <a href="#top" className="mx-3">
          <Twitter />
        </a>
        <a href="#top" className="mx-3">
          <Pinterest />
        </a>
      </div>
      <div className="text-center text-white">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . <br />
        Coded by{" "}
        <a href="https://github.com/Drunkrope" target="_blank" rel="noreferrer">
          Flavio Benitez (DrunkRope)
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
