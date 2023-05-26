import { useContext } from "react";

import { FaAngleDown, FaAngleUp, FaHeart } from "react-icons/fa";

import { techniquesContext } from "../context/TechniquesContext";

import "../styles/SingleTechnique.css";

const heartStyles = {
  active: {
    color: "red",
    transition: ".5s",
    transform: "scale(1.5)",
  },
  inActive: {
    color: "white",
    transition: ".5s",
  },
};

const SingleTechnique = ({ gif, description, name, id, active, isLiked }) => {
  const { dispatch } = useContext(techniquesContext);

  const toggleDescription = (id) => {
    dispatch({ type: "toggleDescription", elementId: id });
  };

  const toggleLike = (id) => {
    dispatch({ type: "isLiked", elementId: id });
  };

  console.log(isLiked);

  return (
    <figure className="techniqueContainer">
      <div>
        <h2>{name}</h2>
        <FaHeart
          onClick={() => toggleLike(id)}
          style={isLiked ? heartStyles.active : heartStyles.inActive}
        />
      </div>
      <img src={gif} alt={name} />
      <figcaption className={active ? "toggledDescription" : null}>
        <button onClick={() => toggleDescription(id)}>
          {active ? <FaAngleDown /> : <FaAngleUp />}
        </button>

        <p>{description}</p>
      </figcaption>
    </figure>
  );
};

export default SingleTechnique;
