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
      img={item.img}
      description={item.description}
      name={item.name}
      active={item.active}
      isLiked={item.isLiked}
    />
  ));
  if(state.filteredData.length > 0){
  return <div className="techniquesList">{techniques}</div>;
  } return <div className="empty"> <h2>You dont have any favourites techniques</h2></div>
};

export default TechniquesList;
