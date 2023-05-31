import React from 'react';
import '../styles/Philosophy.css';
import judoPhilosophyImg from '../img/judoPhilosophyImg.png';

const Philosophy = () => {
  return (
    <div className='philosophyContainer'>
      <header>
        <section>
          <h2>The Philosophy of Judo</h2>
          <p>Judo, meaning "gentle way," is a modern form of Japanese martial art whose philosophy is to maximize efficiency with minimal effort. It stresses the importance of flexibility in the application of technique to respond to different kinds of situations. Judo is not only a physical activity but also a way to improve oneself and contribute positively to society.</p>
        </section>
        <img src={judoPhilosophyImg} alt="Image illustrating Judo" />
      </header>
      <section className='content'>
        <h3>Key Principles of Judo</h3>
        <ul>
          <li>Seiryoku Zenyo: Maximum Efficiency</li>
          <li>Jita Kyoei: Mutual Benefit and Welfare</li>
          <li>Judo Kata: Forms of Judo Techniques</li>
          <li>Judo Randori: Free Practice</li>
          <li>Judo Shiai: Competitive Matches</li>
        </ul>
      </section>
    </div>
  );
}

export default Philosophy;
