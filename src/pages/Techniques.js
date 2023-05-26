import TechniquesSearcher from "../components/TechniquesSearcher";

import TechniquesList from '../components/TechniquesList'

import '../styles/TechniquesContainer.css'

const Techniques = () => {
    return ( 
        <div className="techniquesContainer">
            <TechniquesSearcher/>
            <TechniquesList />
        </div>
     );
}
 
export default Techniques;