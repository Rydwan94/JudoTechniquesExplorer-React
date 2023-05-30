import "../styles/History.css";

import jigoro from "../img/jigoro-kano.png";
import judoOlympics from "../img/judoOlympics.png";
import modernJudo from "../img/modernJudo.png";
import judoHistory from "../img/judoHistory.gif";

const History = () => {
  return (
    <div className="historyContainer">
      <h1 className="historyTitle">
        <p>Judo</p>
        <img src={judoHistory} alt="" />
      </h1>

      <article className="historyCard">
        <img src={jigoro} alt="Founding of Judo" />
        <div>
          <h2>The Founding of Judo</h2>
          <p>
            In 1882, Dr. Jigoro Kano (The Father of Judo) made a comprehensive
            study of the ancient self-defence forms and integrated them into one
            sport: Judo. At the time, Kano was a student at the Tokyo Imperial
            University. He sought to create a discipline that combined the most
            effective elements of traditional jujitsu, while removing the more
            dangerous techniques. Thus, Judo was born, centering around the
            principles of flexibility, leverage, and balance.
          </p>
        </div>
      </article>

      <article className="historyCard">
        <img src={judoOlympics} alt="Judo in the Olympics" />
        <div>
          <h2>Judo in the Olympics</h2>
          <p>
            Judo became an official event in the Olympic Games of Tokyo in 1964,
            and thus became an internationally recognized sport. The Olympic
            committee was impressed by the discipline, skill and philosophy
            embodied in the practice of Judo. Since then, Judo has been a part
            of every summer Olympics, with categories for both men and women.
            The sport continues to gain popularity and recognition on the global
            stage, embodying the Olympic values of friendship, respect, and
            excellence.
          </p>
        </div>
      </article>

      <article className="historyCard">
        <img src={modernJudo} alt="Modern Judo" />
        <div>
          <h2>Modern Judo</h2>
          <p>
            Today, judo is practiced around the world and has evolved into one
            of the most popular martial arts. Its techniques are used in various
            fields, from sports to law enforcement. Modern Judo techniques
            encompass not only throws and ground fighting, but also joint locks
            and chokes. It is considered as much a physical exercise as it is a
            mental one, emphasizing the development of discipline, respect and
            moral character. Beyond the competitive sport and self-defense
            aspects, Judo is also seen as a way of life, promoting personal
            growth, health, and discipline.
          </p>
        </div>
      </article>
    </div>
  );
};

export default History;
