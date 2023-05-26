import {createContext, useReducer } from "react";

import TechniquesReducer from "../reducer/TechniquesReducer";

import {techniquesData} from '../data'

export const techniquesContext = createContext()

const initialState = {
    data : techniquesData,
    filteredData: techniquesData,
    favouriteTechniques: techniquesData
}

const TechniquesProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(TechniquesReducer, initialState)

    return ( 
        <techniquesContext.Provider value={{state,dispatch}}>
            {children}
        </techniquesContext.Provider>
     );
}
 
export default TechniquesProvider;