export const quizReducer = (state, { type, payload}) => {
  switch (type) {
    case "INITIAL STATE":
            return{
                ...state,
               quizcategory:payload
            }
    case "INDEX":
      return {
        ...state,
        index: payload,
      };
    case "SCORE":
      return {
        ...state,
        score: payload,
      };
    case "CATEGORY":
      return {
        ...state,
        quizcategory: payload,
      };
      case "NEXT QUESTION":
        return{
          ...state,
          index:state.index+1,
          selectedOption:null,
         
        };
        case "SELECTED_OPTION":
          return{
            ...state,
            selectedOption:payload.optionId,
            score:payload.isRight? state.score+5:state.score
          }
          case "SUBMIT":
            return{
              ...state,
              selectedOption:null
            }
            case "QUIT":
              return{
                ...state,
                index:0,
                score:0,
                selectedOption:null
              }

    default:
      return state;
  }
};
