import "./App.css";
import { ReactComponent as Facebook } from "./assets/images/icon-facebook.svg";
import { ReactComponent as Instagram } from "./assets/images/icon-instagram.svg";
import { ReactComponent as Twitter } from "./assets/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "./assets/images/icon-pinterest.svg";

function App() {
  return (
    <>
      <header>About Services Projects Contact</header>
      <main>
        We are creatives <br />
        Transform your brand <br />
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you. <br />
        Learn more <br />
        Stand out to the right audience <br />
        Using a collaborative formula of designers, researchers, photographers,
        videographers, and copywriters, we’ll build and extend your brand in
        digital places. <br />
        Learn more <br />
        Graphic design Great design makes you memorable. We deliver artwork that
        underscores your brand message and captures potential clients’
        attention. <br />
        Photography Increase your credibility by getting the most stunning,
        high-quality photos that improve your business image. <br />
        Client testimonials We put our trust in Sunnyside and they delivered,
        making sure our needs were met and deadlines were always hit. <br />
        Emily R. Marketing Director Sunnyside’s enthusiasm coupled with their
        keen interest in our brand’s success made it a satisfying and enjoyable
        experience. Thomas S. Chief Operating Officer <br />
        Incredible end result! Our sales increased over 400% when we worked with
        Sunnyside. Highly recommended! Jennie F. Business Owner <br />
      </main>

      <footer className="bg-dark-moderate-cyan py-10">
        <div className="text-center">
          <a
            href="#top"
            className="text-3xl text-dark-desaturated-cyan font-semibold"
          >
            sunnyside
          </a>
        </div>

        <div className="flex justify-center mt-8 mb-16">
          <a href="#top" className="mx-3 text-lg text-dark-desaturated-cyan">
            About
          </a>
          <a href="#top" className="mx-3 text-lg text-dark-desaturated-cyan">
            Services
          </a>
          <a href="#top" className="mx-3 text-lg text-dark-desaturated-cyan">
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
          <a
            href="https://github.com/Drunkrope"
            target="_blank"
            rel="noreferrer"
            className="text-green-400"
          >
            Flavio Benitez (DrunkRope)
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
