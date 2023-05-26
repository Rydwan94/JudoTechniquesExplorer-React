import { useContext } from "react";
import { techniquesContext } from "../context/TechniquesContext";
import SingleTechnique from "./SingleTechnique";

import '../styles/TechniquesList.css'

const TechniquesList = () => {

  const {state} = useContext(techniquesContext)

  const techniques = state.filteredData.map((item) => (
    <SingleTechnique
      key={item.id}
      id={item.id}
      gif={item.gif}
      description={item.description}
      name={item.name}
      active={item.active}
      isLiked={item.isLiked}
    />
  ));
  return <div className="techniquesList">{techniques}</div>;
};

export default TechniquesList;
