import { Link } from "react-router-dom";

import "../styles/Footer.css";

import footerImg from "../img/footerImg.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const paths = [
  {
    id: 0,
    pathName: "Home",
    path: "/",
  },
  {
    id: 1,
    pathName: "Techniques",
    path: "/techniques",
  },
  {
    id: 2,
    pathName: "History",
    path: "/history",
  },
  {
    id: 3,
    pathName: "Competitions",
    path: "/competitions",
  },
  {
    id: 4,
    pathName: "Philosophy",
    path: "/philosophy",
  },
];

const Footer = () => {
  const scrollToUp = () => {
    window.scrollTo(0, 0);
  };

  const pathMap = paths.map((item) => (
    <Link key={item.id} onClick={scrollToUp} to={item.path}>
      {item.pathName}
    </Link>
  ));

  const currentDate = new Date().getFullYear();

  return (
    <div className="footerContainer">
      <img src={footerImg} alt="" />
      <section className="socialIcons">
        <a href="https://github.com/Rydwan94?tab=repositories">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/%C5%82ukasz-rydwa%C5%84ski-237469173/">
          <FaLinkedin />
        </a>
      </section>
      <section className="links">{pathMap}</section>
      <em> &copy {currentDate} github rydwan94 all rights reserved </em>
    </div>
  );
};

export default Footer;
