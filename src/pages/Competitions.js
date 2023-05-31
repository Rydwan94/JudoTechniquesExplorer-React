import { useRef } from "react";
import { Parallax } from "react-parallax";
import "../styles/Competitions.css";

import competitionsImage from "../img/competitionsImg.png";
import competitionsIcon from "../img/competitionsIcon.png";

const Competitions = () => {
  const tournamentsRef = useRef();

  const handleScrollButton = () => {
    tournamentsRef.current.scrollIntoView()
  }

  const upcomingCompetitions = [
    { name: "Judo World Championships 2023", date: "June 10, 2023" },
    { name: "European Judo Championships", date: "July 20, 2023" },
    { name: "Asian Judo Championships", date: "August 15, 2023" },
    { name: "Pan American Judo Championships", date: "September 25, 2023" },
    { name: "Judo Junior World Championships", date: "October 15, 2023" },
  ];

  const competitionsList = upcomingCompetitions.map((item) => (
    <div className="timeLineContent" key={item.name}>
      <h2>{item.date}</h2>
      <p>{item.name}</p>
    </div>
  ));

  return (
    <div className="competitionsContainer">
      <section className="title">
        <h2>Upcoming Judo Competitions</h2>
        <p>
          We are excited to share the schedule for the upcoming Judo
          competitions.These events showcase the skills and spirit of Judo,
          martial art that combines power, strategy, and finesse. Mark your
          calendars and join the excitement!
        </p>
        <button onClick={handleScrollButton}>Check</button>
      </section>
      <Parallax bgImage={competitionsImage} strength={400}>
        <section className="parallaxContainer">
          <div>{/* <button>Competitions</button> */}</div>
        </section>
      </Parallax>
      <section className="upcomingTournaments">
        <img src={competitionsIcon} alt="competitionsIcon" />
        <h2>Join the Excitement!</h2>
        <p>
          At our Judo competitions, you get the chance to witness top athletes
          compete, learn more about this martial art, and connect with fellow
          Judo enthusiasts. Experience the thrill of matches, the determination
          of competitors, and the incredible spirit of the Judo community. Join
          us in the upcoming events:
        </p>
      </section>
      <section ref={tournamentsRef} className="timeLine">
        {competitionsList}
      </section>
    </div>
  );
};

export default Competitions;
