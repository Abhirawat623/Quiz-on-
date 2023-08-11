export const quizReducer = (state, { type, payload }) => {
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
          index:state.index+1
        }
    default:
      return state;
  }
};
