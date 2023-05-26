import { useState, useContext } from 'react';

import { techniquesContext } from '../context/TechniquesContext';

import '../styles/TechniquesSearcher.css'


const TechniquesSearcher = () => {

    const {dispatch} = useContext(techniquesContext)

    const [selectValue, setSelectValue] = useState('')

    const handleSelect = e => {
      setSelectValue(e.target.value)
      dispatch({type: 'chooseKyou', selectValue: e.target.value})
  }

  const handleTechniqueCategory = (value) => {
    dispatch({type: 'chooseCategory' , techniquePosition: value })
  }

  const handleFavouritesTechniques = () => {
    dispatch({type: 'favouriteTechniques'})
  }
    

    return ( 
        <div className="searcherContainer">
      <h2 className="searcherHeading">Find judo technique</h2>
      <div className="searcherForm">
        <label className="searcherLabel">Choose Kyu:</label>
        <select className="searcherSelect" onChange={handleSelect} >
          <option value="----">---</option>
          <option value="All Techniques">All Techniques</option>
          <option value="6th Kyu">6th Kyu</option>
          <option value="5th Kyu">5th Kyu</option>
          <option value="4th Kyu">4th Kyu</option>
          <option value="3rd Kyu">3rd Kyu</option>
          <option value="2nd Kyu">2nd Kyu</option>
          <option value="1st Kyu">1st Kyu</option>
        </select>
        <button onClick={() => handleTechniqueCategory('Tachi Waza')}  >
          Tachi-Waza
        </button>
        <button onClick={() => handleTechniqueCategory('Ne Waza')}  >
          Ne-Waza
        </button>
        <button onClick={handleFavouritesTechniques}>Favourites Techniques</button>
      </div>

    </div>
     );
}
 
export default TechniquesSearcher;