import "./App.css";
import Footer from "./components/Footer/Footer.js";

import milkBottles from "./assets/images/mobile/image-gallery-milkbottles.jpg";
import orange from "./assets/images/mobile/image-gallery-orange.jpg";
import cone from "./assets/images/mobile/image-gallery-cone.jpg";
import sugarCube from "./assets/images/mobile/image-gallery-sugar-cubes.jpg";

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
        <section>
          <h2>Client testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div>
              <img src="" alt="" />
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <h3>Emily R.</h3>
              <h4>Marketing Director </h4>
            </div>
            <div>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
              Thomas S. Chief Operating Officer
            </div>
            <div>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended! Jennie F. Business
              Owner
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 g-0">
            <img src={milkBottles} alt="milk bottles" className="w-full" />
            <img src={orange} alt="orange" className="w-full" />
            <img src={cone} alt="cone" className="w-full" />
            <img src={sugarCube} alt="sugar cube" className="w-full" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
