import { useNavigate } from "react-router";

import judoTechnique from "../img/judotechnique.png";
import judoTechnique2 from "../img/judoTechnique2.png";
import judoPhilosophy from "../img/judoPhilosophy.png";

import "../styles/Home.css";

import brandIcon from "../img/brandIcon.png";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateButton = (path) => {
    navigate(path);
  };

  return (
    <div className="home">
      <header>
        <div>
        <img src={brandIcon} alt="symbol" />
        <h1>
          Welcome to TheJudoPath!
        </h1>
        </div>

        <p>
          Discover the world of Judo with TheJudoPath.
        </p>
      </header>
      <section>
        <img src={judoTechnique} alt="Various judo techniques" />
        <h2>Explore Judo Techniques</h2>
        <p>
          Explore the variety of judo techniques, from throws, groundworks to
          submission techniques. Understand the principles behind each
          technique, and how they contribute to the philosophy of Judo.
        </p>
        <button onClick={() => handleNavigateButton("/techniques")}>
          Techniques
        </button>
      </section>
      <section>
        <img src={judoTechnique2} alt="Specific training exercises" />
        <h2>Specific Training Exercises</h2>
        <p>
          A well-rounded judo training program involves a variety of exercises.
          These exercises may focus on developing strength, endurance, speed,
          agility, and technique. Some of these include:
        </p>
        <ul>
          <li>
            <strong>Uchikomi:</strong> This drill focuses on repetition of
            throwing techniques without the final throw, to improve speed and
            precision.
          </li>
          <li>
            <strong>Nagekomi:</strong> Here, you complete the throw. This helps
            you learn how to control your body and your opponent's body during
            the throw.
          </li>
          <li>
            <strong>Randori:</strong> This is free practice where techniques can
            be practiced in a more realistic setting.
          </li>
          <li>
            <strong>Kata:</strong> These are pre-arranged patterns of attack and
            defense, demonstrating the principles and applications of various
            techniques.
          </li>
        </ul>
      </section>
      <section>
        <img src={judoPhilosophy} alt="The philosophy of Judo" />

        <h2>The Philosophy Behind the Techniques</h2>
        <p>
          Each Judo technique is not only about physical execution but also
          about understanding the philosophy behind it. Learn how the principles
          of respect, discipline, and continuous improvement are embodied in
          each technique.
        </p>
        <button onClick={() => handleNavigateButton("/philosophy")}>
          Find Your Path
        </button>
      </section>
    </div>
  );
};

export default Home;
