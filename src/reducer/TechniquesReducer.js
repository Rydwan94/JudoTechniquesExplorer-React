const TechniquesReducer = (state, action) => {
  switch (action.type) {
    case "chooseKyou":
      if(action.selectValue === 'All Techniques') {
        return {
          ...state,
          filteredData: [...state.data]
        };
      }
      return {
        ...state,
        filteredData: state.data.filter((item) => item.kyu === action.selectValue)
      };
    case "chooseCategory":
      return {
        ...state,
        filteredData: state.data.filter(item => item.category === action.techniquePosition)
      }
    case "toggleDescription":
        return {
          ...state,
          data: state.data.map(item => {
            if(item.id === action.elementId){
              return {...item, active: !item.active };
            } return item
          }),
          filteredData: state.filteredData.map(item => {
            if(item.id === action.elementId){
              return {...item, active: !item.active };
            } return item
          })
        }
      case "isLiked":
        return {
          ...state,
          data: state.data.map(item => {
            if(item.id === action.elementId){
              return{...item, isLiked: !item.isLiked}
            } return item
          }),
          filteredData: state.filteredData.map(item => {
            if(item.id === action.elementId){
              return{...item, isLiked: !item.isLiked}
            } return item
          }) 
        }
      case "favouriteTechniques":
        return{
          ...state,
          filteredData: state.data.filter(item => item.isLiked)
        }
    default:
      throw new Error("something went wrong");
  }
};



export default TechniquesReducer;
