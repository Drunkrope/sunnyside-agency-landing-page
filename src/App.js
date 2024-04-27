import "./App.css";
import Footer from "./components/Footer/Footer.js";

import { ReactComponent as Logo } from "assets/images/logo.svg";

import transform from "./assets/images/mobile/image-transform.jpg";
import transformDesktop from "./assets/images/desktop/image-transform.jpg";
import standOut from "./assets/images/mobile/image-stand-out.jpg";
import standOutDesktop from "./assets/images/desktop/image-stand-out.jpg";

import graphicDesign from "./assets/images/mobile/image-graphic-design.jpg";
import graphicDesignDesktop from "./assets/images/desktop/image-graphic-design.jpg";
import photography from "./assets/images/mobile/image-photography.jpg";
import photographyDesktop from "./assets/images/desktop/image-photography.jpg";

import emily from "./assets/images/image-emily.jpg";
import thomas from "./assets/images/image-thomas.jpg";
import jennie from "./assets/images/image-jennie.jpg";

import milkBottles from "./assets/images/mobile/image-gallery-milkbottles.jpg";
import milkBottlesDesktop from "./assets/images/desktop/image-gallery-milkbottles.jpg";
import orange from "./assets/images/mobile/image-gallery-orange.jpg";
import orangeDesktop from "./assets/images/desktop/image-gallery-orange.jpg";
import cone from "./assets/images/mobile/image-gallery-cone.jpg";
import coneDesktop from "./assets/images/desktop/image-gallery-cone.jpg";
import sugarCube from "./assets/images/mobile/image-gallery-sugar-cubes.jpg";
import sugarCubeDesktop from "./assets/images/desktop/image-gallery-sugar-cubes.jpg";

import React, { useState, useEffect, useRef } from "react";

function App() {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  const handleResize = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    handleResize(); // Call the function once to get the initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>About Services Projects Contact</header>
      <main>
        We are creatives
        <Logo />
        <br />
        <section>
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center text-center">
              <h2>Transform your brand</h2>
              <p>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <a href="#top">Learn more</a>
            </div>
            <div>
              <img src={transform} alt="egg" className="w-full" />
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-2">
            <div>
              <img src={standOut} alt="red glass" className="w-full" />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <h2>Stand out to the right audience</h2>
              <p>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <a href="#top">Learn more</a>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-2">
            <div className="text-dark-desaturated-cyan text-center">
              <img src={graphicDesign} alt="cherry" className="w-full" />
              <h2>Graphic design</h2>
              <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
            <div className="text-dark-blue text-center">
              <img src={photography} alt="orange" className="w-full" />
              <h2>Photography</h2>
              <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 container mx-auto">
          <h2 className="text-center">Client testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="text-center">
              <img src={emily} alt="Emily R" className="mx-auto rounded-full" />
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <h3>Emily R.</h3>
              <h4>Marketing Director </h4>
            </div>
            <div className="text-center">
              <img
                src={thomas}
                alt="Thomas S"
                className="mx-auto rounded-full"
              />
              <p>
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
              <h3>Thomas S.</h3>
              <h4>Chief Operating Officer</h4>
            </div>
            <div className="text-center">
              <img
                src={jennie}
                alt="Jennie F"
                className="mx-auto rounded-full"
              />
              <p>
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <h3>Jennie F.</h3>
              <h4>Business Owner</h4>
            </div>
          </div>
        </section>
        <div className="bg-soft-red p-3"></div>
        <div className="p-3 bg-new-yellow"></div>
        <div className="p-3 bg-dark-desaturated-cyan"></div>
        <div className="p-3 bg-dark-blue"></div>
        <div className="p-3 bg-dark-moderate-cyan"></div>
        <div className="p-3 bg-very-dark-desaturated-blue"></div>
        <div className="p-3 bg-very-dark-grayish-blue"></div>
        <div className="p-3 bg-dark-grayish-blue"></div>
        <div className="p-3 bg-grayish-blue"></div>
        <section>
          <div
            className="grid grid-cols-2 md:grid-cols-4 g-0"
            ref={containerRef}
          >
            <img
              src={containerWidth <= 768 ? milkBottles : milkBottlesDesktop}
              alt="Milk Bottles"
              className="w-full"
            />
            <img
              src={containerWidth <= 768 ? orange : orangeDesktop}
              alt="Orange"
              className="w-full"
            />
            <img
              src={containerWidth <= 768 ? cone : coneDesktop}
              alt="Cone"
              className="w-full"
            />
            <img
              src={containerWidth <= 768 ? sugarCube : sugarCubeDesktop}
              alt="Sugar Cube"
              className="w-full"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
