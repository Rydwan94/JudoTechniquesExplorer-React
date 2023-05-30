import { Parallax } from "react-parallax";
import "../styles/Competitions.css";

import competitionsImage from "../img/competitionsImg.png";

const Competitions = () => {
  const upcomingCompetitions = [
    { name: "Judo World Championships 2023", date: "June 10, 2023" },
    { name: "European Judo Championships", date: "July 20, 2023" },
    { name: "Asian Judo Championships", date: "August 15, 2023" },
    { name: "Pan American Judo Championships", date: "September 25, 2023" },
    { name: "Judo Junior World Championships", date: "October 15, 2023" },
    // add as many competitions as you need
  ];

  const competitionsList = upcomingCompetitions.map((item) => (
    <li key={item.name}>
      <p>{item.name}</p>
      <em>{item.date}</em>
    </li>
  ));

  return (
    <div className="competitionsContainer">
      <section className="title">
        <h2>Upcoming Judo Competitions</h2>
        <p>
          We are excited to share the schedule for the upcoming Judo competitions. Mark your calendars and join the excitement!
        </p>
      </section>
      <Parallax bgImage={competitionsImage} strength={400} >
        <section className="parallaxContainer">
          <div>
            {/* <button>Competitions</button> */}
          </div>
        </section>
      </Parallax>
      <section className="upcomingTournaments">
        <h2>Join the Excitement!</h2>
        <p>
          At our Judo competitions, you get the chance to witness top athletes compete, learn more about this martial art, and connect with fellow Judo enthusiasts. Join us in the upcoming events:
        </p>
        <ul>{competitionsList}</ul>
      </section>
    </div>
  );
};

export default Competitions;
