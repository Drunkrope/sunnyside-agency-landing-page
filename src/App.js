import "./App.css";
import Hearder from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

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

function App() {
  return (
    <>
      <Hearder />

      <main>
        <section>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="basis-6/12 flex flex-col justify-center items-center text-center md:text-left px-6 py-16">
              <h2 className="font-Fraunces text-very-dark-desaturated-blue font-bold text-4xl">
                Transform your brand
              </h2>
              <p className="my-7 font-Barlow text-lg text-dark-grayish-blue">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>

              <a
                href="#top"
                className="font-Fraunces uppercase text-very-dark-desaturated-blue w-full text-center md:text-left font-bold text-lg relative after:content-[''] after:pb-3 after:bg-new-yellow after:rounded-full after:absolute after:w-32 after:-translate-x-1/2 after:left-1/2 after:bottom-0 after:opacity-20 "
              >
                Learn more
              </a>
            </div>
            <div className="basis-6/12">
              <picture>
                <source media="(min-width:768px)" srcSet={transformDesktop} />
                <img src={transform} alt="egg" className="w-full" />
              </picture>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col md:flex-row">
            <div className="basis-6/12">
              <picture>
                <source media="(min-width:768px)" srcSet={standOutDesktop} />
                <img src={standOut} alt="red glass" className="w-full" />
              </picture>
            </div>
            <div className="basis-6/12 flex flex-col justify-center items-center text-center md:text-left px-6 py-16">
              <h2 className="font-Fraunces text-very-dark-desaturated-blue font-bold text-4xl">
                Stand out to the right audience
              </h2>
              <p className="my-7 font-Barlow text-lg font-semibold text-dark-grayish-blue">
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>

              <a
                href="#top"
                className="font-Fraunces uppercase text-very-dark-desaturated-blue w-full text-center md:text-left font-bold text-lg relative after:content-[''] after:pb-3 after:bg-soft-red after:rounded-full after:absolute after:w-32 after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:opacity-20 "
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-dark-desaturated-cyan text-center relative">
              <picture>
                <source
                  media="(min-width:768px)"
                  srcSet={graphicDesignDesktop}
                />
                <img src={graphicDesign} alt="Cherry" className="w-full" />
              </picture>
              <div className="absolute -translate-x-1/2 w-full bottom-14 left-2/4">
                <h2 className="text-3xl font-Fraunces font-bold mb-8">
                  Graphic design
                </h2>
                <p className="text-md font-semibold">
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients’
                  attention.
                </p>
              </div>
            </div>
            <div className="text-dark-blue text-center relative">
              <picture>
                <source media="(min-width:768px)" srcSet={photographyDesktop} />
                <img src={photography} alt="Orange" className="w-full" />
              </picture>
              <div className="absolute -translate-x-1/2 w-full bottom-14 left-2/4">
                <h2 className="text-3xl font-Fraunces font-bold mb-8">
                  Photography
                </h2>
                <p className="text-md font-semibold">
                  Increase your credibility by getting the most stunning,
                  high-quality photos that improve your business image.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Client Testimonials */}
        <section className="py-20 container mx-auto">
          <h2 className="text-center text-lg uppercase font-Fraunces text-grayish-blue font-bold tracking-super">
            Client testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="text-center mt-16">
              <img
                src={emily}
                alt="Emily R"
                className="mx-auto rounded-full w-3/12"
              />
              <p className="my-12 font-Barlow text-lg mx-7 text-dark-grayish-blue font-semibold">
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <h3 className="font-Fraunces text-2xl text-very-dark-desaturated-blue font-extrabold">
                Emily R.
              </h3>
              <h4 className="font-Barlow text-lg text-grayish-blue font-semibold">
                Marketing Director{" "}
              </h4>
            </div>
            <div className="text-center mt-16">
              <img
                src={thomas}
                alt="Thomas S"
                className="mx-auto rounded-full w-3/12"
              />
              <p className="my-12 font-Barlow text-lg mx-7 text-dark-grayish-blue font-semibold">
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
              <h3 className="font-Fraunces text-2xl text-very-dark-desaturated-blue font-extrabold">
                Thomas S.
              </h3>
              <h4 className="font-Barlow text-lg text-grayish-blue font-semibold">
                Chief Operating Officer
              </h4>
            </div>
            <div className="text-center mt-16">
              <img
                src={jennie}
                alt="Jennie F"
                className="mx-auto rounded-full w-3/12"
              />
              <p className="my-12 font-Barlow text-lg mx-7 text-dark-grayish-blue font-semibold">
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <h3 className="font-Fraunces text-2xl text-very-dark-desaturated-blue font-extrabold">
                Jennie F.
              </h3>
              <h4 className="font-Barlow text-lg text-grayish-blue font-semibold">
                Business Owner
              </h4>
            </div>
          </div>
        </section>

        <div className="p-3 bg-soft-red"></div>
        <div className="p-3 bg-new-yellow"></div>
        <div className="p-3 bg-dark-desaturated-cyan"></div>
        <div className="p-3 bg-dark-blue"></div>
        <div className="p-3 bg-dark-moderate-cyan"></div>
        <div className="p-3 bg-moderate-cyan"></div>
        <div className="p-3 bg-very-dark-desaturated-blue"></div>
        <div className="p-3 bg-very-dark-grayish-blue"></div>
        <div className="p-3 bg-dark-grayish-blue"></div>
        <div className="p-3 bg-grayish-blue"></div>
        {/* Image Gallary */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 g-0">
            <picture>
              <source media="(min-width:768px)" srcSet={milkBottlesDesktop} />
              <img src={milkBottles} alt="Milkbottles" className="w-full" />
            </picture>
            <picture>
              <source media="(min-width:768px)" srcSet={orangeDesktop} />
              <img src={orange} alt="Orange" className="w-full" />
            </picture>
            <picture>
              <source media="(min-width:768px)" srcSet={coneDesktop} />
              <img src={cone} alt="Cone" className="w-full" />
            </picture>
            <picture>
              <source media="(min-width:768px)" srcSet={sugarCubeDesktop} />
              <img src={sugarCube} alt="Sugar Cube" className="w-full" />
            </picture>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
