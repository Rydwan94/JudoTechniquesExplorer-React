import React from "react";
import "../styles/Philosophy.css";


import judoPhilosophyImg from "../img/judoPhilosophyImg.png";
import sign1 from "../img/sign1.png";
import sign2 from "../img/sign2.png";

const Philosophy = () => {
  return (
    <div className="philosophyContainer">
      <header>
        <section>
          <h2>The Philosophy of Judo</h2>
          <p>
            Judo, meaning "gentle way," is a modern form of Japanese martial art
            whose philosophy is to maximize efficiency with minimal effort. It
            stresses the importance of flexibility in the application of
            technique to respond to different kinds of situations. Judo is not
            only a physical activity but also a way to improve oneself and
            contribute positively to society.
          </p>
        </section>
        <img src={judoPhilosophyImg} alt="Image illustrating Judo" />
      </header>
      <section className="japanSigns">
        <h2>Check what does it mean!</h2>
        <div className="signsContainer">
          <div>
            <img src={sign1} alt="Japan Sign" />
            <div>
              <p>Soft Road</p>
            </div>
          </div>
          <div>
            <img src={sign2} alt="Second Japan sign" />
            <div>
              <p>best use of energy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
